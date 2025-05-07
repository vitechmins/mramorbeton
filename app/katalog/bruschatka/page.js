import BtnComp from "@/components/btn/BtnComp";
import UniversalCatalog from "@/components/UniversalCatalog/UniversalCatalog";
import { dataBruschatka } from "@/constans/dataBruschatka";

export const metadata = {
  title: "Купить брусчатку в Минске - брусчатка цена",
  description: "ᐈ ⭐ Брусчатка из высокопрочного бетона производство в Минске ➤➤➤ ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Продажа по цене от производителя.",
  keywords: "брусчатка, брусчатку, брусчатка купить, минск",
  alternates: {
    canonical: 'https://mramorbeton.by/katalog/bruschatka/'
  },
  ogTitle: 'Купить брусчатку в Минске - брусчатка цена',
  ogDescription: 'ᐈ ⭐ Брусчатка из высокопрочного бетона производство в Минске ➤➤➤ ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Цена от производителя.',
  ogImage: '/fon/fon.webp',
  twitterTitle: 'Купить брусчатку в Минске - брусчатка цена',
  twitterDescription: 'ᐈ ⭐ Брусчатка из высокопрочного бетона производство в Минске ➤➤➤ ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Цена от производителя.',
  twitterImage: '/fon/fon.webp',
  ogType: 'website',
  ogUrl: '',
  twitterCard: '/fon/fon.webp'
};

const page = () => {
  return (
    <main className="" id="main">
      <div className='w-full bg-cover fon2 bg-center' />
      <section className='sd:pt-24 xz:pt-52 pb-20 relative text-white'>
        <div className='container mx-auto'>
          <div className='sd:max-w-2xl xz:w-full'>
            <h1 className='sd:text-5xl xz:text-3xl font-semibold'>
              Производство и реализация{' '}
              <span className="sd:block xz:inline sd:mt-2 xz:mt-0">
                Брусчатки в Минске
              </span>
            </h1>
            <p className='mt-8'>
              Наша компания специализируется на производстве и реализации брусчатки из высокопрочного бетона в Минске. Мы предлагаем широкий ассортимент форм и цветов брусчатки, которая отличается высоким качеством и долговечностью.
            </p>

            <div className='sd:mt-16 xz:mt-12'>
              <BtnComp title='Получить консультацию' index={300} />
            </div>
          </div>
        </div>
      </section>

      <UniversalCatalog title='Брусчатка из высокопрочного бетона' data={dataBruschatka} />

      <section className='py-6 relative bg-white'>
        <div className='container mx-auto'>
          <article className="">
            <h4 className='sd:text-3xl xz:text-xl font-semibold'>
              Как купить недорого брусчатку в Минске?
            </h4>
            <p className='text-gray-600 sd:text-base xz:text-sm mt-5'>
              Покупка брусчатки в Минске по доступной цене возможна благодаря нашему собственному производству. Мы предлагаем широкий ассортимент высококачественной брусчатки из прочного бетона, который отличается долговечностью и эстетической привлекательностью. Наши производственные мощности позволяют изготавливать продукцию без посредников, что значительно снижает её стоимость для конечного потребителя.
            </p>
            <p className='text-gray-600 sd:text-base xz:text-sm mt-5'>
              Приобретая брусчатку у нас, вы получаете продукцию по цене от производителя, что является значительным преимуществом. Мы контролируем каждый этап производства, от выбора сырья до упаковки готовой продукции, чтобы обеспечить высочайшее качество и надежность наших изделий.
            </p>
            <p className='text-gray-600 sd:text-base xz:text-sm mt-5'>
              Обращаясь к нам, вы также можете рассчитывать на профессиональную консультацию и помощь в выборе подходящих материалов для вашего проекта. Наша команда специалистов всегда готова ответить на ваши вопросы и предложить оптимальные решения для благоустройства территории.
            </p>
            <p className='text-gray-600 sd:text-base xz:text-sm mt-5'>
              Не откладывайте свой проект на потом — свяжитесь с нами прямо сейчас, чтобы приобрести качественную брусчатку по выгодной цене и сделать вашу территорию красивой и функциональной.
            </p>
          </article>
        </div>
      </section>

    </main>
  )
}

export default page