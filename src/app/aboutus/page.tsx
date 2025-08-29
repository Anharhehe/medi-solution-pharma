'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Goal, Star  } from 'lucide-react';
import Link from "next/link";
import { reviews as reviewsData } from "../../data/reviews"; 

interface Review {
 name: string;
 time: string;
 stars: number;
 comment: string;
}


export default function AboutUsPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
    const [animatedNumbers, setAnimatedNumbers] = useState({
      health: 10,
      satisfaction: 20,
      products: 40
    });
    const reviews: Review[] = reviewsData;
    const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M+';
  }
  return num.toString();
  };

  return (
    <div className="min-h-screen">

        {/* About Us Content - Left side Right side divs */}
        <div style={{
            backgroundColor: '#0a192f',
            padding: isMobile ? '60px 20px 40px 20px' : 'clamp(80px, 10vw, 120px) clamp(40px, 10vw, 150px) clamp(40px, 8vw, 80px) clamp(40px, 10vw, 150px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1720px',
            margin: '0 auto',
            gap: isMobile ? '30px' : 'clamp(30px, 5vw, 60px)',
            flexDirection: isMobile ? 'column' : 'row',
            textAlign: isMobile ? 'center' : 'left',
            }}>
            {/* Left side - Image */}
            <div style={{
                flex: '1',
                minWidth: isMobile ? '100%' : '300px',
                width: isMobile ? '100%' : 'auto'
            }}>
                <img 
                src="/aboutus.png" 
                alt="Comfortable bedroom setup"
                style={{
                    width: '100%',
                    height: isMobile ? '250px' : 'clamp(300px, 35vw, 450px)',
                    objectFit: 'cover',
                    borderRadius: isMobile ? '8px' : 'clamp(8px, 1vw, 12px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                />
            </div>
            {/* Right side - Content */}
            <div style={{
                flex: '1',
                minWidth: isMobile ? '100%' : '300px',
                color: 'white',
                width: isMobile ? '100%' : 'auto'
            }}>
                {/* Globe icon */}
                <div style={{
                fontSize: isMobile ? '30px' : 'clamp(30px, 4vw, 40px)',
                color: '#4ade80',
                marginBottom: isMobile ? '16px' : 'clamp(16px, 2vw, 24px)'
                }}>
                🐔
                </div>

                {/* Main heading */}
                <h1 style={{
                fontSize: isMobile ? '28px' : 'clamp(32px, 4vw, 48px)',
                fontWeight: 'bold',
                lineHeight: '1.2',
                marginBottom: isMobile ? '16px' : 'clamp(16px, 2vw, 24px)',
                color: 'white'
                }}>
                Your Gateway to a Healthy Poultry
                </h1>

                {/* Description paragraph */}
                <p style={{
                fontSize: isMobile ? '16px' : 'clamp(16px, 1.5vw, 18px)',
                lineHeight: '1.6',
                color: '#94a3b8',
                margin: '0'
                }}>
                We are dedicated to delivering innovative poultry health solutions that ensure stronger, safer, and more productive flocks. With a focus on quality and care, we help farmers build a healthier future in poultry farming.
                </p>
            </div>
        </div>

        {/* Our journey */}
        <div style={{
            padding: isMobile ? '40px 20px' : 'clamp(40px, 6vw, 60px) clamp(15px, 3vw, 30px)',
        }}>
            {/* Section Title */}
            <div style={{
                textAlign: 'center',
                marginBottom: isMobile ? '30px' : 'clamp(30px, 4vw, 50px)'
            }}>
                {/* Centered Goal Badge */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: isMobile ? '16px' : 'clamp(16px, 2vw, 24px)'
                }}>
                    <div className="inline-flex justify-center items-center space-x-2 bg-green-100/80 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 border border-green-800">
                        <Goal className="w-3 h-3 md:w-4 md:h-4 text-green-800 animate-pulse" />
                        <span className="text-green-800 font-medium text-xs md:text-sm">Visit Our Milestones</span>
                    </div>
                </div>

                <h2 style={{
                    fontSize: isMobile ? '26px' : 'clamp(30px, 3vw, 32px)',
                    fontWeight: 'bold',
                    color: '#2d1258ff',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                }}>
                    <span>🌟</span>
                    Our Journey
                    <span>🌟</span>
                </h2>
                <p style={{
                    fontSize: isMobile ? '16px' : 'clamp(16px, 1.5vw, 18px)',
                    color: '#64748b',
                    maxWidth: '500px',
                    margin: '0 auto',
                    lineHeight: '1.5',
                    padding: isMobile ? '0 10px' : '0'
                }}>
                    From a dream to reality - discover how we've grown to become your trusted chick saviour.
                </p>
            </div>

            {/* Timeline Container */}
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                position: 'relative',
                padding: isMobile ? '0 10px' : '0'
            }}>
                {/* Timeline Line - Hidden on mobile */}
                {!isMobile && (
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '40px',
                        bottom: '40px',
                        width: '3px',
                        background: 'linear-gradient(to bottom, #A888B5, #3f3161ff)',
                        borderRadius: '2px',
                        transform: 'translateX(-50%)'
                    }} />
                )}

                {/* Timeline Items */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '25px' : '25px'
                }}>
                    
                    {/* 2020 - The Beginning */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isMobile ? 'center' : 'flex-start',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center',
                            gap: isMobile ? '15px' : '25px',
                            width: '100%',
                            maxWidth: isMobile ? '100%' : 'none'
                        }}>
                            {/* Content Left */}
                            <div style={{
                                flex: 1,
                                textAlign: isMobile ? 'center' : 'right',
                                paddingRight: isMobile ? '0' : '25px',
                                order: isMobile ? 2 : 1
                            }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: isMobile ? '20px' : '20px 18px',
                                    borderRadius: '12px',
                                    boxShadow: '0 6px 20px rgba(168, 136, 181, 0.12)',
                                    border: '2px solid #A888B5',
                                    maxWidth: isMobile ? '100%' : 'none',
                                    margin: isMobile ? '0 auto' : '0'
                                }}>
                                    <div style={{
                                        fontSize: isMobile ? '28px' : '28px',
                                        marginBottom: '8px'
                                    }}>
                                        🚀
                                    </div>
                                    <h3 style={{
                                        fontSize: isMobile ? '18px' : 'clamp(18px, 1.8vw, 20px)',
                                        fontWeight: 'bold',
                                        color: '#2d1258ff',
                                        marginBottom: '6px'
                                    }}>
                                        2020 - The Beginning
                                    </h3>
                                    <p style={{
                                        fontSize: isMobile ? '14px' : 'clamp(13px, 1vw, 14px)',
                                        color: '#64748b',
                                        lineHeight: '1.4',
                                        margin: '0'
                                    }}>
                                        Started with a small team and 4 Products in one division (Gujranwala)
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            {!isMobile && (
                                <div style={{
                                    width: '16px',
                                    height: '16px',
                                    backgroundColor: '#A888B5',
                                    borderRadius: '50%',
                                    border: '3px solid white',
                                    boxShadow: '0 0 0 3px #A888B5',
                                    zIndex: 10,
                                    order: 2
                                }} />
                            )}

                            {/* Empty Space Right */}
                            <div style={{ 
                                flex: 1,
                                order: isMobile ? 1 : 3
                            }} />
                        </div>
                    </div>

                    {/* Mid 2022 - First Milestone */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isMobile ? 'center' : 'flex-end',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center',
                            gap: isMobile ? '15px' : '25px',
                            width: '100%',
                            maxWidth: isMobile ? '100%' : 'none'
                        }}>
                            {/* Empty Space Left */}
                            <div style={{ 
                                flex: 1,
                                order: 1
                            }} />

                            {/* Timeline Dot */}
                            {!isMobile && (
                                <div style={{
                                    width: '16px',
                                    height: '16px',
                                    backgroundColor: '#A888B5',
                                    borderRadius: '50%',
                                    border: '3px solid white',
                                    boxShadow: '0 0 0 3px #A888B5',
                                    zIndex: 10,
                                    order: 2
                                }} />
                            )}

                            {/* Content Right */}
                            <div style={{
                                flex: 1,
                                textAlign: isMobile ? 'center' : 'left',
                                paddingLeft: isMobile ? '0' : '25px',
                                order: isMobile ? 2 : 3
                            }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: isMobile ? '20px' : '20px 18px',
                                    borderRadius: '12px',
                                    boxShadow: '0 6px 20px rgba(168, 136, 181, 0.12)',
                                    border: '2px solid #A888B5',
                                    maxWidth: isMobile ? '100%' : 'none',
                                    margin: isMobile ? '0 auto' : '0'
                                }}>
                                    <div style={{
                                        fontSize: isMobile ? '28px' : '28px',
                                        marginBottom: '8px'
                                    }}>
                                        🎯
                                    </div>
                                    <h3 style={{
                                        fontSize: isMobile ? '18px' : 'clamp(18px, 1.8vw, 20px)',
                                        fontWeight: 'bold',
                                        color: '#2d1258ff',
                                        marginBottom: '6px'
                                    }}>
                                        Mid 2022 - First Milestone
                                    </h3>
                                    <p style={{
                                        fontSize: isMobile ? '14px' : 'clamp(13px, 1vw, 14px)',
                                        color: '#64748b',
                                        lineHeight: '1.4',
                                        margin: '0'
                                    }}>
                                        Reached 20 Products, many Distributors & Employees nationwide
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Late 2023 - Growing Strong */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isMobile ? 'center' : 'flex-start',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center',
                            gap: isMobile ? '15px' : '25px',
                            width: '100%',
                            maxWidth: isMobile ? '100%' : 'none'
                        }}>
                            {/* Content Left */}
                            <div style={{
                                flex: 1,
                                textAlign: isMobile ? 'center' : 'right',
                                paddingRight: isMobile ? '0' : '25px',
                                order: isMobile ? 2 : 1
                            }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: isMobile ? '20px' : '20px 18px',
                                    borderRadius: '12px',
                                    boxShadow: '0 6px 20px rgba(168, 136, 181, 0.12)',
                                    border: '2px solid #A888B5',
                                    maxWidth: isMobile ? '100%' : 'none',
                                    margin: isMobile ? '0 auto' : '0'
                                }}>
                                    <div style={{
                                        fontSize: isMobile ? '28px' : '28px',
                                        marginBottom: '8px'
                                    }}>
                                        📈
                                    </div>
                                    <h3 style={{
                                        fontSize: isMobile ? '18px' : 'clamp(18px, 1.8vw, 20px)',
                                        fontWeight: 'bold',
                                        color: '#2d1258ff',
                                        marginBottom: '6px'
                                    }}>
                                        Late 2023 - Growing Strong
                                    </h3>
                                    <p style={{
                                        fontSize: isMobile ? '14px' : 'clamp(13px, 1vw, 14px)',
                                        color: '#64748b',
                                        lineHeight: '1.4',
                                        margin: '0'
                                    }}>
                                        Launched another Farm-Level medicine group. (Royal Group)
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            {!isMobile && (
                                <div style={{
                                    width: '16px',
                                    height: '16px',
                                    backgroundColor: '#A888B5',
                                    borderRadius: '50%',
                                    border: '3px solid white',
                                    boxShadow: '0 0 0 3px #A888B5',
                                    zIndex: 10,
                                    order: 2
                                }} />
                            )}

                            {/* Empty Space Right */}
                            <div style={{ 
                                flex: 1,
                                order: isMobile ? 1 : 3
                            }} />
                        </div>
                    </div>

                    {/* 2024 - Digital Innovation */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isMobile ? 'center' : 'flex-end',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center',
                            gap: isMobile ? '15px' : '25px',
                            width: '100%',
                            maxWidth: isMobile ? '100%' : 'none'
                        }}>
                            {/* Empty Space Left */}
                            <div style={{ 
                                flex: 1,
                                order: 1
                            }} />

                            {/* Timeline Dot */}
                            {!isMobile && (
                                <div style={{
                                    width: '16px',
                                    height: '16px',
                                    backgroundColor: '#A888B5',
                                    borderRadius: '50%',
                                    border: '3px solid white',
                                    boxShadow: '0 0 0 3px #A888B5',
                                    zIndex: 10,
                                    order: 2
                                }} />
                            )}

                            {/* Content Right */}
                            <div style={{
                                flex: 1,
                                textAlign: isMobile ? 'center' : 'left',
                                paddingLeft: isMobile ? '0' : '25px',
                                order: isMobile ? 2 : 3
                            }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: isMobile ? '20px' : '20px 18px',
                                    borderRadius: '12px',
                                    boxShadow: '0 6px 20px rgba(168, 136, 181, 0.12)',
                                    border: '2px solid #A888B5',
                                    maxWidth: isMobile ? '100%' : 'none',
                                    margin: isMobile ? '0 auto' : '0'
                                }}>
                                    <div style={{
                                        fontSize: isMobile ? '28px' : '28px',
                                        marginBottom: '8px'
                                    }}>
                                        🚢
                                    </div>
                                    <h3 style={{
                                        fontSize: isMobile ? '18px' : 'clamp(18px, 1.8vw, 20px)',
                                        fontWeight: 'bold',
                                        color: '#2d1258ff',
                                        marginBottom: '6px'
                                    }}>
                                        2024 - Imported Products
                                    </h3>
                                    <p style={{
                                        fontSize: isMobile ? '14px' : 'clamp(13px, 1vw, 14px)',
                                        color: '#64748b',
                                        lineHeight: '1.4',
                                        margin: '0'
                                    }}>
                                        Addition of Imported Products from Olus Plus Netherlands in our inventory.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2025 - Present Day */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isMobile ? 'center' : 'flex-start',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center',
                            gap: isMobile ? '15px' : '25px',
                            width: '100%',
                            maxWidth: isMobile ? '100%' : 'none'
                        }}>
                            {/* Content Left */}
                            <div style={{
                                flex: 1,
                                textAlign: isMobile ? 'center' : 'right',
                                paddingRight: isMobile ? '0' : '25px',
                                order: isMobile ? 2 : 1
                            }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: isMobile ? '20px' : '20px 18px',
                                    borderRadius: '12px',
                                    boxShadow: '0 6px 20px rgba(168, 136, 181, 0.12)',
                                    border: '3px solid #22c55e',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    maxWidth: isMobile ? '100%' : 'none',
                                    margin: isMobile ? '0 auto' : '0'
                                }}>
                                    {/* Sparkle decoration */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '8px',
                                        right: '8px',
                                        fontSize: '12px'
                                    }}>
                                        ✨
                                    </div>
                                    <div style={{
                                        fontSize: isMobile ? '28px' : '28px',
                                        marginBottom: '8px'
                                    }}>
                                        🏆
                                    </div>
                                    <h3 style={{
                                        fontSize: isMobile ? '18px' : 'clamp(18px, 1.8vw, 20px)',
                                        fontWeight: 'bold',
                                        color: '#22c55e',
                                        marginBottom: '6px'
                                    }}>
                                        2025 - Present Day
                                    </h3>
                                    <p style={{
                                        fontSize: isMobile ? '14px' : 'clamp(13px, 1vw, 14px)',
                                        color: '#64748b',
                                        lineHeight: '1.4',
                                        margin: '0'
                                    }}>
                                        Successfully operating 2 groups and imported products nationwide.
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Dot - Special for current */}
                            {!isMobile && (
                                <div style={{
                                    width: '18px',
                                    height: '18px',
                                    backgroundColor: '#22c55e',
                                    borderRadius: '50%',
                                    border: '3px solid white',
                                    boxShadow: '0 0 0 3px #22c55e, 0 0 15px rgba(34, 197, 94, 0.3)',
                                    zIndex: 10,
                                    order: 2
                                }} />
                            )}

                            {/* Empty Space Right */}
                            <div style={{ 
                                flex: 1,
                                order: isMobile ? 1 : 3
                            }} />
                        </div>
                    </div>
                </div>
            </div>


        </div>

        {/* Mission and Vision Sec */}
        <div style={{
            backgroundColor: '#0a192f',
            padding: isMobile ? '40px 20px' : '40px 20px 60px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '1720px',
            margin: '0 auto',
            gap: isMobile ? '40px' : 'clamp(30px, 4vw, 60px)',
            flexDirection: isMobile ? 'column' : 'row'
            }}>
            {/* Left side - Our Mission */}
            <div style={{
                flex: '1',
                minWidth: isMobile ? '100%' : '300px',
                maxWidth: isMobile ? '100%' : '600px',
                width: isMobile ? '100%' : 'auto',
                color: 'white',
                textAlign: isMobile ? 'center' : 'left',
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'center' : 'flex-start'
            }}>
                {/* Mission Heading */}
                <h2 style={{
                fontSize: isMobile ? '28px' : 'clamp(28px, 3vw, 34px)',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '16px',
                margin: '0 0 16px 0'
                }}>
                Our Mission
                </h2>

                {/* Mission Description */}
                <p style={{
                fontSize: isMobile ? '16px' : 'clamp(15px, 1.4vw, 16px)',
                color: '#94a3b8',
                textAlign: isMobile ? 'center' : 'left',
                lineHeight: '1.6',
                marginBottom: '30px',
                margin: '0 0 30px 0',
                maxWidth: isMobile ? '100%' : '500px',
                padding: isMobile ? '0 10px' : '0'
                }}>
                We strive to provide poultry farmers with high-quality, sustainable, and innovative medicines, contributing to the growth of healthy flocks and the success of our customers. 
               </p>

                {/* Mission Image */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <img 
                    src="/aboutus2.png" 
                    alt="Our Mission"
                    style={{
                        width: '100%',
                        maxWidth: isMobile ? '100%' : '600px',
                        height: isMobile ? '280px' : 'clamp(350px, 30vw, 420px)',
                        objectFit: 'cover',
                        borderRadius: isMobile ? '8px' : 'clamp(8px, 1vw, 12px)',
                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
                        margin: '0 auto'
                    }}
                    />
                </div>
            </div>

            {/* Right side - Our Vision */}
            <div style={{
                flex: '1',
                minWidth: isMobile ? '100%' : '300px',
                maxWidth: isMobile ? '100%' : '600px',
                width: isMobile ? '100%' : 'auto',
                color: 'white',
                textAlign: isMobile ? 'center' : 'left',
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'center' : 'flex-start'
            }}>
                {/* Vision Heading */}
                <h2 style={{
                fontSize: isMobile ? '28px' : 'clamp(28px, 3vw, 34px)',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '16px',
                margin: '0 0 16px 0'
                }}>
                Our Vision
                </h2>

                {/* Vision Description */}
                <p style={{
                fontSize: isMobile ? '16px' : 'clamp(15px, 1.4vw, 16px)',
                color: '#94a3b8',
                textAlign: isMobile ? 'center' : 'left',
                lineHeight: '1.6',
                marginBottom: '30px',
                margin: '0 0 30px 0',
                maxWidth: isMobile ? '100%' : '500px',
                padding: isMobile ? '0 10px' : '0'
                }}>
                To empower every person to achieve more.
                Our values reflect our commitment to innovation and care.
                We ensure safe poultry growth with premium, science-backed medicines.
                </p>

                {/* Vision Image */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <img 
                    src="/aboutus3.png" 
                    alt="Our Vision"
                    style={{
                        width: '100%',
                        maxWidth: isMobile ? '100%' : '600px',
                        height: isMobile ? '280px' : 'clamp(350px, 30vw, 420px)',
                        objectFit: 'cover',
                        borderRadius: isMobile ? '8px' : 'clamp(8px, 1vw, 12px)',
                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
                        margin: '0 auto'
                    }}
                    />
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
              <span className="text-sm font-medium text-green-700 uppercase tracking-wider">Impact on Market</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-4">
              Medi-Solution by Numbers
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
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    98%
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Impact on Flock</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Proven positive impact on poultry health outcomes and recovery rates.
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
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                    26+
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Products</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We have 26 quality medicines to take care of your poultry.
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Products Sold Stat */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="relative mb-4">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                    4.8
                  </span>
                </div>


                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ratings</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Excellent Review, Ratings and Feedbacks from our customers.
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          </div>


        </div>
        </section>

{/* Reviews Section */}
<div className="w-full flex justify-center" style={{paddingTop:'15px', backgroundColor:'#ebf0f7', paddingBottom:'100px'}}>
  <div className="max-w-7xl w-full mt-8">
    {/* Reviews Heading */}
    <div className="flex flex-col items-center text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 px-6 py-2 rounded-full shadow-sm mb-4">
        <div className="w-3 h-3 bg-green-800 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-green-700 uppercase tracking-wider">Reviews</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent mb-4">
        From Our Customers
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        See how Medi-Solution customers are improving their flock healths and getting incredible results.
      </p>
    </div>

    {/* Reviews Carousel */}
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 mx-auto">
      <div className="flex items-center justify-center">
        {/* Review Content */}
        <div className="flex-1 max-w-4xl">
          <div className="text-center">
            {/* Name */}
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {reviews[currentReviewIndex]?.name}
            </h4>

            {/* Stars */}
            <div className="flex justify-center items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star: number) => (
                  <svg
                    key={star}
                    className={`w-6 h-6 mx-0.5 transition-colors duration-200 ${
                      star <= (reviews[currentReviewIndex]?.stars || 0)
                        ? 'text-yellow-400' 
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="ml-3 flex items-center text-sm text-gray-500">
                <span className="font-medium">{reviews[currentReviewIndex]?.stars}</span>
                <span className="mx-1">•</span>
                <span>{reviews[currentReviewIndex]?.time}</span>
              </div>
            </div>

            {/* Review Text */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-[#3f2750] opacity-20 font-serif">"</div>
              <p className="text-gray-700 leading-relaxed text-base max-w-3xl mx-auto italic relative z-10">
                {reviews[currentReviewIndex]?.comment}
              </p>
              <div className="absolute -bottom-4 -right-4 text-6xl text-[#3f2750] opacity-20 font-serif rotate-180">"</div>
            </div>
          </div>
        </div>

        {/* Next Review Button */}
        <button
          onClick={() => {
            // Get available indices excluding current one to avoid showing same review
            const availableIndices = reviews.map((_, index) => index).filter(index => index !== currentReviewIndex);
            if (availableIndices.length > 0) {
              const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
              setCurrentReviewIndex(randomIndex);
            } else if (reviews.length > 1) {
              // Fallback if only one review or edge case
              const randomIndex = Math.floor(Math.random() * reviews.length);
              setCurrentReviewIndex(randomIndex);
            }
          }}
          className="flex-shrink-0 ml-6 p-3 rounded-full bg-[#3f2750] hover:bg-[#2d1a39] text-white transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer"
          aria-label="Next random review"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}