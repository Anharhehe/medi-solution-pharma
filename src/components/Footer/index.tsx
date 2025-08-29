import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (

    <footer className="bg-gradient-to-r from-[#0a192f] to-[#112240] text-white">
        {/* Main footer content */}
        <div className="w-full px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

            {/* Left Section */}
            <div className="flex flex-col space-y-4 min-h-[200px]"
            style={{
                paddingLeft:'80px'
            }}>
                <div className="flex items-center space-x-3">
                <h2 className="text-lg font-semibold">About Medi Solution Pharma</h2>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                Bridging global healthcare opportunities since 2020. Empowering healthcare professionals through 
                ethical guidance and complete pharmaceutical support.
                </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-3 min-h-[200px]"
            style={{
                paddingLeft:'115px'
            }}>
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <a href="/aboutus" className="text-gray-300 hover:text-blue-400 text-sm">About Us</a>
                <a href="/contactus" className="text-gray-300 hover:text-blue-400 text-sm">Contact Us</a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-4 min-h-[200px]"
            style={{
                paddingLeft:'60px'
            }}>
                <h3 className="text-lg font-semibold">Contact Info</h3>
                <div className="space-y-4">
                <div className="flex space-x-3 items-start">
                    <div className="text-blue-400 mt-0.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs">Email</p>
                        <a href="https://mail.google.com/mail/?view=cm&to=medisolution.pk@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-sm">medisolution.pk@gmail.com</a>
                    </div>
                </div>

                <div className="flex space-x-3 items-start">
                    <div className="text-blue-400 mt-0.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs">Phone</p>
                        <a href="tel:+923000300680" className="text-white hover:text-blue-400 text-sm">+92 300 0300680</a>
                    </div>
                </div>

                <div className="flex space-x-3 items-start">
                    <div className="text-blue-400 mt-0.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div>
                    <p className="text-gray-400 text-xs">Address</p>
                    <p className="text-white text-sm leading-relaxed">
                        Saif plaza 1st floor, <br /> garden town phase 3, <br /> Gujranwala
                    </p>
                    </div>
                </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col space-y-4 min-h-[200px]"
            style={{
                paddingLeft:'30px'
            }}>
                <h3 className="text-lg font-semibold">Connect With Us</h3>
                <div className="flex gap-6">
                <a href="https://www.facebook.com/profile.php?id=100071135135300" target="_blank" rel="noopener noreferrer" className="w-13 h-13 bg-gray-700/50 hover:bg-blue-600 rounded-full flex items-center justify-center">
                    <FaFacebookF className="w-4 h-4 text-gray-300" />
                </a>
                <a href="https://wa.me/923000300680" target="_blank" rel="noopener noreferrer" className="w-13 h-13 bg-gray-700/50 hover:bg-green-600 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="w-4 h-4 text-gray-300" />
                </a>
                </div>
            </div>

            </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600/30"></div>

        {/* Copyright */}
        <div className="py-6 px-6">
            <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 text-sm">
                © 2020 Medi Solution Pharma Pvt. All rights reserved.
            </p>
            </div>
        </div>
    </footer>


  );
};

export default Footer;