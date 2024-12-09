import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative font-montserrat bg-gradient-to-b from-gray-950 to-blue-950 text-[#f23f67] py-30 px-10 text-left min-h-[740px] md:min-h-auto md:py-25 md:px-5" id="Home">
      <div className="max-w-[800px] mx-auto ml-1 md:ml-5 pt-60 md:pt-25">
        <h3 className="text-2xl font-bold md:text-3xl">Hello,</h3>
        <h1 className="text-6xl md:text-8xl font-bold my-8">
          I AM <span className="hover:text-white">ZWINGLI.</span>
        </h1>
        <h2 className="text-2xl font-bold md:text-4xl mb-8">Software Engineer | AWS Certified Cloud Practitioner</h2>
        <h3 className="text-xl md:text-3xl">Bit by bit, byte by byte: Crafting digital masterpieces.</h3>
      </div>
    </section>
  );
};

export default HeroSection;
