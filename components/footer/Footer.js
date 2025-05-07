"use client"
import Image from "next/image";
import Icon from "../iconMessenger/Icon";
import { Link as LinkScroll } from 'react-scroll';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

const Footer = () => {
	const [isMobile, setIsMobile] = useState(false);
	const pathname = usePathname()

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize(); // Initialize the value on component mount
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);



	return (
		<footer className={`relative ${pathname === '/kontakty/' ? 'hidden' : 'block'} relative z-0 overflow-hidden bg-white`} id="contacts">
			{/* <div className='w-[700px] h-20 absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-200 to-gray-400 blur-[100px] -z-10' /> */}

			<section className={`sd:pt-20 sd:pb-5 xz:py-6`}>
				<div className={`container mx-auto`}>
					<div className="relative w-full">
						<div className='flex sd:flex-row xz:flex-col justify-between items-center'>
							<div className="flex flex-col items-center">
								<LinkScroll
									to="main"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									<div>
										<Image src='/logo/logo3.webp' alt='Логотип ' width={300} height={300} />
									</div>
								</LinkScroll>


							</div>
							<div className="sd:block xz:hidden">
								<a href="tel:+375293258259 " className="sd:text-5xl xz:text-3xl">
									+375 29 325-82-59
								</a>
							</div>

						</div>
						<div className="custom-gradient-border h-[1px] mt-10"></div>
					</div>



					<aside className='flex sd:justify-between xz:justify-start items-start py-8 sd:flex-row xz:flex-col '>
						<div className=''>
							<div className='flex flex-col items-start sd:justify-center xz:justify-start'>
								<p className='footer-title text-gray-500'>Телефон</p>
								
								<div className='mt-2 flex'>
									<a href='tel:80293258259 ' className="font-semibold mr-2">
										+375 29 325-82-59
									</a>
									<Image src='/svg/a1.svg' alt='Оператор А1 - телефон мастерской' width={15} height={15} />
								</div>
							</div>
						</div>

						<div className='sd:mt-0 xz:mt-4'>
							<p className='footer-title text-gray-500'>Адрес</p>
							<p className='text-sm'>
								Минский р-н, Хатежинский c.c., д.Васьковщина
							</p>
							<p className='text-sm'>
								Координаты: 53.861927, 27.318767
							</p>
							<p className='font-light  text-sm mb-3'>
								(Гродненское направление,12км от МКАД)
							</p>
						</div>

						<div className='sd:mt-0 xz:mt-4'>
							<p className='uppercase text-gray-500 footer-title'>
								режим работы
							</p>
							<p className=''>
								9:00-22:00
							</p>
							<p className='uppercase text-xs font-light'>
								без выходных
							</p>


						</div>
						<nav className='sd:mt-0 xz:mt-4'>
							<p className="footer-title text-gray-500">Social</p>
							<div className="grid grid-flow-col gap-4">
								<Icon color='#000' />
							</div>
						</nav>
					</aside>
				</div>

				<div className="flex flex-col w-full">
					<div className=''>
						<LinkScroll
							to="main"
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer divider divider-neutral h-[1px]"
							rel="nofollow"
							href='#/'
						>
							<button className="z-10 flex justify-center items-center border border-gray-400 hover:bg-gray-700 hover:border-gray-700 bg-gray-400 text-white rounded-full text-xl sd:btn-lg xz:btn-md">

								<Image src='/svg/arrow-white.svg' alt='Стрелка наверх' className="-rotate-45" width={50} height={50} />

							</button>
						</LinkScroll>
					</div>
				</div>



				<aside className="pt-6">
					<div className='container mx-auto text-center '>
						<p className='text-gray-400 xs:text-xs xz:text-[10px] font-light'>
							Copyright © 2024 | Разработка и Продвижение
							<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-blue-600 underline'> VI:TECH</a>.
							{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
						</p>
					</div>
				</aside>

			</section>
		</footer>
	)
}

export default Footer;
