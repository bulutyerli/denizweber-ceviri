import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const reviews = {
  name: "review",
  title: "Reviews",
  type: "document",
  orderings: [orderRankOrdering],

  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "review",
      type: "text",
      title: "Review",
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
      title: "name",
      image: "image",
    },
  },
};

export default reviews;
