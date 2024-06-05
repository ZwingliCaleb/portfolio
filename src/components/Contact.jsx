import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<div
			className="flex justify-center items-center min-h-[80vh] bg-blue-700 text-white w-full py-20"
			id="Contact"
		>
			<div className="max-w-md w-full p-8 bg-gray-800 shadow-md rounded-md text-center">
				<h1 className="text-3xl mb-6">Get in touch!</h1>
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
