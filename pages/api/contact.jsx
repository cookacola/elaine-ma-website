import nodemailer from "nodemailer";

import React from "react";

function ContactAPI(req, res) {
	const { name, email, message } = req.body;

	const data = {
		name,
		email,
		message,
	};

	return res.status(200).json({ message: "success" });
}

export default ContactAPI;
req, res;
