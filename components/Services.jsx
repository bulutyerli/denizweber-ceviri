"use client";

import Image from "next/image";
import AnimationOnScroll from "./AnimationOnScroll";

export default function Services({ title, service, image }) {
  return (
    <AnimationOnScroll
      classNameInView={"animate-in fade-in delay-150 duration-300"}
      classNameNotInView={"opacity-0"}
    >
      <div className="max-w-3xl p-3 xl:p-20 mb-10 relative">
        <div
          className="absolute inset-x-0 top-[10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] sm:left-40"
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
        <div className="mr-4 ">
          <Image
            className={`h-full w-40 float-left mx-5 my-2 xl:w-60 border border-gray-300 bg-white text-gray-300`}
            src={image}
            alt={`DenizWeber.com ${title}`}
            width={300}
            height={300}
          ></Image>
        </div>
        <div>
          <h4 className="text-3xl font-bold">{title}</h4>
          <p className="mt-1 text-xl">{service}</p>
        </div>
      </div>
    </AnimationOnScroll>
  );
}
