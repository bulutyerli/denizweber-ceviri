import { createClient } from "next-sanity";

const client = createClient({
  projectId: "5fpcr7fn",
  dataset: "production",
  apiVersion: "2023-03-25",
  useCdn: false,
});

export default client;
