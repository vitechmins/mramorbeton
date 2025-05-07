import Image from "next/image";
import MenuSticky from "../MenuSticky/MenuSticky";
import Link from "next/link";
import BtnComp from "../btn/BtnComp";

const UniversalCatalog = ({ title, title2, data }) => {

	return (
		<section className='relative bg-white py-14'>
			<div className='container mx-auto'>

				<div className='flex sd:mt-10 xz:mt-0'>
					<MenuSticky />
					<div className='sd:w-3/4 xz:w-full pl-2'>
						<p className='sd:hidden xz:block mb-2 text-gray-500 uppercase text-center'>
							Каталог
						</p>
						<h2 className='sd:text-4xl xz:text-2xl text-center font-semibold'>
							{title}
						</h2>

						{
							title2 ?
								<p className='mt-2 text-center'>
									{title2}
								</p>
								:
								null
						}

						<div className='mt-8'>
							<p className='text-center uppercase sd:text-sm xz:text-xs'>
								Цветовая гамма бетонных изделий
							</p>

							<div className='flex justify-center mt-3'>
								<Image src='/color/4.webp' alt='Цветовая гамма бетонных изделий' width={800} height={488} />
							</div>

							<p className='text-orange-500 mt-3 sd:text-base xz:text-sm'>
								Внимание! Цвет на экране монитора может отличаться от реального, так как восприятие цвета на экране зависит от установок яркости, контрастности и цветопередачи.
							</p>

							<div className='mt-3'>
								<div className='flex items-center space-x-4 mb-3'>
									<Image src='/color/2.webp' alt='Цвет бетонных изделий - Серый' className="sd:w-[150px] xz:w-28" width={150} height={150} />
									<p className='sd:text-base xz:text-sm'>
										<span className="font-bold"> Серый </span> - это цвет без окраски.
									</p>
								</div>
								<div className='flex items-center space-x-4 mb-3'>
									<Image src='/color/5.webp' className="sd:w-[150px] xz:w-40" alt='Цвет бетонных изделий - Цветная' width={150} height={150} />
									<p className='sd:text-base xz:text-sm'>
										<span className="font-bold"> Цветная </span> - это любой однотонный цвет: белый, жёлтый, зеленый, красный, коричневый и чёрный.
									</p>
								</div>
								<div className='flex items-start space-x-4 mb-3'>
									<Image src='/color/3.webp' className="sd:w-[150px] xz:w-28" alt='Цвет бетонных изделий - «Мрамор из бетона»**' width={150} height={150} />
									<p className='sd:text-base xz:text-sm'>
										<span className="font-bold"> «Мрамор из бетона»** </span> - это цветовая гамма, состоящая из двух и более цветов. К «Мрамору из бетона» относятся все модификации цвета «Мрамор», «Янтарь», «Гранит» и любой другой многоцветный цвет подобранный под заказ.
									</p>
								</div>
							</div>
						</div>

						<div className='grid sd:grid-cols-3 xz:grid-cols-1 gap-4 mt-10'>
							{data.map(product => (
								<article key={product.id} className="card rounded-sm bg-base-100 shadow-xl">
									<figure>
										<Image src={product.img} alt={product.alt} width={700} height={700} />
									</figure>
									<div className="card-body pt-3 pb-3.5">
										<h3 className="card-title">
											{product.title}
										</h3>
										<p className='text-sm mt-1 text-gray-600'>
											<span className="font-semibold">Размеры(мм): {' '}</span>
											<span className="font-normal">{product.size}</span>
										</p>
										<p className='text-sm text-gray-600'>
											<span className="font-semibold">Вес(кг/м2): {' '}</span>
											<span className="font-normal">{product.weight}</span>
										</p>
										<table className='w-full mt-2 text-gray-600'>
											<tbody>
												<tr>
													<td className='font-semibold text-xs bg-slate-200 pl-1'>Цвет</td>
													<td className='font-semibold text-xs text-end bg-slate-300 pr-1'>Цена {product.sh ? '(руб./шт.)' : '(руб./м2)'}</td>
												</tr>
												<tr className="border-b">
													<td className='text-sm pl-1'>Серый:</td>
													<td className='font-semibold text-end pr-2'>{product.gray}</td>
												</tr>
												<tr className={`border-b ${product.colored ? '' : 'hidden'}`}>
													<td className='text-sm pl-1'>Цветной:</td>
													<td className='font-semibold text-end pr-2'>{product.colored}</td>
												</tr>
												<tr className={`border-b ${product.mramornyj ? '' : 'hidden'}`}>
													<td className='text-sm pl-1'>Мраморный:</td>
													<td className='font-semibold text-end pr-2'>{product.mramornyj}</td>
												</tr>
											</tbody>
										</table>

										<div className="card-actions justify-end mt-3">
											<BtnComp title='Заказать' name={product.alt} index={400 + product.id} color='bg-slate-300' />
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

export default UniversalCatalog;
