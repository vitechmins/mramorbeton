// import { Play } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { GoogleTagManager } from '@next/third-parties/google'

// const inter = Play({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Завод: Производство и Продажа изделий из Бетона в Минске",
  description: "ᐈ ⭐ Изготовление и Реализация без посредников продуктов из высокопрочного бетона ➤➤➤ тротуарной плитки, брусчатки тротуарной, искусственного каменя всех видов, брусчатки, фасадных панелей.  ☎️ (029) 325-82-59 ⚡ Работаем на заказ ⚡ Собственное производство ⭐ Быстрое изготовление ⭐ ✓ Цена от производителя.",
  keywords: "завод тротуарной плитки, производство тротуарной плитки, производство брусчатки, производство фасадных панелей, производство бордюров, брусчатка изготовление, купить брусчатку с завода, купить тротуарную плитку с завода",
  alternates: {
    canonical: 'https://mramorbeton.by/'
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

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <GoogleTagManager gtmId="GTM-5MSC62W3" />
        <meta name="google-site-verification" content="E7NeDAlF8D-x8uUtmRbpTKH9TX2YzdabDRO-XoANL1k" />
        <meta name="yandex-verification" content="ba23413d9616a560" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
