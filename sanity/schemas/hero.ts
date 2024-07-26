import { defineField, defineType, Rule } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";
import { BsPersonCircle } from "react-icons/bs";

interface VideoFieldValue {
  asset: {
    _ref: string;
  };
}

interface Fields {
  mainMedia: VideoFieldValue;
  mainHeading: string;
  mainHighlightHeading: string;
  subHeading: string;
}

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: BsPersonCircle,
  fields: [
    defineField({
      name: "mainMedia",
      title: "Main Media",
      type: "file",
      validation: (rule: Rule) =>
        rule.custom((value: VideoFieldValue) => {
          if (!value) {
            return "Media field cannot be left empty";
          }
          const filetype = getExtension(value.asset._ref);
          if (filetype !== "mp4" && filetype !== "webm") {
            return "Media must be an MP4 or WebM video";
          }
          return true;
        }),
    }),
    defineField({
      name: "mainHeading",
      title: "Main Heading",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
      description: "Enter the main heading",
    }),
    defineField({
      name: "mainHighlightHeading",
      title: "Main Heading Highlight",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(4),
      description: "Enter the main heading",
    }),

    defineField({
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(200),
      description: "Enter the sub heading",
    }),
  ],
  validation: (Rule: Rule) => [
    Rule.custom((fields: Fields) => {
      const missingFields: string[] = [];
      if (!fields.mainMedia) {
        missingFields.push("Main media");
      }
      if (!fields.mainHeading) {
        missingFields.push("Main heading");
      }
      if (!fields.subHeading) {
        missingFields.push("Sub heading");
      }
      if (!fields.mainHighlightHeading) {
        missingFields.push("Main highlight heading");
      }
      if (missingFields.length > 0) {
        return `The following fields must be filled: ${missingFields.join(
          ", "
        )}`;
      }
      return true;
    }),
  ],
  preview: {
    select: {
      title: "mainHeading",
    },
  },
});
