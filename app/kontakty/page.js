import DescriptionsContactComp from "@/components/descriptionsContact/DescriptionsContactComp";
import DescriptionsContactUnnComp from "@/components/descriptionsContact/DescriptionsContactUnnComp";
import Image from "next/image";

export const metadata = {
	title: "Контакты производства и продажи продукции из бетона в Минске",
	description: "ᐈ ⭐ Контактные данные компании по производству и продажи продуктов из высокопрочного бетона ➤➤➤ тротуарной плитки, брусчатки тротуарной, искусственного каменя всех видов, брусчатки, фасадных панелей.  ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Цена от производителя.",
	keywords: "контакты",
	alternates: {
		canonical: 'https://mramorbeton.by/kontakty/'
	},
	ogTitle: 'Завод: Производство и Продажа тротуарной плитки в Минске',
	ogDescription: 'ᐈ ⭐ Изготовление и Реализации без посредников ➤➤➤ тротуарной плитки, брусчатки тротуарной, искусственного каменя всех видов, брусчатки, фасадных панелей и многого другого.  ☎️ (044) ... ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐  ✓ Цена от производителя.',
	ogImage: '/fon/fon.webp',
	twitterTitle: 'Завод: Производство и Продажа тротуарной плитки в Минске',
	twitterDescription: 'ᐈ ⭐ Изготовление и Реализации без посредников ➤➤➤ тротуарной плитки, брусчатки тротуарной, искусственного каменя всех видов, брусчатки, фасадных панелей и многого другого.  ☎️ (044) ... ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐  ✓ Цена от производителя.',
	twitterImage: '/fon/fon.webp',
	ogType: 'website',
	ogUrl: '',
	twitterCard: '/fon/fon.webp'
};


const page = () => {
	return (
		<main className='sd:pt-28 xz:pt-32 pb-20' id="main">
			<section className="">
				<div className="container mx-auto">

					<h1 className="text-3xl">
						Контакты
					</h1>
					<div className="sd:mt-20 xz:mt-12 flex justify-between xz:flex-col ss:flex-row">
						<div className="bg-[#f7f7f7] ss:w-1/4 xz:w-full rounded-md p-5">
							<DescriptionsContactComp />
						</div>
						<div className="ss:ml-5 xz:ml-0 xz:mt-5 ss:mt-0 ss:w-3/4 xz:w-full">
							<div className="bg-[#f7f7f7] rounded-md p-5">
								<DescriptionsContactUnnComp />
							</div>
							<div className="mt-5 bg-[#f7f7f7] rounded-md p-5">
								<p className="font-semibold mb-3 pl-5">
									Контактное лицо
								</p>
								<div className="flex xz:flex-col ss:flex-row">
									<div className="ss:w-1/3 xz:w-full">
										<Image src='/foto.webp' width={320} height={320} alt="контактное лицо" className="rounded-md" />
									</div>
									<div className="xz:mt-5 ss:m-5 ss:w-2/3 xz:w-full">

										<p className="text-lg mb-1">
											Хальчицкий Илья Михайлович
										</p>
										<p className="text-xs text-gray-500 uppercase">
											менеджер
										</p>
										<p className="font-light text-xs mt-3 text-gray-500 text-justify">
											Хальчицкий Илья Михайлович - опытный и высококвалифицированный менеджер по продажам продуктов из бетона. Он отличается глубокими знаниями в области строительных материалов и имеет многолетний опыт работы в этой сфере. Илья Михайлович всегда внимателен к потребностям клиентов и готов предложить оптимальные решения для любых задач. Его профессионализм, ответственность и индивидуальный подход к каждому заказу обеспечивают высокий уровень удовлетворенности наших клиентов.
										</p>

									</div>
								</div>
							</div>

							<div className='mt-8'>
								<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad742ca80a7010b8fd07124c84dd83860797523a15d7416bb80f446c25cdcd027&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
							</div>

							<article className="mt-5 font-light text-sm text-justify">
								<p>
									Если у вас возникли вопросы или вам необходима консультация, не стесняйтесь обратиться к нам. Мы с радостью поможем вам разобраться во всех нюансах и предоставит полезные рекомендации. Мы ценим каждого клиента и стремимся предоставить качественное изделие, соответствующие вашим требованиям и потребностям.
								</p>
								<p>
									Не откладывайте заказ продуктов из высокопрочного бетона на потом, свяжитесь с нами прямо сейчас, чтобы получить консультацию от нашего опытного менеджера, Ильи Михайловича. Мы гарантируем вам высокое качество, доступные цены от производителя и своевременную доставку. Пусть ваш проект будет реализован на высшем уровне с нашими материалами.
								</p>
							</article>

						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default page