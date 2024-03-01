import "server-only";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-03-25",
  useCdn: process.env.NODE_ENV === "development" ? true : false,
};

const client = createClient(config);

export async function sanityFetch({ query, qParams, tags }) {
  return client.fetch(query, qParams, {
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
    next: { tags },
  });
}

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
