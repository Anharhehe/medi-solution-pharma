'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomedIn, setIsZoomedIn] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    health: 0,
    satisfaction: 0,
    products: 0
  });
  const sectionRef = useRef(null);
  const images = ['/landing_page_1.jpg', '/landing_page_2.jpg', '/landing_page_3.jpg', '/landing_page_4.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      // Start zoom out animation
      setIsZoomedIn(false);
      
      // After zoom out completes, change image and zoom back in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsZoomedIn(true);
      }, 2250); // Half of the 4500ms transition duration
      
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedNumbers({
          health: Math.floor(98 * progress),
          satisfaction: Math.floor(97 * progress),
          products: Math.floor(1000000 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedNumbers({
            health: 98,
            satisfaction: 97,
            products: 1000000
          });
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M+';
  }
  return num.toString();
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/${category.toLowerCase()}`);
  }; 

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={images[currentImageIndex]}
          alt={`Landing page ${currentImageIndex + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[4500ms] ease-in-out ${
            isZoomedIn ? 'scale-125' : 'scale-100'
          }`}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0, 0, 0, 0.4)' }}
        ></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
                Welcome to Medi Solution Pharma
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
                Your trusted partner in poultry healthcare solutions. We provide
                comprehensive veterinary poultry services with innovative 
                technologies.
              </p>
            </div>

            {/* Scroll Down Button */}
            <div className="flex justify-center">
              <button
                onClick={handleScrollDown}
                className="flex items-center justify-between px-6 py-3 bg-[#95D5B2] hover:bg-[#1B4332] hover:text-white text-black font-semibold shadow-md transition-colors duration-300 cursor-pointer"
              >
                Read More
                <svg
                  className="ml-3 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 
                    111.414 1.414l-4 4a1 1 0 
                    01-1.414 0l-4-4a1 1 0 
                    010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-4">
              <div className="w-3 h-3 bg-green-800 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800 uppercase tracking-wider">Leadership Message</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-4">
              A Word From Our CEO
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* CEO Image Column */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Floating background shapes */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
                
                {/* CEO Image Container */}
                <div className="relative bg-white p-2 rounded-full shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <div className="w-48 h-48 md:w-86 md:h-86 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-inner">
                    <div className="w-40 h-40 md:w-78 md:h-78 rounded-full overflow-hidden flex items-center justify-center">
                      <img
                        src="/ceo.png" 
                        alt="CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div> 
                </div>
              </div>
            </div>

            {/* Message Content Column */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl transform -rotate-1"></div>
                
                {/* Main Content Card */}
                <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-500">
                  {/* Quote Marks */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-12">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Message Text */}
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                      "At Medisolution Pharma, we are dedicated to delivering innovative, high-quality healthcare solutions that empower businesses."
                    </p>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed">
                     We understand the challenges faced by poultry producers—disease prevention, productivity enhancement, and market demands. That’s why we strive to deliver innovative, research-driven solutions for healthier flocks and higher yields. Our success rests on strong partnerships, trust, and a relentless pursuit of excellence. I sincerely thank our customers, distributors, and dedicated team for their unwavering support. Together, we will keep setting new benchmarks in poultry health and productivity.
                    </p>

                    {/* CEO Signature */}
                    <div className="flex items-center gap-4">
                      <div className="flex-grow">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4"></div>
                        <h4 className="text-xl font-bold text-gray-800 mb-1">Mr. Sikandar Akram</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Chief Executive Officer</p>
                        <p className="text-xs text-gray-400 mt-1">Medi-Solutions Pharma</p>
                      </div>
                      
                      {/* Decorative Badge */}
                      <div className="hidden md:flex flex-col items-center gap-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-all duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-500 font-medium">Excellence</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 px-6 py-2 rounded-full shadow-sm mb-4">
              <div className="w-3 h-3 bg-green-800 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700 uppercase tracking-wider">Our Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-4">
              Our Medicines
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of high-quality pharmaceutical products
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-15">
            {/* 1 - Antibiotics */}
            <div 
              onClick={() => handleCategoryClick('antibiotics')}
              className="bg-white rounded-2xl p-8 py-12 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 text-center border border-gray-100 hover:border-green-200 min-h-[200px] flex flex-col justify-center items-center"
            >
              <div className="mb-6">
                <img 
                  src="/antibiotics.jpg" 
                  alt="Antibiotics" 
                  className="w-70 h-50 mx-auto object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Antibiotics</h3>
              <p className="text-sm text-gray-500">Fight bacterial infections effectively</p>
            </div>

            {/* 2 - Nutraceuticals */}
            <div 
              onClick={() => handleCategoryClick('nutraceuticals')}
              className="bg-white rounded-2xl p-8 py-12 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 text-center border border-gray-100 hover:border-green-200 min-h-[200px] flex flex-col justify-center items-center"
            >
              <div className="mb-6">
                <img 
                  src="/nutraceuticals.jpg" 
                  alt="Nutraceuticals" 
                  className="w-70 h-50 mx-auto object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Nutraceuticals</h3>
              <p className="text-sm text-gray-500">Provide protection against chronic diseases</p>
            </div>

            {/* 3 - Premixes */}
            <div 
              onClick={() => handleCategoryClick('premixes')}
              className="bg-white rounded-2xl p-8 py-12 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 text-center border border-gray-100 hover:border-green-200 min-h-[200px] flex flex-col justify-center items-center"
            >
              <div className="mb-6">
                <img 
                  src="/premixes.jpg" 
                  alt="Premixes" 
                  className="w-70 h-50 mx-auto object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Premixes</h3>
              <p className="text-sm text-gray-500">Complete nutritional feed solutions</p>
            </div>

            {/* 4 - Phytogenic */}
            <div 
              onClick={() => handleCategoryClick('phytogenics')}
              className="bg-white rounded-2xl p-8 py-12 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 text-center border border-gray-100 hover:border-green-200 min-h-[200px] flex flex-col justify-center items-center"
            >
              <div className="mb-6">
                <img 
                  src="/phytogenic.jpg" 
                  alt="Phytogenic" 
                  className="w-70 h-50 mx-auto object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Phytogenic</h3>
              <p className="text-sm text-gray-500">Natural plant-based feed additives</p>
            </div>

            {/* 5 - Monoglycerides */}
            <div 
              onClick={() => handleCategoryClick('monoglycerides')}
              className="bg-white rounded-2xl p-8 py-12 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 text-center border border-gray-100 hover:border-green-200 min-h-[200px] flex flex-col justify-center items-center"
            >
              <div className="mb-6">
                <img 
                  src="/monoglycerides.jpg" 
                  alt="Monoglycerides" 
                  className="w-70 h-50 mx-auto object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Monoglycerides</h3>
              <p className="text-sm text-gray-500">Enhance feed quality and performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Selling Points */}
      <div className="py-20 bg-gradient-to-r from-[#0a192f] to-[#112240] text-white">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-4">
              <div className="w-3 h-3 bg-green-800 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800 uppercase tracking-wider">Our Strengths</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We Provide
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
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We ensure top standards in every product and service we deliver to maintain excellence.
              </p>
            </div>

            {/* 2 - Strong Commitment */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-center h-64 flex flex-col justify-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Strong Commitment</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Dedicated to building trust and delivering on our promises with dedication.
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
              <h3 className="text-xl font-semibold mb-4">Innovative Solutions</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Constantly bringing new ideas and cutting-edge technology to improve outcomes.
              </p>
            </div>

            {/* 4 - All Pakistan Presence */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-center h-64 flex flex-col justify-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Delivery in Pakistan</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Serving customers nationwide covering every region of Pakistan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact today*/}
      <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 px-6 py-2 rounded-full shadow-sm mb-4">
            <div className="w-3 h-3 bg-green-800 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700 uppercase tracking-wider">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the numbers that matter most
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Health Impact Stat */}
          <div className="group relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Number */}
              <div className="relative mb-4">
                <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent transition-all duration-300 ${
                  isVisible ? 'scale-100' : 'scale-50 opacity-0'
                }`}>
                  {animatedNumbers.health}%
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Impact on Health</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Proven positive impact on poultry health outcomes and recovery rates
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Customer Satisfaction Stat */}
          <div className="group relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Number */}
              <div className="relative mb-4">
                <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent transition-all duration-300 ${
                  isVisible ? 'scale-100' : 'scale-50 opacity-0'
                }`}>
                  {animatedNumbers.satisfaction}%
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Satisfied Customers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customer satisfaction rate based on feedback and quality assessments
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Products Sold Stat */}
          <div className="group relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>

              {/* Number */}
              <div className="relative mb-4">
                <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent transition-all duration-300 ${
                  isVisible ? 'scale-100' : 'scale-50 opacity-0'
                }`}>
                  {formatNumber(animatedNumbers.products)}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Products Sold</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Total number of medical products and solutions delivered nationwide
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
        </div>


      </div>
      </section>



    </div>
  );
}