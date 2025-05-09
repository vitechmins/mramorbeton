import BtnComp from "@/components/btn/BtnComp";
import UniversalCatalog from "@/components/UniversalCatalog/UniversalCatalog";
import { dataNakladnyieProstupi } from "@/constans/dataNakladnyieProstupi";

export const metadata = {
  title: "Накладные бетонные проступи купить в Минске - цена",
  description: "ᐈ ⭐ Накладные проступи из высокопрочного бетона производство в Минске ➤➤➤ 🔥 Высокая прочность 🔥 ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Продажа по цене от производителя.",
  keywords: "Накладные проступи, бетонные проступи, купить, минск",
  alternates: {
    canonical: 'https://mramorbeton.by/katalog/nakladnyie-prostupi/'
  },
  ogTitle: 'Накладные проступи купить в Минске - цена',
  ogDescription: 'ᐈ ⭐ Накладные проступи из высокопрочного бетона производство в Минске ➤➤➤ 🔥 Высокая прочность 🔥 ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Продажа по цене от производителя.',
  ogImage: '/fon/fon.webp',
  twitterTitle: 'ᐈ ⭐ Накладные проступи из высокопрочного бетона производство в Минске ➤➤➤ 🔥 Высокая прочность 🔥 ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Продажа по цене от производителя.',
  twitterImage: '/fon/fon.webp',
  ogType: 'website',
  ogUrl: '',
  twitterCard: '/fon/fon.webp'
};

const page = () => {
  return (
    <main className="" id="main">
      <div className='w-full bg-cover fon6 bg-center' />
      <section className='sd:pt-24 xz:pt-52 pb-20 relative text-white'>
        <div className='container mx-auto'>
          <div className='sd:max-w-2xl xz:w-full'>
            <h1 className='sd:text-5xl xz:text-3xl font-semibold'>
              Производство и реализация{' '}
              <span className="sd:block xz:inline sd:mt-2 xz:mt-0">
                Накладных бетонных проступей в Минске
              </span>
            </h1>
            <p className='mt-8'>
              Наша компания специализируется на производстве и реализации <span className="font-bold">Накладных бетонных проступей</span> из высокопрочного бетона в Минске. Мы предлагаем широкий ассортимент форм и цветов накладных бетонных проступей, которая отличается высоким качеством и долговечностью.
            </p>

            <div className='sd:mt-16 xz:mt-12'>
              <BtnComp title='Получить консультацию' index={300} />
            </div>
          </div>
        </div>
      </section>

      <UniversalCatalog title='Накладные бетонные проступи из высокопрочного армированного бетона' title2={false} data={dataNakladnyieProstupi} />

      <section className='py-6 bg-white relative'>
        <div className='container mx-auto'>
          <article className="">
            <h4 className='sd:text-3xl xz:text-xl font-semibold mb-5'>
              Как купить и не переплачивать накладные проступи из бетона в Минске?
            </h4>

            <p className='text-gray-600 sd:text-base xz:text-sm mb-2'>
              Если вы хотите купить накладные проступи из бетона в Минске и не переплачивать, вам следует обратить внимание на нашу продукцию. Мы являемся производителями высококачественных бетонных изделий, что позволяет нам предлагать своим клиентам конкурентоспособные цены без лишних наценок посредников. Наше собственное производство гарантирует высокое качество каждой единицы продукции, так как мы контролируем весь процесс от сырья до готовых изделий.
            </p>
            <p className='text-gray-600 sd:text-base xz:text-sm mb-2'>
              Накладные проступи из высокопрочного бетона, которые мы производим, обладают выдающимися эксплуатационными характеристиками. Они прочные, износостойкие и способны выдерживать значительные нагрузки, что делает их идеальным выбором для любых строительных проектов. Благодаря современным технологиям производства, наши проступи сохраняют свою привлекательность и функциональность на долгие годы.
            </p>
            <p className='text-gray-600 sd:text-base xz:text-sm mb-2'>
              Мы предлагаем широкий ассортимент накладных проступей различных размеров и конфигураций, чтобы удовлетворить любые потребности наших клиентов. Обращаясь к нам, вы можете быть уверены в доступной цене от производителя и в том, что получите продукцию высочайшего качества. Наша команда профессионалов всегда готова помочь вам с выбором и предоставить консультацию по любым вопросам. Не откладывайте покупку — свяжитесь с нами сегодня, чтобы приобрести накладные проступи из бетона по лучшей цене в Минске.
            </p>
          </article>
        </div>
      </section>

    </main>
  )
}

export default page