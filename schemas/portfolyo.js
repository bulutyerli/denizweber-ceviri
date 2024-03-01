import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const portfolyo = {
  name: "portfolyo",
  title: "Portfolyo",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    {
      name: "writer",
      type: "string",
      title: "Writer Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "book",
      type: "string",
      title: "Book Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "quote",
      type: "text",
      title: "Quote",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    orderRankField({ type: "portfolyo" }),
  ],
  preview: {
    select: {
      title: "book",
      image: "image",
    },
  },
};

export default portfolyo;
