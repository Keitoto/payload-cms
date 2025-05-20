import { defaultLexical } from "@/fields/defaultLexical";
import { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "homepage",
  label: "Home Page",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "aboutText",
      type: "richText",
      editor: defaultLexical,
      required: true,
    }
  ],
}