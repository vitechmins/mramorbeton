"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';

const MenuSticky = () => {
	const pathname = usePathname()

	return (
		<div className='sd:w-1/4 xz:w-0 sd:block xz:hidden pr-3'>

			<ul className='sticky top-32 text-xl text-gray-600 font-light'>
				<p className={`${pathname !== '/' ? 'block' : 'hidden'} mb-6 text-4xl font-semibold text-gray-600`}>
					Каталог
					<span className="block font-light text-gray-500 text-sm">
						продукции
					</span>
				</p>
				<li className="border-b pb-3">
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/bruschatka`}>
						Брусчатка
					</Link>
				</li>
				<li className="border-b pb-3 pt-3">
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/trotuarnaya-plitka`}>
						Тротуарная плитка
					</Link>
				</li>
				<li className="border-b pb-3 pt-3">
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/fasadnyie-paneli`}>
						Фасадные, цокольные панели
					</Link>
				</li>
				<li className="border-b pb-3 pt-3">
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/bordyuryi-i-vodostoki`}>
						Бордюры и водостоки
					</Link>
				</li>
				<li className="border-b pb-3 pt-3">
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/ritualnyie-plityi-moshheniya`}>
						Ритуальные плиты мощения
					</Link>
				</li>
				<li className="border-b pb-3 pt-3">
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/nakladnyie-prostupi`}>
						Накладные проступи
					</Link>
				</li>
				<li className="border-b pb-3 pt-3">
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/krupnoformatnye-poshagovye-plity`}>
						Пошаговые плиты
					</Link>
				</li>
				<li className="pt-3">
					<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/nakryivnyie-elementyi`}>
						Накрывные элементы
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default MenuSticky