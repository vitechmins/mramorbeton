import Image from "next/image"
import { usePathname } from 'next/navigation';

const HeaderInfo = () => {
	const pathname = usePathname()
	return (
		<div className={`mt-4 ${pathname === '/kontakty/' || pathname === '/o-nas/' ? 'hidden' : 'xz:flex'} sd:hidden absolute top-16 -z-10 flex-col text-white bg-transparent`}>
			<p className='font-light text-white/90 text-sm'>
				Минский р-н, Хатежинский c.c., д.Васьковщина
			</p>
			<p className='font-light text-white/85 text-sm'>
				Координаты: 53.861927, 27.318767
			</p>
			<p className='font-light text-white/85 text-sm mb-3'>
				(Гродненское направление,12км от МКАД)
			</p>
			<div className='flex'>
				<a href='tel:80293258259 ' className='font-bold'>
					+375 29 325-82-59
				</a>
				<Image src='/svg/a1.svg' alt='Телефон оператора А1' className="ml-1" width={15} height={15} />
			</div>
		</div>
	)
}

export default HeaderInfo