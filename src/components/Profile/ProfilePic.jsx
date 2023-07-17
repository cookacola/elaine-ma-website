import React from "react";
import Image from "next/image";
import { getProfile } from "../../../sanity/sanity-utils";

async function ProfilePic() {
	const profilePic = await getProfile();
	return (
		<div className="relative flex items-center justify-center order-first w-3/4 p-4 md:order-last">
			<Image
				src={profilePic.image}
				alt={profilePic.alt}
				width={300}
				height={500}
			/>
		</div>
	);
}

export default ProfilePic;
