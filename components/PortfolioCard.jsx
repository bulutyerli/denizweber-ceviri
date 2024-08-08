'use client';

import Image from 'next/image';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import AnimationOnScroll from './AnimationOnScroll';

export default function PortfolioCard({ portfolio, image }) {
  const { writer, book, quote } = portfolio;
  return (
    <AnimationOnScroll
      classNameInView={'animate-in fade-in delay-150 duration-300'}
      classNameNotInView={'opacity-0'}
    >
      <section className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32 mx-4">
        <div className="bg-primary pb-10 md:pb-0 rounded-xl shadow-gray-400 shadow-md">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 md:px-8 md:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl md:-mb-8 md:w-96 md:flex-none">
              <div className="relative aspect-[2/3] h-60 md:h-96 md:mx-2">
                <Image
                  className="absolute inset-0 h-full w-full rounded-2xl bg-transparent object-cover"
                  src={image}
                  alt={`${writer} ${book} kapak resmi`}
                  width={256}
                  height={384}
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:flex xl:items-center">
              <figure className="relative isolate py-10">
                <figcaption className="text-xl">
                  <div className="font-semibold text-gray-900">{writer}</div>
                  <div className="mt-1 text-gray-700">{book}</div>
                </figcaption>
                <AnimationOnScroll
                  classNameInView={
                    'animate-in slide-in-from-right-12 delay-200 duration-300 max-w-full'
                  }
                  classNameNotInView={'opacity-0'}
                >
                  <blockquote className="text-xl leading-8 text-gray-800 sm:text-2xl sm:leading-9 italic">
                    <div className="relative">
                      <BiSolidQuoteAltLeft className="absolute top-1 left-0" />
                      <p className="pl-8">{quote}</p>
                    </div>
                  </blockquote>
                </AnimationOnScroll>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  );
}
