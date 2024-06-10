import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<section className="flex flex-wrap justify-center items-center min-h-screen md:min-h-auto bg-blue-950 text-white w-full py-20" id="Contact">
			<h1 className="text-5xl mb-6">Get in touch!</h1>
			<div className="max-w-md w-full p-8 bg-gray-800 shadow-md rounded-md text-center">
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
