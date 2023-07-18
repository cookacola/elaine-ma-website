import Slideshow from "@/components/Slideshow/Slideshow";
import Profile from "@/components/Profile/Profile";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<section>
			<Slideshow />
			<Profile isHome={true} />
			<Contact />
		</section>
	);
}

export const revalidate = 60;
