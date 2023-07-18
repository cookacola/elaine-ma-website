import Slideshow from "@/components/Slideshow/Slideshow";
import Profile from "@/components/Profile/Profile";
import Contact from "@/components/Contact";
import SlideshowOverlay from "@/components/Slideshow/SlideshowOverlay";

export default function Home() {
	return (
		<section>
			<Slideshow />
			<Profile isHome={true} />
			<SlideshowOverlay />
			<Contact />
		</section>
	);
}

export const revalidate = 60;
