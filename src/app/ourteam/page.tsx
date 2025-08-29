'use client'

import React, { useState, useEffect } from 'react';
import { 
  Users, Award, Heart, Linkedin, Twitter, Mail, 
  MapPin, Calendar, Star, Zap, Coffee, Camera,
  Briefcase, GraduationCap, Phone, Github,
  Facebook, MessageCircle
} from 'lucide-react';
import { galleryImages } from '../../data/teamgallery'
import { teamMembers } from '../../data/team'
import { FaWhatsapp } from 'react-icons/fa';


interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  experience: string;
  location: string;
  joinDate: string;
  skills: string[];
  achievements: string[];
  social: {
    facebook?: string;
    whatsapp?: string;
  };
  personality: string;
  favoriteQuote: string;
}

const departmentColors = {
  Medical: "from-red-500 to-pink-500",
  Operations: "from-blue-500 to-cyan-500",
  "R&D": "from-purple-500 to-indigo-500",
  Development: "from-green-500 to-teal-500",
  Quality: "from-yellow-500 to-orange-500",
  Technology: "from-gray-700 to-gray-900",
  Marketing: "from-pink-500 to-rose-500"
};

// Helper function to categorize team members
const categorizeTeamMembers = (members: TeamMember[]) => {
  const heads = members.filter(member => 
    member.position.toLowerCase().includes('ceo') || 
    member.position.toLowerCase().includes('director') ||
    member.department.toLowerCase().includes('management') ||
    member.position.toLowerCase().includes('head') ||
    member.position.toLowerCase().includes('chief')
  );
  
  const salesMarketing = members.filter(member => 
    (member.department.toLowerCase().includes('sales') ||
    member.department.toLowerCase().includes('marketing') ||
    member.position.toLowerCase().includes('sales') ||
    member.position.toLowerCase().includes('marketing')) &&
    !member.department.toLowerCase().includes('logistics') &&
    !member.position.toLowerCase().includes('logistics')
  );

  const logistics = members.filter(member => 
    member.department.toLowerCase().includes('logistics') ||
    member.position.toLowerCase().includes('logistics') ||
    member.department.toLowerCase().includes('supply') ||
    member.position.toLowerCase().includes('supply')
  );
  
  const accountsFinance = members.filter(member => 
    member.department.toLowerCase().includes('accounts') ||
    member.department.toLowerCase().includes('finance') ||
    member.department.toLowerCase().includes('accounting') ||
    member.position.toLowerCase().includes('accountant') ||
    member.position.toLowerCase().includes('finance')
  );
  
  return { heads, salesMarketing, logistics, accountsFinance };
};

export default function OurTeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [animateNumbers, setAnimateNumbers] = useState(false);
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, duration: number}>>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [isZoomedIn, setIsZoomedIn] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const images = [ '/team2.png', '/team3.png', '/team4.png'];


  useEffect(() => {
    const timer = setTimeout(() => setAnimateNumbers(true), 500);
    
    // Generate particles on client side only
    const newParticles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }));
    setParticles(newParticles);
    
    return () => clearTimeout(timer);
  }, []);

  // Image cycling and zoom animation effect
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




const nextImage = () => {
 setCurrentImageIndex1((prevIndex) => 
   prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
 );
};

const prevImage = () => {
 setCurrentImageIndex1((prevIndex) => 
   prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
 );
};



  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const stats = [
    { number: 7, label: "Team Members", icon: Users },
    { number: 5, label: "Years Combined Experience", icon: Award },
    { number: 50, label: "Projects Completed", icon: Briefcase },
    { number: 15, label: "Awards Won", icon: Star }
  ];

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  // Team Member Card Component
  const TeamMemberCard = ({ member, index }: { member: TeamMember, index: number }) => (
    <div
      key={member.id}
      className="group cursor-pointer transition-all duration-700 hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
      onClick={() => openModal(member)}
    >
      <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-green-300">
        
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-80 object-fill transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Hover Content */}
          <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <div className="text-center p-6">
              <div className="flex justify-center space-x-3 mb-4">
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                    >
                    <Facebook className="w-5 h-5 text-white" />
                    </a>
                )}
                {member.social.whatsapp && (
                   <a href={member.social.whatsapp}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                   <FaWhatsapp className="w-5 h-5 text-white" />
                  </a>
                )}
              </div>
              <button className="bg-green-600/20 backdrop-blur-sm hover:bg-green-600/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-green-400/30 hover:border-green-400/50">
                View Details
              </button>
            </div>
          </div>

          {/* Pulse Ring on Hover */}
          <div className={`absolute inset-0 border-4 border-green-400 rounded-2xl transition-all duration-500 ${
            hoveredMember === member.id ? 'animate-pulse opacity-50' : 'opacity-0'
          }`}></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors text-gray-800">
            {member.name}
          </h3>
          <p className="text-green-600 font-semibold mb-3">
            {member.position}
          </p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{member.experience}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{member.location.split(',')[0]}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-800 transition-colors">
            {member.bio}
          </p>

          {/* Skills Preview */}
          <div className="mt-4 flex flex-wrap gap-2">
            {member.skills.slice(0, 2).map((skill, skillIndex) => (
              <span key={skillIndex} className="px-3 py-1 bg-green-200 text-green-800 text-xs rounded-full border border-green-800 font-medium">
                {skill}
              </span>
            ))}
            {member.skills.length > 2 && (
              <span className="px-3 py-1 bg-green-200 text-green-800 text-xs rounded-full border border-green-800 font-medium">
                +{member.skills.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400/50 transition-all duration-500"></div>
      </div>
    </div>
  );

  // Categorize team members
  const { heads, salesMarketing, logistics, accountsFinance } = categorizeTeamMembers(teamMembers);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800">

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
                Meet Our Expert Team
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
                The passionate minds driving Medi Solution Pharma forward. Meet the specialists, researchers, and healthcare professionals who make our mission of improving animal health a reality.
              </p>
            </div>

            {/* Scroll Down Button */}
            <div className="flex justify-center">
              <button
                onClick={handleScrollDown}
                className="flex items-center justify-between px-6 py-3 bg-[#95D5B2] hover:bg-[#1B4332] hover:text-white text-black font-semibold shadow-md transition-colors duration-300 cursor-pointer"
              >
                Explore
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

      <div className="px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="container mx-auto px-12 md:px-16 lg:px-24 pt-12 pb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-green-100/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-green-800">
              <Heart className="w-4 h-4 text-green-800 animate-pulse" />
              <span className="text-green-800 font-medium text-sm">Meet Our Amazing Team</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-green-800 via-green-500 to-green-600 bg-clip-text text-transparent">
              Our Team
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Meet the passionate professionals who are revolutionizing veterinary healthcare 
              and making a difference in animals' lives across Pakistan.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-800 to-green-400 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className={`text-3xl font-black text-transparent bg-gradient-to-r from-green-800 to-green-400 bg-clip-text transition-all duration-1000 ${animateNumbers ? 'opacity-100' : 'opacity-0'}`}>
                      {animateNumbers ? stat.number : 0}+
                    </div>
                    <div className="text-gray-500 font-medium text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Sections with FAQ-style Design */}
          <div className="space-y-6 mb-8">
            {/* Leadership Section */}
            {heads.length > 0 && (
              <div className="group">
                <div 
                  className="bg-[#95D5B2] hover:bg-[#8BC5A3] transition-all duration-300 p-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={() => toggleSection('leadership')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3"></div>
                      <h2 className="text-xl font-bold text-gray-800 pr-4">Leadership Team</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-gray-800 font-medium text-sm">{heads.length} Leaders</span>
                      </div>
                      <div 
                        className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300"
                        style={{ transform: expandedSection === 'leadership' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: expandedSection === 'leadership' ? '2000px' : '0px',
                    opacity: expandedSection === 'leadership' ? '1' : '0'
                  }}
                >
                  <div className="bg-white mt-2 p-6 shadow-lg border-l-4 border-[#95D5B2]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {heads.map((member, index) => (
                        <TeamMemberCard key={member.id} member={member} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sales & Marketing Section */}
            {salesMarketing.length > 0 && (
              <div className="group">
                <div 
                  className="bg-[#95D5B2] hover:bg-[#8BC5A3] transition-all duration-300 p-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={() => toggleSection('sales')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3"></div>
                      <h2 className="text-xl font-bold text-gray-800 pr-4">Sales & Marketing</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-gray-800 font-medium text-sm">{salesMarketing.length} Members</span>
                      </div>
                      <div 
                        className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300"
                        style={{ transform: expandedSection === 'sales' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: expandedSection === 'sales' ? '2000px' : '0px',
                    opacity: expandedSection === 'sales' ? '1' : '0'
                  }}
                >
                  <div className="bg-white mt-2 p-6 shadow-lg border-l-4 border-[#95D5B2]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {salesMarketing.map((member, index) => (
                        <TeamMemberCard key={member.id} member={member} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Logistics Section */}
            {logistics.length > 0 && (
              <div className="group">
                <div 
                  className="bg-[#95D5B2] hover:bg-[#8BC5A3] transition-all duration-300 p-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={() => toggleSection('logistics')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3"></div>
                      <h2 className="text-xl font-bold text-gray-800 pr-4">Logistics & Supply Chain</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-gray-800 font-medium text-sm">{logistics.length} Members</span>
                      </div>
                      <div 
                        className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300"
                        style={{ transform: expandedSection === 'logistics' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: expandedSection === 'logistics' ? '2000px' : '0px',
                    opacity: expandedSection === 'logistics' ? '1' : '0'
                  }}
                >
                  <div className="bg-white mt-2 p-6 shadow-lg border-l-4 border-[#95D5B2]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {logistics.map((member, index) => (
                        <TeamMemberCard key={member.id} member={member} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Accounts & Finance Section */}
            {accountsFinance.length > 0 && (
              <div className="group">
                <div 
                  className="bg-[#95D5B2] hover:bg-[#8BC5A3] transition-all duration-300 p-6 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={() => toggleSection('finance')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3"></div>
                      <h2 className="text-xl font-bold text-gray-800 pr-4">Accounts & Finance</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-gray-800 font-medium text-sm">{accountsFinance.length} Members</span>
                      </div>
                      <div 
                        className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center transition-transform duration-300"
                        style={{ transform: expandedSection === 'finance' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: expandedSection === 'finance' ? '2000px' : '0px',
                    opacity: expandedSection === 'finance' ? '1' : '0'
                  }}
                >
                  <div className="bg-white mt-2 p-6 shadow-lg border-l-4 border-[#95D5B2]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {accountsFinance.map((member, index) => (
                        <TeamMemberCard key={member.id} member={member} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          
            <div 
            style = {{
                paddingTop:'50px'
            }}
            className="container mx-auto px-6">
            {/* Gallery Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-4">
                Photo Gallery
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore our moments and memories captured through the lens
                </p>
            </div>

            {/* Photo Gallery Container */}
            <div className="relative max-w-4xl mx-auto">
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                
                {/* Main Image Display */}
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                    <img
                    src={galleryImages[currentImageIndex1].src}
                    className="w-full h-full object-contain transition-all duration-500 ease-in-out"
                    />
                    
                    {/* Image Overlay with Caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    </div>
                </div>

                {/* Left Arrow */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                    <svg 
                    className="w-6 h-6 text-gray-700 group-hover:text-green-600 transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                    <svg 
                    className="w-6 h-6 text-gray-700 group-hover:text-green-600 transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {galleryImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex1(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex1 
                            ? 'bg-white shadow-lg' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                    ))}
                </div>
                </div>

                {/* Image Counter */}
                <div className="text-center mt-4">
                <span className="text-gray-500 font-medium">
                    {currentImageIndex1 + 1} of {galleryImages.length}
                </span>
                </div>
            </div>

            {/* Discover More Link */}
            <div className="text-center mt-12">
                <p className="text-gray-600 text-lg mb-4">
                Want to see more of our work and moments?
                </p>
                <a 
                href="https://web.facebook.com/profile.php?id=100071135135300&sk=photos" 
                target="blank"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                Discover More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </a>
            </div>
            </div>
          

        </div>

        {/* Modal */}
        {isModalOpen && selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300 pt-20">
            <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Left Column - Image and Basic Info */}
                <div>
                  <div className="relative mb-6">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-96 object-cover rounded-xl"
                    />
                  </div>

                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">{selectedMember.name}</h2>
                    <p className="text-xl font-semibold mb-4 text-green-600">
                    {selectedMember.position}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Experience: {selectedMember.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedMember.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>Joined: {selectedMember.joinDate}</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start space-x-3 mb-6">
                      {selectedMember.social.facebook && (
                        <a href={selectedMember.social.facebook} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                        <Facebook className="w-6 h-6 text-white" />
                        </a>
                      )}
                      {selectedMember.social.whatsapp && (
                        <a href={selectedMember.social.whatsapp} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                        <FaWhatsapp className="w-6 h-6 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
                      <Users className="w-5 h-5 mr-2 text-green-500" />
                      About
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
                      <Zap className="w-5 h-5 mr-2 text-green-500" />
                      Skills & Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm border border-green-800 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
                      <Award className="w-5 h-5 mr-2 text-green-500" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
                      <Heart className="w-5 h-5 mr-2 text-green-500" />
                      Personality & Values
                    </h3>
                    <p className="text-gray-600 italic mb-3">"{selectedMember.favoriteQuote}"</p>
                    <p className="text-gray-500">{selectedMember.personality}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}



      </div>
    </div>
  );
}