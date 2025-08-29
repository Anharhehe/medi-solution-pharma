'use client'

import React from "react";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Heart, CircleQuestionMark } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactUsPage() {
  const [paddingTop, setPaddingTop] = useState("0px");

  useEffect(() => {
    const handleResize = () => {
      setPaddingTop(window.innerWidth >= 768 ? "300px" : "0px");
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/923000300680', '_blank');
  };

  const handleEmail = () => {
    window.open('https://mail.google.com/mail/?view=cm&to=medisolution.pk@gmail.com', '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+923000300680', '_self');
  };

  const whyChooseUsReasons = [
    {
      title: "Trusted Expertise",
      description: "Years of dedicated experience in poultry healthcare and farm productivity solutions."
    },
    {
      title: "High-Quality Products",
      description: "Scientifically formulated, safe, and result-oriented medicines for poultry."
    },
    {
      title: "Innovative Approach",
      description: "Constantly introducing advanced, research-based solutions to meet modern farming needs."
    },
    {
      title: "Customer-Centric Service",
      description: "Personalized support, expert guidance, and reliable after-sales care."
    },
    {
      title: "Commitment to Success",
      description: "Helping farmers achieve healthier flocks and higher profitability through sustainable practices."
    }
  ];


  const Banner = () => {
    return (
      <div className="w-full">
        {/* Background Image Section */}
        <div className="w-full relative">
          <div
            className="w-full h-[300px] md:h-[450px] bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/contactus2.png')`,
              backgroundColor: '#0D2023'
            }}
          />
          
          {/* Contact Cards Overlay - Only on desktop, normal flow on mobile */}
          <div className="hidden md:block absolute left-0 right-0 bottom-0 transform translate-y-1/2"
          style={{
            paddingTop:'150px'
          }}>
            <div className="container mx-auto px-80">
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Phone Contact */}
                <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-green-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Speak with our experts for immediate assistance
                    </p>
                    <button 
                      onClick={handlePhoneCall}
                      className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 
                        text-white px-6 py-3 rounded-lg font-semibold 
                        hover:from-green-900 hover:via-green-700 hover:to-green-500 
                        transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                      +92 300 0300680
                    </button>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <FaWhatsapp className="w-6 h-6 text-green-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Quick support and direct dm to our expert
                    </p>
                    <button 
                      onClick={handleWhatsApp}
                        className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 
                        text-white px-6 py-3 rounded-lg font-semibold 
                        hover:from-green-900 hover:via-green-700 hover:to-green-500 
                        transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                      Message Us
                    </button>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-green-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Send detailed inquiries and questions via Email
                    </p>
                    <button 
                      onClick={handleEmail}
                      className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 
                        text-white px-6 py-3 rounded-lg font-semibold 
                        hover:from-green-900 hover:via-green-700 hover:to-green-500 
                        transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards - Mobile Only (Normal Flow) */}
        <div className="block md:hidden py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
              {/* Phone Contact */}
              <div className="bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 text-green-800" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    Speak with our experts for immediate assistance
                  </p>
                  <button 
                    onClick={handlePhoneCall}
                    className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 
                      text-white px-4 py-2 rounded-lg font-semibold text-sm
                      hover:from-green-900 hover:via-green-700 hover:to-green-500 
                      transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer w-full"
                      >
                    +92 300 0300680
                  </button>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                    <FaWhatsapp className="w-5 h-5 text-green-800" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    Quick support and direct dm to our expert
                  </p>
                  <button 
                    onClick={handleWhatsApp}
                      className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 
                      text-white px-4 py-2 rounded-lg font-semibold text-sm
                      hover:from-green-900 hover:via-green-700 hover:to-green-500 
                      transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer w-full"
                      >
                    Message Us
                  </button>
                </div>
              </div>

              {/* Email Contact */}
              <div className="bg-white rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 text-green-800" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    Send detailed inquiries and questions via Email
                  </p>
                  <button 
                    onClick={handleEmail}
                    className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 
                      text-white px-4 py-2 rounded-lg font-semibold text-sm
                      hover:from-green-900 hover:via-green-700 hover:to-green-500 
                      transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer w-full"
                      >
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Location Section */}
        <div 
        style={{paddingTop, paddingBottom:'100px'}}
        className="container mx-auto px-4 md:px-12 lg:px-16 xl:px-24 pt-0 md:pt-12 pb-8">
          <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-100/80 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 mb-4 border border-green-800">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-green-800 animate-pulse" />
                <span className="text-green-800 font-medium text-xs md:text-sm">Visit Our Office</span>
              </div>
              
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-green-800 via-green-500 to-green-600 bg-clip-text text-transparent">
                Our Location
              </h1>
              
              <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 px-4 md:px-0">
              Visit our office and meet the passionate professionals who are revolutionizing veterinary healthcare and making a difference in animals' lives across Pakistan.
              </p>
          </div>

          {/* 2 Column Grid for Map and Office Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mx-auto">
            {/* Left Side - Google Map */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div
                className="relative h-122 cursor-pointer overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-500"
                onClick={() => window.open('https://www.google.com/maps/place/32%C2%B012%2722.9%22N+74%C2%B011%2744.6%22E/@32.2063611,74.1957222,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d32.2063611!4d74.1957222', '_blank')}
                >
                {/* Iframe that perfectly fills the container */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.052019345882!2d74.1957222!3d32.2063611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s32%C2%B012'22.9%22N+74%C2%B011'44.6%22E!5e0!3m2!1sen!2s!4v1692345678901!5m2!1sen!2s"
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{ border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saif Plaza Location - Garden Town Phase 3, Gujranwala"
                ></iframe>

                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-center justify-center z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-green-800 animate-bounce" />
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side - Office Details */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 border border-green-100">
              <div className="space-y-6">

                {/* Address Section */}
                <div className="flex items-start space-x-4 bg-green-50 p-4 rounded-xl border border-green-100 hover:shadow-md transition-all">
                  <div className="flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-700 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-base">Address</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Saif Plaza, 1st Floor<br />
                      Garden Town Phase 3<br />
                      Gujranwala, Pakistan
                    </p>
                  </div>
                </div>

                {/* Working Days Section */}
                <div className="flex items-start space-x-4 bg-green-50 p-4 rounded-xl border border-green-100 hover:shadow-md transition-all">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-700 mt-1" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">Working Days</h3>
                    <div className="divide-y divide-green-100">
                      <div className="flex justify-between items-center py-1">
                        <span className="text-gray-700 text-sm">Monday - Saturday</span>
                        <span className="text-green-600 font-medium text-sm">Open</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-gray-700 text-sm">Sunday</span>
                        <span className="text-red-500 font-medium text-sm">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours Section */}
                <div className="flex items-start space-x-4 bg-green-50 p-4 rounded-xl border border-green-100 hover:shadow-md transition-all">
                  <div className="flex-shrink-0">
                    <Clock className="w-5 h-5 text-green-700 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-base">Working Hours</h3>
                    <div className="bg-white rounded-lg p-3 border border-green-200 shadow-sm">
                      <p className="text-green-800 font-semibold text-base">
                        9:00 AM - 5:00 PM
                      </p>
                      <p className="text-green-600 text-sm mt-1">
                        Monday to Saturday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>          
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div 
        className="py-20 bg-gradient-to-r from-[#0a192f] to-[#112240] text-white">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-4">
              <div className="w-3 h-3 bg-green-800 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800 uppercase tracking-wider">Your Satisfaction, Our Priority</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
          </div>

          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 1 - Quality Assurance */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-center h-64 flex flex-col justify-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Trusted Expertise</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Years of dedicated experience in poultry healthcare and farm productivity solutions.
                </p>
              </div>

              {/* 2 - High-Quality Products (ICON CHANGED TO STAR) */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-center h-64 flex flex-col justify-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    {/* Star / Quality Badge */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <polygon strokeLinejoin="round" strokeLinecap="round"
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21 12 17.77 5.82 21 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">High-Quality Products</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Scientifically formulated, safe, and result-oriented medicines for poultry.
                </p>
              </div>

              {/* 3 - Innovative Solutions */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-center h-64 flex flex-col justify-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovative Approach</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Constantly introducing advanced, research-based solutions to meet modern farming needs.
                </p>
              </div>

              {/* 4 - Customer-Centric Service (ICON CHANGED TO HEART) */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-center h-64 flex flex-col justify-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                    {/* Heart */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer-Centric Service</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Personalized support, expert guidance, and reliable after-sales care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div 
        style={{paddingTop:'60px'}}
        className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-100/80 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 mb-4 border border-green-800">
                <CircleQuestionMark className="w-3 h-3 md:w-4 md:h-4 text-green-800 animate-pulse" />
                <span className="text-green-800 font-medium text-xs md:text-sm">Any Query?</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-green-800 via-green-500 to-green-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="group">
                <div 
                  className="bg-[#95D5B2] hover:bg-[#8BC5A3] transition-all duration-300 p-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    const target = e.currentTarget as HTMLDivElement;
                    const answer = target.nextElementSibling as HTMLDivElement;
                    const icon = target.querySelector('[data-icon]') as HTMLDivElement;
                    
                    if (!answer || !icon) return;
                    
                    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
                      answer.style.maxHeight = answer.scrollHeight + 'px';
                      answer.style.opacity = '1';
                      icon.style.transform = 'rotate(180deg)';
                    } else {
                      answer.style.maxHeight = '0px';
                      answer.style.opacity = '0';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 pr-4">
                      What types of poultry medicines do you offer?
                    </h3>
                    <div 
                      data-icon="true"
                      className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0"
                  style={{maxHeight: '0px', opacity: '0'}}
                >
                  <div className="bg-white mt-2 p-6 shadow-lg border-l-4 border-[#95D5B2]">
                    <p className="text-gray-700 leading-relaxed">
                      We provide a wide range of poultry medicines including antibiotics, vitamins, premixes, growth enhancers, and preventive supplements for broilers, layers, and breeders.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="group">
                <div 
                  className="bg-[#95D5B2] hover:bg-[#8BC5A3] transition-all duration-300 p-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    const target = e.currentTarget as HTMLDivElement;
                    const answer = target.nextElementSibling as HTMLDivElement;
                    const icon = target.querySelector('[data-icon]') as HTMLDivElement;
                    
                    if (!answer || !icon) return;
                    
                    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
                      answer.style.maxHeight = answer.scrollHeight + 'px';
                      answer.style.opacity = '1';
                      icon.style.transform = 'rotate(180deg)';
                    } else {
                      answer.style.maxHeight = '0px';
                      answer.style.opacity = '0';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 pr-4">
                      Do you provide dosage instructions with your products?
                    </h3>
                    <div 
                      data-icon="true"
                      className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0"
                  style={{maxHeight: '0px', opacity: '0'}}
                >
                  <div className="bg-white mt-2 p-6 shadow-lg border-l-4 border-[#95D5B2]">
                    <p className="text-gray-700 leading-relaxed">
                      Absolutely. Each product comes with clear dosage instructions, and our support team can guide you if you have specific concerns.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="group">
                <div 
                  className="bg-[#95D5B2] hover:bg-[#8BC5A3] transition-all duration-300 p-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    const target = e.currentTarget as HTMLDivElement;
                    const answer = target.nextElementSibling as HTMLDivElement;
                    const icon = target.querySelector('[data-icon]') as HTMLDivElement;
                    
                    if (!answer || !icon) return;
                    
                    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
                      answer.style.maxHeight = answer.scrollHeight + 'px';
                      answer.style.opacity = '1';
                      icon.style.transform = 'rotate(180deg)';
                    } else {
                      answer.style.maxHeight = '0px';
                      answer.style.opacity = '0';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 pr-4">
                      Can I buy medicines in bulk for my farm?
                    </h3>
                    <div 
                      data-icon="true"
                      className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0"
                  style={{maxHeight: '0px', opacity: '0'}}
                >
                  <div className="bg-white mt-2 p-6 shadow-lg border-l-4 border-[#95D5B2]">
                    <p className="text-gray-700 leading-relaxed">
                      Yes, we offer both retail and bulk purchase options. Contact us directly for wholesale pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="group">
                <div 
                  className="bg-[#95D5B2] hover:bg-[#8BC5A3] transition-all duration-300 p-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    const target = e.currentTarget as HTMLDivElement;
                    const answer = target.nextElementSibling as HTMLDivElement;
                    const icon = target.querySelector('[data-icon]') as HTMLDivElement;
                    
                    if (!answer || !icon) return;
                    
                    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
                      answer.style.maxHeight = answer.scrollHeight + 'px';
                      answer.style.opacity = '1';
                      icon.style.transform = 'rotate(180deg)';
                    } else {
                      answer.style.maxHeight = '0px';
                      answer.style.opacity = '0';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 pr-4">
                      Do you deliver across Pakistan?
                    </h3>
                    <div 
                      data-icon="true"
                      className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0"
                  style={{maxHeight: '0px', opacity: '0'}}
                >
                  <div className="bg-white mt-2 p-6 shadow-lg border-l-4 border-[#95D5B2]">
                    <p className="text-gray-700 leading-relaxed">
                      Yes, we provide delivery services nationwide. Delivery times may vary depending on your location.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="group">
                <div 
                  className="bg-[#95D5B2] hover:bg-[#8BC5A3] transition-all duration-300 p-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    const target = e.currentTarget as HTMLDivElement;
                    const answer = target.nextElementSibling as HTMLDivElement;
                    const icon = target.querySelector('[data-icon]') as HTMLDivElement;
                    
                    if (!answer || !icon) return;
                    
                    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
                      answer.style.maxHeight = answer.scrollHeight + 'px';
                      answer.style.opacity = '1';
                      icon.style.transform = 'rotate(180deg)';
                    } else {
                      answer.style.maxHeight = '0px';
                      answer.style.opacity = '0';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 pr-4">
                      How can I place an order?
                    </h3>
                    <div 
                      data-icon="true"
                      className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0"
                  style={{maxHeight: '0px', opacity: '0'}}
                >
                  <div className="bg-white mt-2 p-6 shadow-lg border-l-4 border-[#95D5B2]">
                    <p className="text-gray-700 leading-relaxed">
                      Contact our team via Email, Whatsapp, Facebook and place order or just{" "}
                      <a
                        href="https://wa.me/923000300680"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 underline hover:text-green-800 transition-colors"
                      >
                        click here
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="group">
                <div 
                  className="bg-[#95D5B2] hover:bg-[#8BC5A3] transition-all duration-300 p-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    const target = e.currentTarget as HTMLDivElement;
                    const answer = target.nextElementSibling as HTMLDivElement;
                    const icon = target.querySelector('[data-icon]') as HTMLDivElement;
                    
                    if (!answer || !icon) return;
                    
                    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
                      answer.style.maxHeight = answer.scrollHeight + 'px';
                      answer.style.opacity = '1';
                      icon.style.transform = 'rotate(180deg)';
                    } else {
                      answer.style.maxHeight = '0px';
                      answer.style.opacity = '0';
                      icon.style.transform = 'rotate(0deg)';
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 pr-4">
                      Can I apply for a role in Medi Solution Pharma?
                    </h3>
                    <div 
                      data-icon="true"
                      className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300"
                    >
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0"
                  style={{maxHeight: '0px', opacity: '0'}}
                >
                  <div className="bg-white mt-2 p-6 shadow-lg border-l-4 border-[#95D5B2]">
                    <p className="text-gray-700 leading-relaxed">
                      Yes, you can contact our HR to apply for a position at Medi Solution Pharma{" "}
                      <a
                        href="https://wa.me/923039586588"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 underline hover:text-green-800 transition-colors"
                      >
                        click here
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





      </div>    
    );
  };

  return <Banner />;
}