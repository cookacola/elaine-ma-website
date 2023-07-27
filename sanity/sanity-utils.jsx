import { createClient, groq } from "next-sanity";

export async function getWorks() {
	const client = createClient({
		projectId: "oiu6t7er",
		dataset: "production",
		apiVersion: "2023-07-16",
	});

	return client.fetch(groq`*[_type == "work"]{
            _id,
            _createdAt,
            name,
            year,
            medium,
            width,
            height,
            status,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`);
}

export async function getWork(slug) {
	const client = createClient({
		projectId: "oiu6t7er",
		dataset: "production",
		apiVersion: "2023-07-16",
	});

	return client.fetch(
		groq`*[_type == "work" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            year,
            medium,
            width,
            height,
            units,
            status,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`,
		{ slug }
	);
}

export async function getMedium(medium) {
	const client = createClient({
		projectId: "oiu6t7er",
		dataset: "production",
		apiVersion: "2023-07-16",
	});

	return client.fetch(
		groq`*[_type == "work" && medium == $medium]{
            _id,
            _createdAt,
            name,
            year,
            medium,
            width,
            height,
            status,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`,
		{ medium }
	);
}

export async function getFeaturedWorks() {
	const client = createClient({
		projectId: "oiu6t7er",
		dataset: "production",
		apiVersion: "2023-07-16",
	});

	return client.fetch(
		groq`*[_type == "work" && featured]{
            _id,
            _createdAt,
            name,
            year,
            medium,
            width,
            height,
            status,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`
	);
}

export async function getProfile() {
	const client = createClient({
		projectId: "oiu6t7er",
		dataset: "production",
		apiVersion: "2023-07-16",
	});

	return client.fetch(
		groq`*[_type == "profile"][0]{
            _id,
            _createdAt,
            header,
            content,
            "image": profileImage.asset->url,
        }`
	);
}

export async function getFooter() {
	const client = createClient({
		projectId: "oiu6t7er",
		dataset: "production",
		apiVersion: "2023-07-16",
	});

	return client.fetch(
		groq`*[_type == "footer"]{
            _id,
            _createdAt,
            title,
            link
        }`
	);
}

export async function getContact() {
	const client = createClient({
		projectId: "oiu6t7er",
		dataset: "production",
		apiVersion: "2023-07-16",
	});

	return client.fetch(
		groq`*[_type == "contact"][0]{
            _id,
            _createdAt,
            header,
            content,
        }`
	);
}
export async function getSlideshowOverlay() {
	const client = createClient({
		projectId: "oiu6t7er",
		dataset: "production",
		apiVersion: "2023-07-16",
	});

	return client.fetch(
		groq`*[_type == "home"]{
            _id,
            _createdAt,
            slideshowTitle
        }`
	);
}
