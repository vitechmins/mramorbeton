import {
	motion
} from "framer-motion";
import { yCustomAnimation2 } from '@/constans/animation/AnimationConst'
import Link from "next/link";

const MenuComp = ({ setIsOpen }) => {
	return (
		<nav className="sd:py-10 sd:px-10 xz:py-20 xz:px-5">

			<p className='sd:text-5xl xz:text-3xl text-white font-bold'>
				Меню
			</p>

			<motion.div
				className='flex sd:flex-row xz:flex-col mt-9 pl-3'
				initial="hidden"
				whileInView="visible"
				viewport={{
					once: true,
					amount: 0.7
				}}
			>
				<ul className='text-white/90 w-full'>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 text-lg border-dashed pb-2 pl-1'
						custom={1}
						variants={yCustomAnimation2}
					>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
							className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							Главная
						</Link>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2'
						custom={2}
						variants={yCustomAnimation2}
					>
						<div className="collapse collapse-plus bg-transparent -ml-3">
							<input type="checkbox" className="peer" />
							<div className="collapse-title text-lg font-light">
								Пластиковые окна
							</div>
							<div className="collapse-content text-slate-300">
								<Link
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-okna/okna-pvh`}
									className="block mb-2 pl-3"
									onClick={() => setIsOpen(false)}
								>
									Окна ПВХ
								</Link>
								<Link
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-okna/gotovye-plastikovye-okna`}
									className="block mb-2 pl-3"
									onClick={() => setIsOpen(false)}
								>
									Готовые пластиковые окна
								</Link>
								<Link
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-okna/ctoimost-plastikovyh-okon`}
									className="block mb-2 pl-3"
									onClick={() => setIsOpen(false)}
								>
									Стоимость пластиковых окон
								</Link>
								<Link
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-okna/ustanovka-plastikovyh-okon`}
									className="block mb-2 pl-3"
									onClick={() => setIsOpen(false)}
								>
									Установка пластиковых окон
								</Link>
								<Link
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-okna/remont-plastikovyh-okon`}
									className="block mb-2 pl-3"
									onClick={() => setIsOpen(false)}
								>
									Ремонт пластиковых окон
								</Link>
								<Link
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-okna/regulirovka-plastikovyh-okon`}
									className="block mb-2 pl-3"
									onClick={() => setIsOpen(false)}
								>
									Регулировка пластиковых окон
								</Link>
							</div>
						</div>

					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2'
						custom={3}
						variants={yCustomAnimation2}
					>
						<div className="collapse collapse-plus bg-transparent -ml-3">
							<input type="checkbox" className="peer" />
							<div className="collapse-title text-lg font-light">
								Пластиковые двери
							</div>
							<div className="collapse-content text-slate-300">
								<Link
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-dveri/dveri-pvh`}
									className="block mb-2 pl-3"
									onClick={() => setIsOpen(false)}
								>
									Двери ПВХ
								</Link>
								<Link
									onClick={() => setIsOpen(false)}
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-dveri/dveri-pvh-vhodnye`} className="block mb-2 pl-3">
									Двери ПВХ входные
								</Link>
								<Link
									onClick={() => setIsOpen(false)}
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-dveri/dveri-pvh-balkonnye`} className="block mb-2 pl-3">
									Двери ПВХ балконные
								</Link>
								<Link
									onClick={() => setIsOpen(false)}
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-dveri/dveri-pvh-mezhkomnatnye`} className="block mb-2 pl-3">
									Двери ПВХ межкомнатные
								</Link>
								<Link
									onClick={() => setIsOpen(false)}
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-dveri/remont-plastikovyh-dverej`} className="block mb-2 pl-3">
									Ремонт пластиковых дверей
								</Link>
								<Link
									onClick={() => setIsOpen(false)}
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/plastikovye-dveri/regulirovka-plastikovyh-dverej`} className="block mb-2 pl-3">
									Регулировка пластиковых дверей
								</Link>
							</div>
						</div>

					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2 pl-1'
						custom={4}
						variants={yCustomAnimation2}
					>
						<div className="collapse collapse-plus bg-transparent -ml-3">
							<input type="checkbox" className="peer" />
							<div className="collapse-title text-lg font-light">
								Балконы и Лоджии
							</div>
							<div className="collapse-content text-slate-300">
								<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/balkony-i-lodzhii/balkonnye-ramy`} className="block mb-2 pl-3"
									onClick={() => setIsOpen(false)}
								>
									Балконные рамы
								</Link>
								<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/balkony-i-lodzhii/osteklenie-lodzhii`} className="block mb-2 pl-3"
									onClick={() => setIsOpen(false)}
								>
									Остекление лоджии
								</Link>
							</div>
						</div>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2 pl-1'
						custom={5}
						variants={yCustomAnimation2}
					>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/alyuminievye-okna-i-dveri`} className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							Алюминиевые окна и двери
						</Link>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 border-dashed pb-2 pl-1'
						custom={6}
						variants={yCustomAnimation2}
					>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/metallicheskie-vhodnye-dveri`}
							className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							Металлические входные двери
						</Link>

					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3 border-b border-gray-600 text-lg font-light border-dashed pb-2 pl-1'
						custom={7}
						variants={yCustomAnimation2}
					>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/about`}
							className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							О нас
						</Link>
					</motion.li>
					<motion.li
						className='sd:mb-5 xz:mb-3  pl-1 text-lg font-light'
						custom={8}
						variants={yCustomAnimation2}
					>
						<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`}
							className="block mb-2 font-light text-lg"
							onClick={() => setIsOpen(false)}
						>
							Контакты
						</Link>
					</motion.li>
				</ul>

			</motion.div>
		</nav >
	)
}

export default MenuComp