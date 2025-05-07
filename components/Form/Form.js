"use client"
import { sendOrderTelegram } from '@/http/telegramAPI';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import {
	motion
} from "framer-motion";
import { yCustomAnimation2 } from '@/constans/animation/AnimationConst'

const FormOrder = ({ selectedProduct, closeModal, setIsFormSubmitted, title, btn, setIsOpen, setActiveSendForm }) => {
	const [formData, setFormData] = useState({ phone: '', message: '', deviceModel: '', issueType: '', windowType: '', doorType: '', balconyType: '', width: '', height: '', quantity: '' });
	const [tel, setTel] = useState('');
	const [alertActive, setAlertActive] = useState(false);
	const [alertText, setAlertText] = useState('');


	const handleSubmit = (e) => {
		e.preventDefault();
		if (!tel || !formData.issueType) {
			alert('Заполните обязательные поля!');
			return;
		}
		let messageForm = `<b>Заказ с сайта Окна Двери (продажа):</b>\n`;
		messageForm += `<b>${selectedProduct} </b>\n`
		messageForm += `<b>--------------- </b>\n`
		messageForm += `<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>\n`
		messageForm += `<b>--------------- </b>\n`
		messageForm += `<b>Интересует:</b> ${formData.issueType}\n`
		messageForm += `<b>Тип окна ПВХ:</b> ${formData.windowType || '-'}\n`
		messageForm += `<b>Тип двери ПВХ:</b> ${formData.doorType || '-'}\n`
		messageForm += `<b>Тип балконной рамы:</b> ${formData.balconyType || '-'}\n`
		messageForm += `<b>Ширина:</b> ${formData.width || '-'}\n`
		messageForm += `<b>Длина:</b> ${formData.height || '-'}\n`
		messageForm += `<b>Количество:</b> ${formData.quantity || '-'}\n`
		messageForm += `<b>Сообщение: ${formData.message || '-'} </b>\n`

		const telDigitsOnly = tel.replace(/\D/g, '');
		if (telDigitsOnly.length !== 12) {
			setAlertText('Введите весь номер телефона в правильном формате: +375 XX XXX-XX-XX');
			setAlertActive(true);
			setTimeout(() => {
				setAlertActive(false);
			}, 4000);
			return;
		}

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					setActiveSendForm(true)
					setTimeout(() => {
						setActiveSendForm(false)
					}, 4000);
					setIsOpen(false)
				}
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

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
				selection = { start: 5, end: 5 }
				setAlertText('Введите код оператора 29,44,33,25')
				setAlertActive(true);
				setTimeout(() => {
					setAlertActive(false)
				}, 3000)
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

	return (
		<div
			className={`w-full sd:px-12 ${title ? 'xz:px-5' : 'xz:px-2'} sd:py-2 xz:py-0`}
		>
			<p className='text-black uppercase font-bold text-center mb-5 text-xl'>
				{title ? 'Напишите нам' : null}
			</p>
			<form
				className="text-black" onSubmit={handleSubmit}
			>

				<motion.div
					className="form-control sd:mt-2 xz:mt-1"
					custom={2}
					variants={yCustomAnimation2}
				>
					<label className="label">
						<span className="label-text">Что вас интересует?</span>
						<span className="label-text-alt">Обязательное поле</span>
					</label>
					<select
						name="issueType"
						value={formData.issueType}
						onChange={handleChange}
						className="select select-bordered xz:select-sm sd:select-lg"
						required
					>
						<option value="" disabled>Выберите</option>
						<option value="окна пвх">Окна ПВХ</option>
						<option value="Двери ПВХ">Двери ПВХ</option>
						<option value="Балконная рама">Балконная рама</option>
						<option value="Двери">Двери</option>
					</select>
				</motion.div>

				{formData.issueType === 'окна пвх' && (
					<div className="form-control sd:mt-2 xz:mt-1">
						<label className="label">
							<span className="label-text">Тип окна ПВХ</span>
							<span className="label-text-alt">Обязательное поле</span>
						</label>
						<select
							name="windowType"
							value={formData.windowType}
							onChange={handleChange}
							className="select select-bordered xz:select-sm sd:select-lg"
							required
						>
							<option value="" disabled>Выберите</option>
							<option value="Одностворчатые">Одностворчатые</option>
							<option value="Двухстворчатые">Двухстворчатые</option>
							<option value="Трехстворчатые">Трехстворчатые</option>
							<option value="Балконные группы">Балконные группы</option>
						</select>
					</div>
				)}

				{formData.issueType === 'Двери ПВХ' && (
					<div className="form-control sd:mt-2 xz:mt-1">
						<label className="label">
							<span className="label-text">Вид двери ПВХ</span>
							<span className="label-text-alt">Необязательное поле</span>
						</label>
						<select
							name="doorType"
							value={formData.doorType}
							onChange={handleChange}
							className="select select-bordered xz:select-sm sd:select-lg"
						>
							<option value="" disabled>Выберите</option>
							<option value="Пластиковая дверь без стеклянных вставок">Пластиковая дверь без стеклянных вставок</option>
							<option value="Пластиковая дверь со стеклянной вставкой сверху">Пластиковая дверь со стеклянной вставкой сверху</option>
							<option value="Пластиковая дверь с двумя стеклянными вставками и перегородкой">Пластиковая дверь с двумя стеклянными вставками и перегородкой</option>
							<option value="Пластиковая дверь с полным остеклением без перегородки">Пластиковая дверь с полным остеклением без перегородки</option>
							<option value="Двухстворчатая дверь без стеклянных вставок">Двухстворчатая дверь без стеклянных вставок</option>
							<option value="Двухстворчатая дверь со стеклянной вставкой сверху">Двухстворчатая дверь со стеклянной вставкой сверху</option>
							<option value="Двухстворчатая дверь с двумя стеклянными вставками и перегородкой">Двухстворчатая дверь с двумя стеклянными вставками и перегородкой</option>
							<option value="Двухстворчатая дверь с полным остеклением без перегородки">Двухстворчатая дверь с полным остеклением без перегородки</option>
						</select>
					</div>
				)}

				{formData.issueType === 'Балконная рама' && (
					<div className="form-control mt-2">
						<label className="label">
							<span className="label-text">Вид балконной рамы</span>
							<span className="label-text-alt">Необязательное поле</span>
						</label>
						<select
							name="balconyType"
							value={formData.balconyType}
							onChange={handleChange}
							className="select select-bordered xz:select-sm sd:select-lg"
						>
							<option value="" disabled>Выберите</option>
							<option value="Трехстворчатая">Трехстворчатая</option>
							<option value="Четырехстворчатая">Четырехстворчатая</option>
							<option value="Пятистворчатая">Пятистворчатая</option>
							<option value="Г-образная">Г-образная</option>
							<option value="П-образная">П-образная</option>
						</select>
					</div>
				)}

				{formData.issueType === 'Двери' && (
					<div className="form-control mt-2">
						<label className="label">
							<span className="label-text">Вид двери</span>
							<span className="label-text-alt">Необязательное поле</span>
						</label>
						<select
							name="doorType"
							value={formData.doorType}
							onChange={handleChange}
							className="select select-bordered xz:select-sm sd:select-lg"
						>
							<option value="" disabled>Выберите</option>
							<option value="ВХОДНЫЕ ДВЕРИ В КВАРТИРУ">ВХОДНЫЕ ДВЕРИ В КВАРТИРУ</option>
							<option value="ВХОДНЫЕ УЛИЧНЫЕ ДВЕРИ В ДОМ">ВХОДНЫЕ УЛИЧНЫЕ ДВЕРИ В ДОМ</option>
							<option value="ДВЕРИ ВХОДНЫЕ СО СТЕКЛОМ">ДВЕРИ ВХОДНЫЕ СО СТЕКЛОМ</option>
							<option value="ДВЕРИ ВХОДНЫЕ С ЗЕРКАЛОМ">ДВЕРИ ВХОДНЫЕ С ЗЕРКАЛОМ</option>
							<option value="ВХОДНЫЕ ДВЕРИ С ШУМОИЗОЛЯЦИЕЙ">ВХОДНЫЕ ДВЕРИ С ШУМОИЗОЛЯЦИЕЙ</option>
							<option value="ВХОДНЫЕ ДВЕРИ С ТЕРМОРАЗРЫВОМ">ВХОДНЫЕ ДВЕРИ С ТЕРМОРАЗРЫВОМ</option>
							<option value="НЕДОРОГИЕ ВХОДНЫЕ ДВЕРИ">НЕДОРОГИЕ ВХОДНЫЕ ДВЕРИ</option>
							<option value="ВХОДНЫЕ ДВЕРИ ПРЕМИУМ-КЛАССА">ВХОДНЫЕ ДВЕРИ ПРЕМИУМ-КЛАССА</option>
							<option value="ДВЕРИ ВХОДНЫЕ НА ДАЧУ">ДВЕРИ ВХОДНЫЕ НА ДАЧУ</option>
						</select>
					</div>
				)}


				<motion.div
					className="form-control sd:mt-2 xz:mt-1"
					custom={3}
					variants={yCustomAnimation2}
				>
					<label className="label">
						<span className="label-text">Ширина</span>
						<span className="label-text-alt">Необязательное поле</span>
					</label>
					<input
						type="text"
						name="width"
						value={formData.width}
						onChange={handleChange}
						className="input input-bordered input-sm sd:input-lg"
						placeholder="Ширина"
					/>
				</motion.div>

				<motion.div
					className="form-control sd:mt-2 xz:mt-1"
					custom={4}
					variants={yCustomAnimation2}
				>
					<label className="label">
						<span className="label-text">Длина</span>
						<span className="label-text-alt">Необязательное поле</span>
					</label>
					<input
						type="text"
						name="height"
						value={formData.height}
						onChange={handleChange}
						className="input input-bordered xz:input-sm sd:input-lg"
						placeholder="Длина"
					/>
				</motion.div>




				<motion.div
					className="form-control sd:mt-2 xz:mt-1"
					custom={5}
					variants={yCustomAnimation2}
				>
					<label className="label">
						<span className="label-text">Количество</span>
						<span className="label-text-alt">Необязательное поле</span>
					</label>
					<input
						type="text"
						name="quantity"
						value={formData.quantity}
						onChange={handleChange}
						className="input input-bordered xz:input-sm sd:input-lg"
						placeholder="Количество"
					/>
				</motion.div>



				<motion.div
					className="form-control sd:mt-2 xz:mt-1"
					custom={6}
					variants={yCustomAnimation2}
				>
					<label className="label">
						<span className="label-text">Телефон</span>
						<span className="label-text-alt">Обязательное поле</span>
					</label>

					<InputMask
						placeholder="+375 29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar={'-'}
						className={`input input-bordered xz:input-sm sd:input-lg ${alertActive ? 'input-error' : ''}`}
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={handlePhoneChange}
					/>
					<div className="label">
						<span className="label-text-alt text-red-800">
							{alertActive ? alertText : ''}
						</span>
					</div>
				</motion.div>

				<motion.div
					className="form-control sd:mt-2 xz:mt-1"
					custom={7}
					variants={yCustomAnimation2}
				>
					<label className="label">
						<span className="label-text">Сообщение</span>
						<span className="label-text-alt">Необязательное поле</span>
					</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="textarea textarea-bordered xz:textarea-sm sd:textarea-lg"
						placeholder="Ваше сообщение"
					></textarea>
				</motion.div>

				<motion.div
					className="form-control mt-6"
					custom={8}
					variants={yCustomAnimation2}
				>
					<button className="btn btn-primary font-bold text-white uppercase" type="submit">
						{btn}
					</button>
				</motion.div>
			</form>
			{/* {
				alertActive ?
					<div role="alert" className="alert alert-warning absolute top-5 left-1/2 -translate-x-1/2 z-50">
						<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.625-.712 3.49-1.612C22.732 16.548 23 14.989 23 12s-.268-4.548-.654-6.388C21.495 4.712 20.41 4 18.87 4H5.13c-1.54 0-2.625.712-3.49 1.612C1.268 7.452 1 9.011 1 12s.268 4.548.654 6.388c.865.9 1.95 1.612 3.49 1.612z"></path></svg>
						<div className="text-sm font-medium">
							<p>Введите код оператора 29,44,33,25</p>
						</div>
					</div> :
					null
			} */}
		</div>
	)
}

export default FormOrder;
