import React from "react";

const Portfolio = () => {
	const handleDownloadResume = () => {
		const resumeFile = "Software Dev Resume.pdf";
		const resumePath = process.env.PUBLIC_URL + `/${resumeFile}`;

		const link = document.createElement("a");
		link.href = resumePath;
		link.download = resumeFile;
		link.click();
	};

	return (
		<section id="Portfolio" className="bg-[#1E212F] text-white py-28 md:py-48">
			<h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Portfolio</h2>

			<div className="flex flex-wrap justify-center gap-8">
				<div className="max-w-sm bg-yellow-300 text-black rounded-lg p-6">
					<h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
					<ul className="text-sm">
						<li>React.js</li>
						<li>JavaScript (ES6+)</li>
						<li>HTML5 & CSS3</li>
						<li>Git & GitHub</li>
						<li>Agile Methodologies</li>
						<li>Responsive Web Design</li>
					</ul>
				</div>

				<div className="max-w-sm bg-yellow-300 text-black rounded-lg p-6">
					<h3 className="text-xl font-semibold mb-4">Experience</h3>
					<ul className="text-sm">
						<li>Software Engineer Apprentice at ALX-Africa</li>
						<li>Software Developer Intern at World Agroforestry</li>
						<li>Tech Support Intern at LBDA</li>
					</ul>
					<button
						className="bg-black text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-gray-900 focus:outline-none"
						onClick={handleDownloadResume}
					>
						Download Resume
					</button>
				</div>

				<div className="max-w-sm bg-yellow-300 text-black rounded-lg p-6">
					<h3 className="text-xl font-semibold mb-4">Certificates & Badges</h3>
					<ul className="text-sm">
						<li>ALX-Africa Software Engineering</li>
						<li>Udacity-Bertelsmann: Agile Software Developer</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
