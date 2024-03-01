import "server-only";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-03-25",
  useCdn: false,
};

const client = createClient(config);

export async function sanityFetch({ query, qParams, tags }) {
  return client.fetch(query, qParams, {
    cache: "force-cache",
    next: { tags },
  });
}

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
