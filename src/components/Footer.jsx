import Link from "next/link";
import { getFooter } from "../../sanity/sanity-utils";

const Footer = async () => {
	const footer = await getFooter();
	return (
		<footer className="container p-10 mx-auto border-t border-amber-500">
			<nav
				className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between"
				aria-label="footer-nav"
			>
				<div className="flex flex-col items-center gap-2.5 md:flex-row md:justify-end">
					{footer.map((socialLink) => (
						<Link
							href={socialLink.link}
							key={socialLink._id}
							className="delay-100 hover:text-amber-500"
						>
							{socialLink.title}
						</Link>
					))}
				</div>
				<div className="md:-order-1">Copyright</div>
			</nav>
		</footer>
	);
};

export default Footer;
