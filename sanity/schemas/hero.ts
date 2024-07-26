import { defineField, defineType } from "sanity";
import { BsPersonCircle } from "react-icons/bs";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: BsPersonCircle,
  fields: [
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      media: "mainImage",
    },
  },
});
