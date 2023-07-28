const Works = {
	name: "work",
	type: "document",
	title: "Works",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "year",
			type: "string",
			title: "Year",
		},
		{
			name: "medium",
			type: "string",
			title: "Medium",
		},
		{
			name: "width",
			type: "number",
			title: "Width",
		},
		{
			name: "height",
			type: "number",
			title: "Height",
		},
		{
			name: "units",
			type: "string",
			title: "Units",
		},
		{
			name: "status",
			type: "string",
			title: "Status",
		},
		{
			name: "section",
			type: "string",
			title: "Section",
		},
		{
			name: "featured",
			type: "boolean",
			title: "Featured",
		},
		{
			name: "slug",
			type: "slug",
			title: "Slug",
			options: { source: "name" },
		},
		{
			name: "image",
			type: "image",
			title: "Image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alt",
				},
			],
		},
		{
			name: "url",
			type: "url",
			title: "URL",
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};

export default Works;
