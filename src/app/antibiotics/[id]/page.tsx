'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { antibiotics } from '../../../data/antibiotics';
import { 
  ArrowLeft, Star, ShieldCheck, Clock, AlertTriangle, 
  Info, Pill, Award, Package, Building2, Syringe,
  Target, CheckCircle, XCircle, Calendar, Heart
} from 'lucide-react';

export default function AntibioticDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const antibiotic = antibiotics.find(a => a.id === id);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  if (!antibiotic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-xl font-bold text-gray-800 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The antibiotic you're looking for doesn't exist.</p>
          <Link href="/antibiotics" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
            Back to Antibiotics
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'composition', label: 'Composition', icon: Pill },
    { id: 'usage', label: 'Usage & Dosage', icon: Syringe },
    { id: 'safety', label: 'Safety Info', icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}

      <div className="max-w-6xl mx-auto px-6 py-7">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {/* Main Product Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">



                {/* Product Header */}
                <div className="relative h-121 overflow-hidden">
                  {/* Image Carousel Container */}
                  <div className="relative w-full h-full">
                    {/* Current Image Display */}
                    <img
                      src={currentImageIndex === 0 ? antibiotic.image : antibiotic.image2}                     
                      alt={`${antibiotic.productName} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain transition-opacity duration-500"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const fallbackDiv = target.parentElement;
                        if (fallbackDiv) {
                          fallbackDiv.className = "relative h-60 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center";
                          fallbackDiv.innerHTML = `<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
                        }
                      }}
                    />

                    {/* Only show navigation if image2 exists */}
                    {antibiotic.image2 && (
                      <>
                        {/* Left Arrow */}
                        <button
                          onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? 1 : 0)}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer z-10"
                        >
                          <svg 
                            className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>

                        {/* Right Arrow */}
                        <button
                          onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? 1 : 0)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer z-10"
                        >
                          <svg 
                            className="w-5 h-5 text-gray-700 group-hover:text-green-600 transition-colors" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          <button
                            onClick={() => setCurrentImageIndex(0)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              currentImageIndex === 0 
                                ? 'bg-white shadow-lg' 
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                          <button
                            onClick={() => setCurrentImageIndex(1)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              currentImageIndex === 1 
                                ? 'bg-white shadow-lg' 
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-1.5 z-20">
                    {antibiotic.featured && (
                      <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    )}
                    {antibiotic.premiumProduct && (
                      <span className="bg-purple-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        Premium
                      </span>
                    )}
                    {antibiotic.restrictedUse && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        Restricted Use
                      </span>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium ${
                      antibiotic.inStock ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${antibiotic.inStock ? 'bg-green-200' : 'bg-red-200'}`}></div>
                      <span>{antibiotic.inStock ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-7">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-800 mb-2">{antibiotic.productName}</h1>
                      <p className="text-xl text-green-600 font-semibold mb-2">{antibiotic.activeIngredient}</p>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{antibiotic.manufacturer}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Package className="w-3.5 h-3.5" />
                          <span>{antibiotic.packSize}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 lg:mt-0 text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < Math.floor(antibiotic.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-lg font-semibold text-gray-700">{antibiotic.rating}</span>
                      </div>
                      <div className="text-3xl font-bold text-green-600">₨{antibiotic.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">{antibiotic.dosageForm}</div>
                    </div>
                  </div>

                  {/* Target Animals */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2.5">
                      <Target className="w-4 h-4 text-green-600" />
                      <h3 className="text-base font-semibold text-gray-800">Target Animals</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {antibiotic.targetAnimals.map((animal) => (
                        <span key={animal} className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-200">
                          {animal}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="border-b border-gray-200 mb-5">
                    <div className="flex space-x-6">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center space-x-1.5 py-2.5 border-b-2 transition-colors text-sm ${
                            activeTab === tab.id
                              ? 'border-green-500 text-green-600'
                              : 'border-transparent text-gray-600 hover:text-green-600'
                          }`}
                        >
                          <tab.icon className="w-3.5 h-3.5" />
                          <span className="font-medium">{tab.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="space-y-6">
                    {activeTab === 'overview' && (
                      <div className="space-y-5">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2.5">Description</h3>
                          <p className="text-gray-700 leading-relaxed text-sm">{antibiotic.description}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2.5">Indications</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {antibiotic.indications.map((indication, index) => (
                              <div key={index} className="flex items-center space-x-2.5 p-2.5 bg-green-50 rounded-lg border border-green-200">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <span className="text-green-800 font-medium text-sm">{indication}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'composition' && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Active Composition</h3>
                        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                          <div className="space-y-3">
                            {Object.entries(antibiotic.composition).map(([ingredient, amount]) => (
                              <div key={ingredient} className="flex justify-between items-center py-1.5 border-b border-gray-200 last:border-b-0">
                                <span className="font-medium text-gray-800 text-sm capitalize">
                                  {ingredient.replace(/([A-Z])/g, ' $1').trim()}
                                </span>
                                <span className="text-green-600 font-semibold text-sm">{amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'usage' && (
                      <div className="space-y-5">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2.5">Administration</h3>
                          <div className="bg-green-100 rounded-lg p-3.5 border border-green-600">
                            <div className="flex justify-center space-x-2 mb-1.5">
                              <Syringe className="w-6 h-6 text-green-800" />
                              <span className="block font-medium text-green-800 text-sm text-center">Dosage Form: {antibiotic.dosageForm}</span>
                            </div>
                            {antibiotic.routeOfAdministration && (
                              <div className="text-sm text-green-800">
                                Route: {antibiotic.routeOfAdministration.join(', ')}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2.5">Withdrawal Periods</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {Object.entries(antibiotic.withdrawalPeriod).map(([product, period]) => (
                              <div key={product} className="bg-green-100 rounded-lg p-3.5 border border-green-600">
                                <div className="flex items-center space-x-1.5 mb-1">
                                  <Calendar className="w-3.5 h-3.5 text-green-800" />
                                  <span className="font-medium text-green-800 capitalize text-sm">{product}</span>
                                </div>
                                <div className="text-xl font-bold text-green-800">{period}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'safety' && (
                      <div className="space-y-5">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2.5">Contraindications</h3>
                          <div className="space-y-2.5">
                            {antibiotic.contraindications.map((contraindication, index) => (
                              <div key={index} className="flex items-start space-x-2.5 p-3.5 bg-red-50 rounded-lg border border-red-200">
                                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                <span className="text-red-800 font-medium text-sm">{contraindication}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {antibiotic.veterinaryPrescriptionRequired && (
                          <div className="bg-yellow-50 rounded-lg p-5 border border-yellow-200">
                            <div className="flex items-center space-x-2.5">
                              <ShieldCheck className="w-5 h-5 text-yellow-600" />
                              <div>
                                <h4 className="font-semibold text-yellow-800 text-sm">Veterinary Prescription Required</h4>
                                <p className="text-yellow-700 text-xs mt-1">This medication requires a valid prescription from a licensed veterinarian.</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quick Info Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-green-600" />
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                    <span className="font-medium text-sm">Brand</span>
                    <span className="text-gray-600 text-sm">{antibiotic.brandName}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                    <span className="font-medium text-sm">Category</span>
                    <span className="text-gray-600 text-sm">{antibiotic.category}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                    <span className="font-medium text-sm">Pack Size</span>
                    <span className="text-gray-600 text-sm">{antibiotic.packSize}</span>
                  </div>
                </div>
              </div>

              {/* Action Card */}
              <div className="bg-gradient-to-br from-green-800 to-green-400  rounded-xl shadow-lg p-5 text-white">
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Need Professional Advice?</h3>
                  <p className="text-blue-100 text-xs mb-5">
                    Consult with our veterinary experts for proper dosage and usage guidelines.
                  </p>
                  <a 
                      href="https://wa.me/923456108082" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-green-800 py-2.5 px-3 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors inline-block text-center"
                  >
                      Contact With Our Expert
                  </a>
                </div>
              </div>

              {/* Related Products */}
              <div className="bg-white rounded-xl shadow-lg p-6"
              style={{paddingTop: '28px'}}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Products</h3>
                <div className="space-y-4">
                  {antibiotics
                    .filter(a => a.id !== antibiotic.id && a.targetAnimals.some(animal => antibiotic.targetAnimals.includes(animal)))
                    .slice(0, 3)
                    .map((related, index) => (
                      <div key={related.id}>
                        <Link href={`/antibiotics/${related.id}`}>
                          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                              <img
                                src={related.image}
                                alt={related.productName}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.currentTarget;
                                  target.style.display = "none";
                                  const fallbackDiv = target.parentElement;
                                  if (fallbackDiv) {
                                    fallbackDiv.innerHTML = `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
                                  }
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-800 text-sm truncate">{related.productName}</div>
                              <div className="text-xs text-gray-600 truncate">{related.activeIngredient}</div>
                              <div className="text-sm text-green-600 font-semibold">₨{related.price.toLocaleString()}</div>
                            </div>
                          </div>
                        </Link>
                        {index < 2 && <hr className="my-4 border-gray-200" />}
                      </div>
                    ))}
                </div>
              </div>

              {/* Safety Notice */}
              <div className="bg-red-50 rounded-xl border-2 border-red-200 p-5">
                <div className="flex items-start space-x-2.5">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1.5 text-sm">Important Safety Notice</h4>
                    <p className="text-red-700 text-xs">
                      Always consult with a qualified veterinarian before administering antibiotics. 
                      Follow withdrawal periods strictly and never exceed recommended dosages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}