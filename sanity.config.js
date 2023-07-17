import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
	projectId: "oiu6t7er",
	dataset: "production",
	title: "Elaine Ma Website",
	apiVersion: "2023-07-16",
	basePath: "/admin",
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;
