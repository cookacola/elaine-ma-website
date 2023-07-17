import React from "react";

export default function Hamburger({ onClick }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="flex w-6 h-6 md:hidden"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			onClick={onClick}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	);
}
