import Services from "@/components/Services";
import client from "@/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

export default async function HizmetlerimPage() {
  const services = await client.fetch(`*[_type == "service"]`, {
    next: {
      revalidate: 2,
    },
  });

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="mt-20 flex-grow">
      <div className="relative max-w-4xl mx-auto mb-40">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-4xl font-semibold leading-6 text-gray-900">
            Hizmetlerim
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {services.map((service, i) => {
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
