import Image from "next/image";
import MenuSticky from "../MenuSticky/MenuSticky";
import Link from "next/link";

const products = [
	{
		id: 1,
		title: "Брусчатка",
		price: "от 28 руб.",
		image: "/catalog/1.webp",
		link: `${process.env.NEXT_PUBLIC_BASE_URL}/katalog/bruschatka`,
		alt: "Производство и продажа Брусчатки"
	},
	{
		id: 2,
		title: "Тротуарная плитка",
		price: "от 24 руб.",
		image: "/catalog/2.webp",
		link: `${process.env.NEXT_PUBLIC_BASE_URL}/katalog/trotuarnaya-plitka`,
		alt: "Производство и продажа Тротуарной плитки"
	},
	{
		id: 3,
		title: "Фасадные панели",
		price: "от 38 руб.",
		image: "/catalog/3.webp",
		link: `${process.env.NEXT_PUBLIC_BASE_URL}/katalog/fasadnyie-paneli`,
		alt: "Производство и продажа Фасадных панелей"
	},
	{
		id: 4,
		title: "Бордюры и водостоки",
		price: "от 6 руб.",
		image: "/catalog/4.webp",
		link: `${process.env.NEXT_PUBLIC_BASE_URL}/katalog/bordyuryi-i-vodostoki`,
		alt: "Производство и продажа Бордюров и водостоков"
	},
	{
		id: 5,
		title: "Ритуальные плиты мощения",
		price: "от 100 руб.",
		image: "/catalog/5.webp",
		link: `${process.env.NEXT_PUBLIC_BASE_URL}/katalog/ritualnyie-plityi-moshheniya`,
		alt: "Производство и продажа Ритуальных плит мощения"
	},
	{
		id: 6,
		title: "Накладные проступи",
		price: "от 30 руб.",
		image: "/catalog/6.webp",
		link: `${process.env.NEXT_PUBLIC_BASE_URL}/katalog/nakladnyie-prostupi`,
		alt: "Производство и продажа Накладных проступей"
	},
	{
		id: 7,
		title: "Пошаговые плиты",
		price: "от 15 руб.",
		image: "/catalog/7.webp",
		link: `${process.env.NEXT_PUBLIC_BASE_URL}/katalog/krupnoformatnye-poshagovye-plity`,
		alt: "Производство и продажа Накладных проступей"
	},
	{
		id: 8,
		title: "Накрывные элементы",
		price: "от 15 руб.",
		image: "/catalog/8.webp",
		link: `${process.env.NEXT_PUBLIC_BASE_URL}/katalog/nakryivnyie-elementyi`,
		alt: "Производство и продажа Накрывных элементов"
	},
];

const Catalog = () => {
	return (
		<section className='relative bg-white py-14'>
			<div className='container mx-auto'>

				<h2 className='sd:text-4xl xz:text-2xl text-center font-semibold'>
					Каталог продукции из высокопрочного бетона
				</h2>

				<div className='flex mt-10'>

					<MenuSticky />

					<div className='sd:w-3/4 xz:w-full pl-2'>
						<div className='grid sd:grid-cols-3 xz:grid-cols-1 gap-4'>
							{products.map(product => (
								<article key={product.id} className="card rounded-sm bg-base-100 shadow-xl">
									<figure>
										<Image src={product.image} alt={product.alt} width={700} height={700} />
									</figure>
									<div className="card-body">
										<h3 className="card-title">
											{product.title}
										</h3>
										<p>
											{product.price}
										</p>
										<div className="card-actions justify-end">

											<div className="badge badge-outline">
												<Link href={product.link}>
													Подробнее
												</Link>
											</div>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Catalog;
