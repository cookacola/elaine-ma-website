import React from "react";
import ArtCard from "@/components/ArtCard";
import { getWorks } from "../../../sanity/sanity-utils";

export default async function Gallery() {
	const works = await getWorks();

	// Group works by medium
	const worksBySection = works.reduce((acc, work) => {
		const { section } = work;
		if (section) {
			// Check if section exists
			if (acc[section]) {
				acc[section].push(work);
			} else {
				acc[section] = [work];
			}
		}
		return acc;
	}, {});

	return (
		<div className="mx-10">
			{Object.entries(worksBySection).map(([section, works]) => (
				<div key={section}>
					<h2 className="my-4 mb-10 text-2xl font-semibold text-center">
						{section}
					</h2>
					<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
						{works.map((work) => (
							<div key={work.id} className="flex justify-center">
								<ArtCard work={work} />
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
