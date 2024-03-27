import Image from 'next/image';
import CustomButton from '@/components/Button';
import Link from 'next/link';

export default function Homepage() {
  return (
    <main>
      <div className="relative isolate overflow-hidden pt-14 min-h-screen">
        <Image
          src="/homebg.png"
          alt="denizweber.com anasayfa kütüphane fotoğrafı"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1400}
          height={1200}
        />
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Deniz Weber
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 px-5 xl:px-0">
              Merhaba! Edebiyatin büyülü dünyasından başlayarak, akademik ve
              bilimsel metinlere kadar geniş bir yelpazede çeviri hizmetleri
              sunuyorum. Orijinal ifadeyi koruyarak, dilin güzelliklerini ve
              anlamını zenginleştirmeyi hedefliyorum. Her bir çeviriyi
              dikkatlice kontrol ediyor, edebi dili, akademik titizliği ve
              bilimsel doğruluğu garanti altına alıyorum. Sizinle birlikte dilin
              sınırlarını aşmayı ve bilgiyi küresel bir ölçekte paylaşmayı dört
              gözle bekliyorum.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                className="rounded-md bg-primary px-3 w-fit py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-primary_dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_dark"
                href="/bana-ulasin"
                text={'Bana Ulaşın'}
                type={'button'}
                link={'/bana-ulasin'}
              >
                Bana Ulaşın
              </Link>
              <Link
                href="hakkimda"
                className="text-sm font-semibold leading-6 text-white cursor-pointer hover:underline"
              >
                Hakkımda <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </main>
  );
}
