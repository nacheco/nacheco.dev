import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { dataset, projectId } from "./sanity/env";
import { schema as schemaTypes } from "./sanity/schema";
import { AiFillHome, AiFillEdit } from "react-icons/ai";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["hero"]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content Configuration")
          .items([
            S.listItem()
              .title("Hero")
              .id("hero")
              .icon(AiFillHome)
              .child(S.document().schemaType("hero").documentId("hero")),
            S.listItem()
              .title("Projects")
              .id("projects")
              .icon(AiFillEdit)
              .child(
                S.document().schemaType("projects").documentId("projects")
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes.types,

    // Filter out singleton types from the global "New document" menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
