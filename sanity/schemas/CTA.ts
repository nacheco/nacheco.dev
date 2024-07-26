import { defineField, defineType } from "sanity";

export default defineType({
  name: "CTA",
  title: "Contact Information",
  type: "document",

  fields: [
    defineField({
      name: "weekDayHours",
      title: "Week-Day Hours",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
      description: "Example : 'Monday - Fridays from 9am to 3:30pm'",
    }),
    defineField({
      name: "weekendHours",
      title: "Weekend Hours",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(80),
      description: "Example : 'Weekends - Closed'",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
      description: "Enter the email address here",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
      description: "Enter the phone number here",
    }),
  ],
  validation: (Rule) => [
    Rule.custom((fields) => {
      const missingFields = [];
      if (!fields.weekDayHours) {
        missingFields.push("Week Day Hours");
      }
      if (!fields.weekendHours) {
        missingFields.push("Weekend Hours");
      }
      if (!fields.email) {
        missingFields.push("Email Address");
      }
      if (!fields.phoneNumber) {
        missingFields.push("Phone Number");
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
      title: "weekDayHours",
    },
  },
});
