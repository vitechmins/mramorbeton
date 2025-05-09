import BtnComp from "@/components/btn/BtnComp";
import UniversalCatalog from "@/components/UniversalCatalog/UniversalCatalog";
import { dataPoshagovyePlity } from "@/constans/dataPoshagovyePlity";

export const metadata = {
  title: "Пошаговые плиты для дорожки купить в Минске, цена",
  description: "ᐈ ⭐ Пошаговые плиты для дорожки из высокопрочного бетона производство в Минске ➤➤➤ 🔥 Высокая прочность 🔥 ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Продажа по цене от производителя.",
  keywords: "Пошаговые плиты, купить, минск",
  alternates: {
    canonical: 'https://mramorbeton.by/katalog/krupnoformatnye-poshagovye-plity/'
  },
  ogTitle: 'Пошаговые плиты для дорожки купить в Минске, цена',
  ogDescription: 'ᐈ ⭐ Пошаговые плиты для дорожки из высокопрочного бетона производство в Минске ➤➤➤ 🔥 Высокая прочность 🔥 ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Продажа по цене от производителя.',
  ogImage: '/fon/fon.webp',
  twitterTitle: 'Пошаговые плиты для дорожки купить в Минске, цена',
  twitterDescription: 'ᐈ ⭐ Пошаговые плиты для дорожки из высокопрочного бетона производство в Минске ➤➤➤ 🔥 Высокая прочность 🔥 ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Продажа по цене от производителя.',
  twitterImage: '/fon/fon.webp',
  ogType: 'website',
  ogUrl: '',
  twitterCard: '/fon/fon.webp'
};

const page = () => {
  return (
    <main className="" id="main">
      <div className='w-full bg-cover fon7 bg-center' />
      <section className='sd:pt-24 xz:pt-52 pb-20 relative text-white'>
        <div className='container mx-auto'>
          <div className='sd:max-w-2xl xz:w-full'>
            <h1 className='sd:text-5xl xz:text-3xl font-semibold'>
              Производство и реализация{' '}
              <span className="sd:block xz:inline sd:mt-2 xz:mt-0">
                Пошаговых плит в Минске
              </span>
            </h1>
            <p className='mt-8'>
              Наша компания специализируется на производстве и реализации <span className="font-bold">Пошаговых плит для дорожки</span> из высокопрочного бетона в Минске. Мы предлагаем широкий ассортимент форм и цветов накладных пошаговых плит для дорожки, которая отличается высоким качеством и долговечностью.
            </p>

            <div className='sd:mt-16 xz:mt-12'>
              <BtnComp title='Получить консультацию' index={300} />
            </div>
          </div>
        </div>
      </section>

      <UniversalCatalog title='Пошаговые плиты из высокопрочного армированного бетона' title2='Для обустройства парков, аллей, придомовых территорий, игровых площадок и дачных участков часто выбирают крупноформатные бетонные плиты. Это неудивительно, ведь такая плитка обладает высокой прочностью и износостойкостью, делая её идеальным вариантом для различных территорий.' data={dataPoshagovyePlity} />

      <section className='py-6 bg-white relative'>
        <div className='container mx-auto'>
          <article className="">
            <h4 className='sd:text-3xl xz:text-xl font-semibold mb-5'>
              Купить хорошего качества и не переплачивать Пошаговые плиты из бетона в Минске
            </h4>

            <p className='text-gray-600 sd:text-base xz:text-sm mb-2'>
              Если вы ищете надежное и выгодное решение для обустройства пешеходных зон, въездных групп или других территорий, пошаговые плиты из бетона идеально подходят для таких задач. Наше собственное производство гарантирует высокое качество и надежность каждой плиты, благодаря использованию высокопрочного бетона.
            </p>
            <p className='text-gray-600 sd:text-base xz:text-sm mb-2'>
              Мы предлагаем пошаговые плиты по цене от производителя, что позволяет существенно экономить без потери качества. Наша продукция отличается долговечностью и износостойкостью, что особенно важно для объектов с высокой проходимостью. Мы предлагаем разнообразие размеров и форм, чтобы удовлетворить любые дизайнерские и функциональные требования вашего проекта.
            </p>
            <p className='text-gray-600 sd:text-base xz:text-sm mb-2'>
              Наши специалисты всегда готовы помочь вам с выбором и предоставить консультацию по характеристикам и преимуществам нашей продукции. Не откладывайте обновление вашего пространства на потом — свяжитесь с нами сегодня, чтобы заказать пошаговые плиты из бетона и начать проект обустройства вашей территории вместе с профессионалами.
            </p>
          </article>
        </div>
      </section>

    </main>
  )
}

export default page