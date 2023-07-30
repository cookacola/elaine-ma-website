import React from "react";
import Link from "next/link";
import { Raleway } from "next/font/google";
import { getProfile } from "../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });

async function ProfileBio({ isHome }) {
	const profile = await getProfile();
	return (
		<div className="flex flex-col justify-center w-1/2 bioSection">
			<h2 className="mb-4 text-2xl font-bold">{profile.header}</h2>
			<p
				className={`${raleway.className} mb-4 text-base font-normal text-gray-100 space-y-4`}
			>
				<PortableText value={profile.content} />
			</p>
			{isHome ? <Link href="/about">More</Link> : null}
		</div>
	);
}

export default ProfileBio;
