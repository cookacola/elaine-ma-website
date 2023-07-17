const Profile = {
	name: "profile",
	type: "document",
	title: "Profile",
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
		{
			name: "profileImage",
			type: "image",
			title: "ProfileImage",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alt",
				},
			],
		},
	],
};

export default Profile;
