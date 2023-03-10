import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioLogo from "./components/StudioLogo";
import StudioNavbar from "./components/StudioNavbar";
import { defaultDocumentNode } from "./lib/structure";

// ENVS
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Cart_Content_Studio",
  title: "Cart Content Studio",

  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode: defaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar
    }
  },

  theme: myTheme
});
