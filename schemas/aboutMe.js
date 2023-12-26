const aboutMe = {
  name: "aboutme",
  title: "About Me",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "aboutme",
      type: "text",
      title: "About Me",
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};

export default aboutMe;
