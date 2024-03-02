import Services from "@/components/Services";
import { sanityFetch } from "@/lib/sanity.client";
import { serviceQuery } from "@/lib/sanity.query";
import { urlFor } from "@/lib/imageBuilder";

export const metadata = {
  title: "Deniz Weber Çeviri Hizmetleri",
  description:
    "İngilizce - Türkçe kitap çevirisi, edebi çeviri ve çeviri kontrol hizmetleri verilir. Yazarın orijinal ifadesi korunarak eser çevirisi gerçekleştirilir.",
};

export default async function HizmetlerimPage() {
  const services = await sanityFetch({ query: serviceQuery, tags: "service" });

  return (
    <div className="mt-20 flex-grow">
      <div className="relative max-w-4xl mx-auto mb-40">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <h1 className="bg-white px-3 text-4xl font-semibold leading-6 text-gray-900">
            Hizmetlerim
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {services.map((service) => {
          const image = urlFor(service.image).width(300).height(300).url();

          return (
            <Services
              key={service.title}
              title={service.title}
              service={service.service}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
}
