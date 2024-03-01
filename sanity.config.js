import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default defineConfig({
  name: "default",
  title: "denizweber-translation",
  projectId: "5fpcr7fn",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({ type: "portfolyo", S, context }),
            orderableDocumentListDeskItem({ type: "review", S, context }),
            S.documentTypeListItem("aboutme"),
            S.documentTypeListItem("service"),
          ]);
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
