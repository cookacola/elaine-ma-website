import "./globals.css";

import { Cinzel } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const cinzel = Cinzel({ subsets: ["latin"] });

export const metadata = {
	title: "Elaine Ma Fine Art",
	description:
		"Immerse yourself in the artistic world of Elaine Ma. Discover and explore a stunning collection of her art pieces that beautifully capture her unique blend of creativity and emotion. Stay connected, get in touch and be part of her journey.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={cinzel.className}>
			<body className="mx-auto bg-black text-amber-400">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

export const revalidate = 60;
