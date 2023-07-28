import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getWork } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });

export default async function Work({ params }) {
	const slug = params.slug;

	const work = await getWork(slug);

	return (
		<div className="flex flex-col items-center w-2/3 gap-8 mx-auto mt-16">
			<div className="w-full">
				<Image
					src={work.image}
					alt={work.alt}
					width={700} // give appropriate values based on your needs
					height={500} // give appropriate values based on your needs
					layout="responsive"
					objectFit="contain"
					className="mb-10"
				/>
			</div>

			<div className="flex flex-col items-center gap-5">
				<h1>{work.name}</h1>
				<h1>{work.medium}</h1>
				<h1>
					{work.width}x{work.height} {work.units}
				</h1>
				<h2>{work.year}</h2>
				<h1>{work.status}</h1>
				<div className={`mb-10 text-white ${raleway.className}`}>
					<PortableText value={work.content} />
				</div>
				<Link href="/gallery" className="mb-10">
					Back
				</Link>
			</div>
		</div>
	);
}
