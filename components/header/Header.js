"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import HeaderInfo from './HeaderInfo';

export default function Header() {
  useEffect(() => {
    const links = document.querySelectorAll('.drawer-side ul li a');
    const drawerToggle = document.querySelector('#my-drawer');

    links.forEach(link => {
      link.addEventListener('click', () => {
        drawerToggle.checked = false;
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {
          drawerToggle.checked = false;
        });
      });
    };
  }, []);

  return (
    <header className='z-50 bg-base-100 absolute right-0 left-0 top-0 shadow-xl text-gray-700'>
      <div className='container mx-auto'>

        <div className="navbar px-0">
          <div className="navbar-start">
            <Link className="cursor-pointer" href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}>
              <Image src='/logo/logo3.webp' alt='логотип' width={230} height={200} />
            </Link>
          </div>

          <nav className="navbar-center hidden sd:flex">
            <ul className="menu menu-horizontal p-0 font-light text-lg">
              <li>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}>
                  Главная
                </Link>
              </li>
              <li className="relative group">
                <a className="cursor-pointer">
                  Каталог
                </a>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96 absolute top-10 -left-8 hidden group-hover:block">
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/bruschatka`}>
                      Брусчатка
                    </Link>
                  </li>
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/trotuarnaya-plitka`}>
                      Тротуарная плитка
                    </Link>
                  </li>
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/fasadnyie-paneli`}>
                      Фасадные, цокольные панели
                    </Link>
                  </li>
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/bordyuryi-i-vodostoki`}>
                      Бордюры и водостоки
                    </Link>
                  </li>
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/ritualnyie-plityi-moshheniya`}>
                      Ритуальные плиты мощения
                    </Link>
                  </li>
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/nakladnyie-prostupi`}>
                      Накладные проступи
                    </Link>
                  </li>
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/krupnoformatnye-poshagovye-plity`}>
                      Пошаговые плиты
                    </Link>
                  </li>
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/nakryivnyie-elementyi`}>
                      Накрывные элементы
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/o-nas`}>
                  О нас
                </Link>
              </li>
              <li>
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>


          <div className="navbar-end">
            <div className='text-xs mr-10 xz:hidden sd:block'>
              <p className='font-semibold'>Режим работы:</p>
              <p>9:00-22:00 Пн-Вс</p>
            </div>
            <div className='flex flex-col xz:hidden sd:block'>
              <a href='tel:+375 29 325-82-59 ' className='link link-hover flex sd:text-xl xz:text-base'>
                +375 29 325-82-59
                <Image src='/svg/a1.svg' alt='Телефон оператора А1' width={15} height={15} className='ml-2 sd:block xz:hidden' />
              </a>
            </div>

            <nav className="drawer sd:hidden xz:flex justify-end drawer-end">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="">
                  <Image src='/svg/menu.svg' alt='Кнопка меню' width={30} height={30} />
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content pt-10">
                  <li className='mb-4 text-xl font-semibold'>
                    <a>Меню</a>
                  </li>
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}>
                      Главная
                    </Link>
                  </li>
                  <li>
                    <details open>
                      <summary>
                        Каталог
                      </summary>
                      <ul className="">
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/bruschatka`}>
                            Брусчатка
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/trotuarnaya-plitka`}>
                            Тротуарная плитка
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/fasadnyie-paneli`}>
                            Фасадные, цокольные панели
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/bordyuryi-i-vodostoki`}>
                            Бордюры и водостоки
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/ritualnyie-plityi-moshheniya`}>
                            Ритуальные плиты мощения
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/nakladnyie-prostupi`}>
                            Накладные проступи
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/krupnoformatnye-poshagovye-plity`}>
                            Пошаговые плиты
                          </Link>
                        </li>
                        <li>
                          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/katalog/nakryivnyie-elementyi`}>
                            Накрывные элементы
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/o-nas`}>
                      О нас
                    </Link>
                  </li>
                  <li>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`}>
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>


        <HeaderInfo />
      </div>
    </header>
  );
}
