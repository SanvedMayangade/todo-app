import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

        {/* Contact Info (Left) */}
        <div className="flex flex-col md:items-start space-y-2 text-sm">
          <div>Email: sanvedmayangade@gmail.com</div>
          <div>Phone: +919146918685</div>
        </div>

        {/* Social Media Links (Center) */}
        <div className="flex space-x-6">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-xl"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-xl"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Copyright (Right) */}
        <div className="text-lg font-semibold text-center md:text-right">
          © 2025 Sanved Mayangade.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
