import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Almarai } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });
const almarai = Almarai({ subsets: ['arabic'], weight: ['700'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${almarai.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/*<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          اسم يعني التميز&nbsp;
          <code className="font-mono font-bold">مدرسة فاطمة الزهراء</code>
        </p> */}
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Online School{' '}
            <Image
              src="/123.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>*/}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className={`flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 ${almarai.className}`}
            href="https://web.facebook.com/groups/536486061805055"
            target="_self"
            rel="noopener noreferrer"
          >
            صفحة المدرسة الرسمية على الفيسبوك{' '}
            <Image
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={`flex flex-col items-end ${almarai.className}`}>
        <Image
          className=""
          src="Images/234.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1
          className={almarai.className}
          style={{
            fontSize: '30px',
            color: 'black',
            direction: 'rtl',
            textAlign: 'center',
          }}
        >
          مدرسة فاطمة الزهراء الثانوية بنات بقنا
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/adspage"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            إعلانات{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
            صفحة تهتم بإعلانات المدرسة والإعلانات الخارجية للمجتمع
          </p>
        </Link>

        <Link
          href="/students"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            الطالبات{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
            صفحة تهتم بالطالبات وخدماتهم المدرسية&nbsp;والإجتماعية
          </p>
        </Link>

        <Link
          href="/teachers"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            المعلمون{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
            صفحة تهتم بأمور المعلمين في المدرسة&nbsp;وخدماتهم
          </p>
        </Link>

        <Link
          href="/blogs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            أخبار{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
            صفحة تهتم بأخبار المدرسة وجميع أنشطة المدرسة الأخرى
          </p>
        </Link>
      </div>
    </main>
  );
}
