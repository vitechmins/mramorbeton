import Image from "next/image"
import {
	motion
} from "framer-motion";
import { yCustomAnimation2 } from '@/constans/animation/AnimationConst'

const ContactsComp = () => {
	return (
		<div className="sd:py-10 sd:px-10 xz:py-20 xz:px-5">

			<p className='sd:text-5xl xz:text-3xl text-white font-bold'>
				Контакты
			</p>

			<motion.div
				className='mt-12 text-white'
				initial="hidden"
				whileInView="visible"
				viewport={{
					once: true,
					amount: 0.7
				}}
			>
				{/* <motion.div
					className='flex items-center'
					custom={1}
					variants={yCustomAnimation2}
				>
					<Image src='/svg/phone.svg' alt='Телефон' className="" width={30} height={30} />
					<a href='tel:8029' className="font-semibold sd:text-2xl xz:text-xl ml-3 mr-2">
						+375 29 000-00-00
					</a>
					<Image src='/svg/mts.svg' alt='Оператор МТС - телефон для заказа Окон и Дверей' width={65} height={65} />
				</motion.div> */}
				<motion.div
					className='mt-6 flex items-center'
					custom={1}
					variants={yCustomAnimation2}
				>
					<Image src='/svg/phone.svg' alt='Телефон' className="" width={30} height={30} />
					<a href='tel:80447628628' className="font-semibold sd:text-2xl xz:text-xl ml-3 mr-2">
						+375 44 762-86-28
					</a>
					<Image src='/svg/a1.svg' alt='Оператор А1 - телефон для заказа Окон и Дверей' width={20} height={20} />
				</motion.div>

				<motion.div
					className='flex mt-8 items-center'
					custom={3}
					variants={yCustomAnimation2}
				>
					<Image src='/svg/location-white.svg' className="-ml-2" alt='Адрес' width={35} height={35} />
					<p className='font-light sd:text-xl xz:text-base ml-3'>
						г. Борисов ул. Демина 37г
						<span className='block text-xs'>
							Пожалуйста, позвоните перед визитом.
						</span>
					</p>
				</motion.div>

				<motion.div
					className='flex mt-6 items-center'
					custom={4}
					variants={yCustomAnimation2}
				>
					<Image src='/svg/mail.svg' className="" alt='Почта' width={25} height={25} />
					<p className='font-light sd:text-xl xz:text-base ml-4'>
						dveri.belarusi@mail.ru
					</p>
				</motion.div>

				<motion.div
					className='mt-8 flex items-center'
					custom={5}
					variants={yCustomAnimation2}
				>
					<a href="viber://chat?number=%2B375447628628" target="_blank" className={`mr-2.5 lg:tooltip`} data-tip="Viber">
						<Image src='/svg/viber1.svg' alt='Вайбер для заказа окон и дверей' className="rounded-full" width={38} height={38} />
					</a>
					<a href={`https://t.me/@dveribelarusi`} target='_blank' className={`mx-2.5 lg:tooltip`} data-tip="Telegram">
						<Image src='/svg/telegram1.svg' alt='Телеграмм' width={35} height={35} />
					</a>
					<a href='http://wa.me/375447628628?text=Нужна%20консультация' target='_blank' className={`mx-2.5 lg:tooltip`} data-tip="Whatsapp">
						<Image src='/svg/whatsapp.svg' alt='Whatsapp для заказа окон и дверей' width={35} height={35} />
					</a>
					<a href='https://www.instagram.com/dveribelarusi' target='_blank' className={`ml-2.5 lg:tooltip`} data-tip="Instagram">
						<Image src='/svg/Instagram1.svg' className="" alt='Instagram для заказа окон и дверей' width={45} height={45} />
					</a>
				</motion.div>

				<motion.div
					className='py-10'
					custom={6}
					variants={yCustomAnimation2}
				>
					<Image src='/fon/fon2.webp' alt='Фоновое изображение - Контакты для заказа окон и дверей' className="rounded-btn sd:w-[500px] xz:w-80 xy:w-96" width={300} height={300} />
				</motion.div>

			</motion.div>
		</div>
	)
}

export default ContactsComp