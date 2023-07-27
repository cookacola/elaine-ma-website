import React from "react";
import Contact from "@/components/Contact";
import { getContact } from "../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

async function ContactPage() {
	const contact = await getContact();
	return (
		<section className="grid items-start grid-cols-1 gap-6 p-6 md:grid-cols-2">
			<div className="p-6 space-y-4 shadow-md">
				<h1 className="text-2xl font-bold text-center">{contact.header}</h1>
				<p className="text-lg text-white">
					<PortableText value={contact.content} />
				</p>
			</div>
			<div>
				<Contact />
			</div>
		</section>
	);
}

export default ContactPage;
export const revalidate = 60;
