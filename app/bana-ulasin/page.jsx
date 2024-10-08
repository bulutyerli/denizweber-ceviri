import Form from "@/components/Form";

export const metadata = {
  title: "Deniz Weber Çeviri Hizmetleri İletişim Formu",
  description:
    "İngilizce - Türkçe kitap çevirisi, edebi çeviri ve kontrol alanında hizmet almak için bana iletişim formu, email ya da instagram ile ulaşabilirsiniz.",
};

export default function BanaUlasinPage() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 my-10 flex-grow">
      <div
        className="absolute inset-x-0 top-[10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[5rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary_light to-primary_dark opacity-50 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Bana Ulaşın
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Kitap çevirisi, edebi, akademik ve bilimsel çeviri veya çeviri kontrol
          ile ilgili destek arıyorsanız, bana ulaşın.
        </p>
      </div>
      <Form />
    </div>
  );
}
