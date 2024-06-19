import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-blue-950 text-white py-12 text-center h-32vh md:h-18vh">
      <div className="mt-5 md:mt-2">
        <p className="text-xs md:text-sm font-bold font-montserrat">&copy;{currentYear} Caleb Zwingli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
