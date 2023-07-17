const Pages = {
	name: "page",
	type: "document",
	title: "Pages",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "content",
			type: "array",
			title: "Content",
			of: [{ type: "block" }],
		},
	],
};

export default Pages;
