import BtnComp from "@/components/btn/BtnComp";
import ArticleMainPage from "@/components/SectionMainPage/ArticleMainPage";
import Catalog from "@/components/SectionMainPage/Catalog";

export default function Home() {
  return (
    <main className="" id="main">
      <div className='w-full bg-cover fon bg-center' />

      <section className='sd:pt-24 xz:pt-52 pb-20 relative'>
        <div className='container mx-auto'>

          <div className='text-white sd:max-w-3xl xl:max-w-3xl xz:max-w-full'>
            <h1 className='sd:text-6xl xz:text-3xl font-semibold text-shadow'>
              Производство и реализация{' '}
              <span className="sd:block xz:inline mt-2">
                изделий из бетона в Минске и Беларуси
              </span>
            </h1>
            <p className='mt-8 sd:text-lg xz:text-base'>
              Производство изделий из высокопрочного бетона в Минском районе.
            </p>
            <p className='mt-1 sd:text-lg xz:text-base'>
              В составе бетона используется гранитный отсев, благоторя этому наша продукция обладает повышенной прочностью.
            </p>
            <p className='mt-1 sd:text-lg xz:text-base'>
              Доставка и реализация продукции по всей Беларуси.
            </p>
            <p className='mt-1 sd:text-lg xz:text-base'>
              Гарантия 5 лет!
            </p>


            <div className='sd:mt-16 xz:mt-12'>
              <BtnComp title='Получить консультацию' index={300} />
            </div>
          </div>
        </div>
      </section>

      <Catalog />

      <ArticleMainPage />
    </main>
  );
}
