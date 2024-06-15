import React from "react";
import ContactForm from "./ContactForm";
//import { Divider } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center min-h-screen bg-blue-950 text-white w-full py-20"
      id="Contact"
    >
      <h1 className="text-5xl font-bold mt-8 text-center">Get in touch!</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-lg mt-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start p-4">
          <div className="border p-8 m-4 rounded-md w-full text-center lg:text-left">
            <h2 className="text-2xl mb-4">Socials</h2>
            <div className="text-4xl md:text-4xl mt-8">
              <a
                href="https://www.linkedin.com/in/caleb-zwingli-566b5320b/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-yellow-500"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/ZwingliCaleb"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-yellow-500"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://x.com/ZwingliCaleb?t=kn-uAh-mVC4Oz5y5rLU1bA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-yellow-500"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://medium.com/@calebzwingli"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-yellow-500"
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
          <div className="max-w-md w-full p-6 shadow-lg rounded-md border mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
