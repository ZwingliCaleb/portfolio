import React from "react";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-blue-950 text-white w-full py-12 sm:py-16 md:py-20" id="Contact">
      <h1 className="text-3xl sm:text-4xl font-bold mt-8 text-center">Get in touch!</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-lg mt-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start p-4">
          <div className="border-spacing-2 p-8 m-4 rounded-md shadow-2xl bg-slate-900 w-full text-center lg:text-left">
            <h2 className="text-center text-xl font-montserrat mb-4">My Social platforms</h2>
            <div className="flex justify-center gap-8 text-3xl sm:text-4xl mt-6">
              <a
                href="https://www.linkedin.com/in/caleb-zwingli-566b5320b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f23f67]"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/ZwingliCaleb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f23f67]"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://x.com/ZwingliCaleb?t=kn-uAh-mVC4Oz5y5rLU1bA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f23f67]"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://medium.com/@calebzwingli"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f23f67]"
              >
                <FontAwesomeIcon icon={faMedium} />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex h-auto mx-4 items-center">
          <div className="divider divider-horizontal"></div>
        </div>

        <div className="w-full lg:w-1/2 p-4">
          <div className="max-w-md w-full p-6 shadow-2xl rounded-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
