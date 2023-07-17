import Link from "next/link";
import Image from "next/image";

function ArtCard({ work }) {
	return (
		<Link href={`/gallery/${work.slug}`}>
			<div className="relative">
				<Image
					src={work.image}
					alt={work.alt}
					width={800}
					height={600}
					className="mb-10"
				/>
				<div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
					<h2 className="text-xl">{work.name}</h2>
				</div>
			</div>
		</Link>
	);
}

export default ArtCard;
