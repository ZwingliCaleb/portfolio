import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-[#2d3250] text-[#f9b17a] py-30 px-10 text-left min-h-[740px] md:min-h-auto md:py-25 md:px-5" id="Home">
      <div className="max-w-[800px] mx-auto ml-5 pt-30 md:pt-25">
        <h3 className="text-xl md:text-lg">Hello,</h3>
        <h1 className="text-6xl my-8 md:text-4xl">
          I AM <span className="Zwingli hover:text-white">ZWINGLI.</span>
        </h1>
        <h2 className="text-4xl mb-8 md:text-2xl">Software Engineer | Frontend Developer</h2>
        <h3 className="text-3xl md:text-xl">Bit by bit, byte by byte: Crafting digital masterpieces.</h3>
      </div>
    </div>
  );
};

export default HeroSection;
