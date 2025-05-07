import BtnComp from "@/components/btn/BtnComp";
import UniversalCatalog from "@/components/UniversalCatalog/UniversalCatalog";
import { dataNakryivnyieElementyi } from "@/constans/dataNakryivnyieElementyi";

export const metadata = {
  title: "Накрывные бетонные элементы для забора купить в Минске, Цена",
  description: "ᐈ ⭐ Накрывные элементы для забора из высокопрочного бетона производство в Минске ➤➤➤ 🔥 Высокая прочность 🔥 ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Продажа по цене от производителя.",
  keywords: "Накрывные элементы, бетонные Накрывные элементы, купить, минск",
  alternates: {
    canonical: 'https://mramorbeton.by/katalog/nakryivnyie-elementyi/'
  },
  ogTitle: 'Накрывные бетонные элементы купить в Минске - цена',
  ogDescription: 'ᐈ ⭐ Накрывные элементы из высокопрочного бетона производство в Минске ➤➤➤ 🔥 Высокая прочность 🔥 ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Продажа по цене от производителя.',
  ogImage: '/fon/fon.webp',
  twitterTitle: 'Накрывные бетонные элементы купить в Минске - цена',
  twitterDescription: 'ᐈ ⭐ Накрывные элементы из высокопрочного бетона производство в Минске ➤➤➤ 🔥 Высокая прочность 🔥 ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Продажа по цене от производителя.',
  twitterImage: '/fon/fon.webp',
  ogType: 'website',
  ogUrl: '',
  twitterCard: '/fon/fon.webp'
};

const page = () => {
  return (
    <main className="" id="main">
      <div className='w-full bg-cover fon8 bg-center' />
      <section className='sd:pt-24 xz:pt-52 pb-20 relative text-white'>
        <div className='container mx-auto'>
          <div className='sd:max-w-2xl xz:w-full'>
            <h1 className='sd:text-6xl xz:text-2xl xy:text-3xl font-semibold'>
              Производство и продажа{' '}
              <span className="sd:block xz:inline sd:mt-2 xz:mt-0">
                Накрывных бетонных элементов для забора в Минске
              </span>
            </h1>
            <p className='mt-8'>
              Наша компания специализируется на производстве и продаже <span className="font-bold">Накрывных элементов</span> из высокопрочного бетона в Минске. Мы предлагаем широкий ассортимент форм и цветов накрывных бетонных элементов, которая отличается высоким качеством и долговечностью.
            </p>

            <div className='sd:mt-16 xz:mt-12'>
              <BtnComp title='Получить консультацию' index={300} />
            </div>
          </div>
        </div>
      </section>

      <UniversalCatalog title='Накрывные бетонные элементы из высокопрочного бетона' title2={false} data={dataNakryivnyieElementyi} />

      <section className='py-6 bg-white relative'>
        <div className='container mx-auto'>
          <article className="">
            <h4 className='sd:text-3xl xz:text-xl font-semibold mb-5'>
              Купить накрывные бетонные элементы для забора и не только в Минске
            </h4>

            <p className='text-gray-600 sd:text-base xz:text-sm mb-2'>
              Наша компания предлагает высококачественные накрывные бетонные элементы для заборов и других конструкций, произведенные на собственном производстве в Минске. Эти элементы изготавливаются из высокопрочного бетона, обеспечивающего долговечность и стойкость к различным климатическим условиям. Мы используем только качественные материалы и следим за каждым этапом производства, чтобы гарантировать высокое качество нашей продукции.
            </p>
            <p className='text-gray-600 sd:text-base xz:text-sm mb-2'>
              Накрывные элементы предназначены не только для заборов, но и для создания эстетически привлекательных и функциональных ограждений и стен. Они предлагают широкие возможности в дизайне благоустройства ландшафта, позволяя создавать уникальные и устойчивые к механическим повреждениям конструкции.
            </p>
            <p className='text-gray-600 sd:text-base xz:text-sm mb-2'>
              Покупая накрывные бетонные элементы у нас, вы можете быть уверены в их надежности и долговечности. Мы предлагаем конкурентоспособные цены от производителя и гибкую систему скидок для оптовых покупателей. Наши специалисты всегда готовы помочь вам с выбором и предоставить профессиональную консультацию по всем вопросам.
            </p>
          </article>
        </div>
      </section>

    </main>
  )
}

export default page