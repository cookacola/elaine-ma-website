const Contact = {
	name: "contact",
	type: "document",
	title: "Contact",
	fields: [
		{
			name: "header",
			type: "string",
			title: "Header",
		},
		{
			name: "content",
			type: "array",
			title: "Content",
			of: [{ type: "block" }],
		},
	],
};

export default Contact;
