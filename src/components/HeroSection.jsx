import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-blue-950 text-[#f9b17a] py-30 px-10 text-left min-h-[740px] md:min-h-auto md:py-25 md:px-5" id="Home">
      <div className="max-w-[800px] mx-auto ml-5 pt-60 md:pt-25">
        <h3 className="text-2xl md:text-3xl">Hello,</h3>
        <h1 className="text-6xl md:text-8xl my-8">
          I AM <span className="Zwingli hover:text-white">ZWINGLI.</span>
        </h1>
        <h2 className="text-2xl md:text-4xl mb-8">Software Engineer | Frontend Developer</h2>
        <h3 className="text-xl md:text-3xl">Bit by bit, byte by byte: Crafting digital masterpieces.</h3>
      </div>
    </section>
  );
};

export default HeroSection;
