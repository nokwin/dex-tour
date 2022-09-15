import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Dynamic from 'next/dynamic';
import logo from '../assets/logo.png';
import headStage2 from '../assets/touge-mania-stage-2.png';
import lancer from '../assets/HOR_XB1_Mitsubishi_Lancer_99.png';
import subaru from '../assets/HOR_XB1_Subaru_Impreza_04.png';
import { Heading } from '../components/heading.component';
import { CarBlock } from '../components/car-block.component';
import { Suspense } from 'react';

const TourTableClient = Dynamic(
  () =>
    import('../components/tour-table.component').then((mode) => mode.TourTable),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Touge Mania</title>
      </Head>
      <header className="mb-12">
        <nav className="px-4 lg:px-6 py-2.5 bg-custom-bg border-b border-custom-border">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/">
              <a className="flex items-center">
                <span className="w-9 h-9 relative mr-3">
                  <Image
                    src={logo}
                    alt="dex logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                  Touge Mania
                </span>
              </a>
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex gap-4 flex-col">
        <div className="h-57 w-100 relative mx-auto">
          <Image
            src={headStage2}
            alt="touge mania"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Heading size="3xl">Введение</Heading>
        <div className="info-block">
          Всем привет! Хочу вкратце рассказать, откуда взялась идея о проведении
          турнира и почему именно такой формат. Меня дико цепляет тема заездов
          по горным серпантинам (a.k.a тогу), это чистый драйв и проверка на
          скилл, одна ошибка в повороте может стоить вам победы, требуется
          максимальная концентрация на весь заезд. Почему именно эти машины? Они
          максимально близки друг к другу по характеристикам, у каждой свои
          крутые гандикапы, а полный привод дает шанс новичкам и не самым
          прожженным гонщикам потягаться с остальными, по крайней мере мне так
          кажется. Да, я понимаю, что Forza Horizon 5 не самая удобная игра для
          соревнований, но зато удобно с дрона показывать весь заезд. Это второй
          турнир в подобном жанре, первый прошёл весьма успешно, но, разумеется,
          могут быть “блины комом”, я очень хочу привлечь внимание к гоночной
          авто культуре, к данной игре и к жанру в целом. Очень надеюсь на
          честность каждого из участников, чтобы не было никаких казусов с вашей
          стороны, иначе вы не сможете впредь участвовать в наших турнирах, а
          так же испортите настроение и себе и окружающим. Весь турнир будет
          транслироваться на моём канале, зовите своих друзей и знакомых
          поддержать и поболеть за вас! Желаю всем удачи!
        </div>
        <Heading size="3xl">Регламент турнира</Heading>
        <section>
          <div className="flex justify-center gap-16">
            <CarBlock
              title="MITSUBISHI LANCER EVOLUTION VI GSR"
              image={lancer}
            />
            <CarBlock title="SUBARU IMPREZA WRX STI (2004)" image={subaru} />
          </div>
        </section>
        <TourTableClient />
      </main>
    </>
  );
};

export default Home;
