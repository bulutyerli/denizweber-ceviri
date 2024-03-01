import Image from "next/image";
import { sanityFetch, urlFor } from "@/lib/sanity.client";
import SocialLinks from "@/components/SocialLinks";
import { PortableText } from "@portabletext/react";
import { aboutMeQuery } from "@/lib/sanity.query";

export const metadata = {
  title: "Deniz Weber Hakkında ve Biyografi",
  description:
    "İngilizce - Türkçe kitap çevirisi, edebi çeviri ve kontrol alanında uzmanlaşmış profesyonel çeviri hizmeti sunan Deniz Weber'in hakkında bilgi edinin.",
};

export default async function HakkimdaPage() {
  const data = await sanityFetch({ query: aboutMeQuery, tags: "aboutme" });

  const image = urlFor(data.image).width(600).height(700).url();

  return (
    <div className="relative isolate px-5 py-20 min-h-screen">
      <div
        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-12 xl:ml-2"
        aria-hidden="true"
      >
        <div
          className="aspect-[901/1036] w-[50.0625rem] bg-gradient-to-tr from-primary_light to-primary_dark opacity-50"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="mx-auto pb-32 flex flex-col-reverse lg:flex-row justify-center items-center gap-6">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {data.title}
            </h1>
            <div className="relative mt-6 prose lg:prose-lg">
              <PortableText value={data.aboutme} />
            </div>
          </div>
          <Image
            className="w-60 xl:w-96 rounded-xl bg-gray-900/5 object-cover shadow-lg"
            src={image}
            height={300}
            width={400}
            alt="deniz weber profil fotoğrafı"
          ></Image>
        </div>
        <SocialLinks />
      </div>

      <div></div>
    </div>
  );
}
