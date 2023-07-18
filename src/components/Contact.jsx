"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
	const form = useRef();
	const [message, setMessage] = useState("");
	const [showMessage, setShowMessage] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				`${process.env.SERVICE_ID}`,
				`${process.env.TEMPLATE_ID}`,
				form.current,
				`${process.env.PUBLIC_KEY}`
			)
			.then(
				(result) => {
					setMessage("Email successfully sent!");
					form.current.reset();
					setShowMessage(true);
				},
				(error) => {
					setMessage("Message failed to send. Please try again.");
					setShowMessage(true);
				}
			);
	};

	return (
		<div className="h-[80%] text-black bg-amber-500">
			{!showMessage && (
				<form
					ref={form}
					onSubmit={sendEmail}
					id="contact-form"
					className="mb-4 text-center"
				>
					<div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 ">
						<div className="flex flex-col">
							<label htmlFor="firstName" className="mb-2 text-lg">
								First Name
							</label>
							<input
								type="text"
								name="firstName"
								id="firstName"
								required="true"
								placeholder="Jane"
								className="px-4 py-2 border border-gray-300 rounded-sm"
							/>
						</div>

						<div className="flex flex-col">
							<label htmlFor="lastName" className="mb-2 text-lg">
								Last Name
							</label>
							<input
								type="text"
								name="lastName"
								id="lastName"
								required="true"
								placeholder="Doe"
								className="px-4 py-2 border border-gray-300 rounded-sm"
							/>
						</div>

						<div className="flex flex-col">
							<label htmlFor="email" className="mb-2 text-lg">
								Email Address
							</label>
							<input
								type="text"
								name="email"
								id="email"
								required="true"
								placeholder="address@email.com"
								className="px-4 py-2 border border-gray-300 rounded-sm"
							/>
						</div>

						<div className="flex flex-col">
							<label htmlFor="phoneNumber" className="mb-2 text-lg">
								Phone Number
							</label>
							<input
								type="tel"
								name="phoneNumber"
								id="phoneNumber"
								placeholder="(123) 456-7899"
								className="px-4 py-2 border border-gray-300 rounded-sm"
							/>
						</div>
					</div>

					<div className="flex flex-col p-6">
						<label htmlFor="message" className="mb-2 text-lg">
							Message
						</label>
						<textarea
							name="message"
							id="message"
							required="true"
							placeholder="Your message here"
							className="h-24 px-4 py-2 border border-gray-300 rounded-sm"
						/>
					</div>

					<button
						type="submit"
						className="px-8 py-2 mb-4 font-semibold text-black border-2"
					>
						Send Message
					</button>
				</form>
			)}

			{showMessage && (
				<div className="mb-4 text-center h-[80%] text-xl">{message}</div>
			)}
		</div>
	);
}

export default Contact;
