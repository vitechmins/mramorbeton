"use client"
import { sendOrderTelegram } from '@/http/telegramAPI';
import Link from 'next/link';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const FormSupport = ({ setIsOpen, setActiveSendForm, selectedProduct }) => {
	const [tel, setTel] = useState('');
	const [alertActive, setAlertActive] = useState(false);
	const [alertText, setAlertText] = useState('');
	const [agree, setAgree] = useState(false);

	const handlePhoneChange = (e) => {
		const newValue = e.target.value;
		setTel(newValue);
	};

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		let { value } = newState;
		const a = value.replace(/\D/g, '').slice(3, 5);
		let selection = newState.selection;
		if (a.length === 2) {
			const b = ["29", "33", "44", "25"].includes(a);
			if (!b) {
				value = '+375';
				selection = { start: 5, end: 5 };
				setAlertText('Введите код оператора 29,44,33,25')
				setAlertActive(true);
				setTimeout(() => {
					setAlertActive(false);
				}, 3000);
			}
		}
		const cursorPosition = selection ? selection.start : null;
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				selection = { start: cursorPosition - 1, end: cursorPosition - 1 };
			}
			value = value.slice(0, -1);
		}
		return {
			value,
			selection
		};
	};

	const handleAgreeChange = (e) => {
		setAgree(e.target.checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!tel || !agree) {
			alert('Заполните обязательные поля!');
			return;
		}
		let messageForm = `<b>Заказ с сайта Мрамор Бетон:</b>\n`;
		messageForm += `<b>${selectedProduct} </b>\n`
		messageForm += `<b>--------------- </b>\n`
		messageForm += `<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>\n`
		messageForm += `<b>--------------- </b>\n`

		const telDigitsOnly = tel.replace(/\D/g, '');
		if (telDigitsOnly.length !== 12) {
			setAlertText('Введите весь номер телефона в правильном формате: +375 XX XXX-XX-XX');
			setAlertActive(true);
			setTimeout(() => {
				setAlertActive(false);
			}, 4000);
			return;
		}

		// Если количество цифр соответствует формату, отправляем заказ
		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					setActiveSendForm(true);
					setTimeout(() => {
						setActiveSendForm(false);
					}, 4000);
					setIsOpen(false);
				}
			});
	};

	return (
		<div className="w-full sd:px-12 sd:py-2 xz:px-2 xz:py-0">


			<form className="text-black" onSubmit={handleSubmit}>
				<div className="form-control sd:mt-2 xz:mt-1">
					<label className="label">
						<span className="label-text">Телефон</span>
						<span className="label-text-alt">Обязательное поле</span>
					</label>
					<InputMask
						placeholder="+375 29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar="-"
						className={`input input-bordered xz:input-sm sd:input-lg ${alertActive ? 'input-error' : ''}`}
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={handlePhoneChange}
					/>
					<div className="label">
						<span className="label-text-alt text-red-600">
							{alertActive ? alertText : ''}
						</span>
					</div>
				</div>
				<div className="form-control mt-3">
					<label className="cursor-pointer label flex justify-start items-center">
						<input
							type="checkbox"
							className="checkbox checkbox-sm bg-white"
							checked={agree}
							onChange={handleAgreeChange}
						/>
						<span className="label-text ml-2 sd:text-base xz:text-xs">
							Я согласен(на) на <Link href='/agreement' target='_blank' className='underline'>
								обработку персональных данных</Link>
						</span>
					</label>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-secondary font-bold text-white uppercase" type="submit">
						Отправить
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormSupport;
