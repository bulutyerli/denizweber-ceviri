import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

export default function PortfolioCard({ portfolio, image }) {
  const { writer, book, quote } = portfolio;
  return (
    <section className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-[#191928] pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/3] h-96 md:-mx-8 xl:h-full xl:mx-0 xl:aspect-auto">
              <Image
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src={image}
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <figcaption className="mt-8 text-xl">
                <div className="font-semibold text-white">{writer}</div>
                <div className="mt-1 text-gray-400">{book}</div>
              </figcaption>
              <blockquote className="text-xl leading-8 text-white sm:text-2xl sm:leading-9 italic">
                <div className="relative">
                  <BiSolidQuoteAltLeft className="absolute top-1 left-0" />
                  <p className="pl-8">{quote}</p>
                  <BiSolidQuoteAltRight className="absolute bottom-1 right-0" />
                </div>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
