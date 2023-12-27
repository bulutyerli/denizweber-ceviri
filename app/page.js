import Image from "next/image";
import CustomButton from "@/components/Button";
import YorumlarPage from "./yorumlar/page";
import BanaUlasinPage from "./bana-ulasin/page";
import HakkimdaPage from "./hakkimda/page";
import PortfolyoPage from "./portfolyo/page";
import HakkimdaLink from "@/components/HakkimdaLink";

export default function Homepage() {
  return (
    <main>
      <div className="relative isolate overflow-hidden pt-14 mb-48">
        <Image
          src="/homebg.avif"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1400}
          height={1200}
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Deniz Weber Çeviri
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              İngilizce / Türkçe Profesyonel Çeviri Hizmetleri
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <CustomButton
                text={"Bana Ulaşın"}
                link={"bana-ulasin"}
                type={"button"}
              />
              <HakkimdaLink />
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
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div id="portfolyo">
        <PortfolyoPage />
      </div>
      <div id="hakkimda">
        <HakkimdaPage />
      </div>
      <div id="yorumlar">
        <YorumlarPage />
      </div>
      <div id="bana-ulasin" className="relative">
        <BanaUlasinPage />
      </div>
    </main>
  );
}
