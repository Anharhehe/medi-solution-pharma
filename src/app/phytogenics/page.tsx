'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { phytogenics } from '../../data/phytogenics';
import { Search, Filter, Star, Award, ShieldCheck, Clock, Leaf, ChevronRight, Grid3X3, List, FlaskConical } from 'lucide-react';

type SortOption = 'name' | 'price-low' | 'price-high' | 'rating' | 'featured';
type ViewMode = 'grid' | 'list';
type Category = 'all' | 'poultry' | 'cattle' | 'livestock';

export default function PhytogenicsPage(): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // Filter and sort phytogenics
  const filteredPhytogenics = phytogenics
    .filter(phytogenic => {
      const matchesSearch = phytogenic.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           phytogenic.activeIngredient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           phytogenic.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || phytogenic.targetAnimals.some(animal => 
        animal.toLowerCase().includes(selectedCategory.toLowerCase()));
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'featured': return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default: return a.productName.localeCompare(b.productName);
      }
    });

  const categories: Category[] = ['all', 'poultry', 'cattle', 'livestock'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-lime-400 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-lime-100 bg-clip-text text-transparent">
                Phytogenic Feed Additives
              </h1>
              <p className="text-lg text-lime-100 max-w-2xl lg:max-w-none leading-relaxed">
                Natural plant-derived additives for improved animal performance and gut health
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-3 sm:space-y-0 sm:space-x-6 mt-6 text-lime-100">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm">Natural & Safe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Research-Proven</span>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md">
                <img 
                  src="/phytogenicsbanner.png" 
                  alt="Phytogenic Feed Additives Banner" 
                  className="w-full h-auto rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filter Section */}
        <div className="bg-[#0B1E3F] rounded-xl shadow-lg p-4 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-black-300 w-3.5 h-3.5" />
              <input
                type="text"
                placeholder="Search phytogenics..."
                className="w-full pl-8 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 appearance-none bg-gray-200 text-gray-800 placeholder-gray-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative flex-1 min-w-0">
              <Filter className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-black-300 w-3.5 h-3.5" />
              <select
                className="w-full pl-8 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-200 text-gray-800"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Category)}
              >
                {categories.map((category: Category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              className="flex-1 min-w-0 px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-200 text-gray-800"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="featured">Featured First</option>
            </select>

            {/* View Mode Buttons */}
            <div className="flex bg-white rounded-lg p-1 border border-gray-300 flex-shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-emerald-500 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Grid3X3 className="w-4 h-4 mr-1" />
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                  viewMode === 'list' 
                    ? 'bg-emerald-500 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <List className="w-4 h-4 mr-1" />
                List
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" 
          : "flex flex-col gap-4"
        }>
          {filteredPhytogenics.map((phytogenic) => (
            <Link key={phytogenic.id} href={`/phytogenics/${phytogenic.id}`}>
              <div className={`group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer ${
                viewMode === 'grid' 
                  ? 'rounded-xl flex flex-col' 
                  : 'rounded-xl flex flex-row hover:scale-[1.02] min-h-[160px]'
              }`}>
                {/* Product Image & Badges */}
                <div className={`relative bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center overflow-hidden ${
                  viewMode === 'grid' 
                    ? 'h-58 w-full rounded-t-xl' 
                    : 'w-64 flex-shrink-0 rounded-l-xl'
                }`}>
                  <img
                    src={phytogenic.image}
                    alt={phytogenic.productName}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.currentTarget;
                      target.style.display = "none";

                      const fallbackDiv = target.nextElementSibling as HTMLElement | null;
                      if (fallbackDiv && fallbackDiv instanceof HTMLElement) {
                        fallbackDiv.style.display = "flex";
                      }
                    }}
                  />
                  <div className="w-16 h-16 bg-white/20 rounded-full items-center justify-center hidden">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Badges */}
                  <div className={`absolute flex ${
                    viewMode === 'grid' 
                      ? 'top-2 left-2 flex-col space-y-1' 
                      : 'top-1 left-1 flex-col space-y-0.5'
                  }`}>
                    {phytogenic.featured && (
                      <span className={`bg-yellow-400 text-yellow-900 font-bold rounded-full flex items-center ${
                        viewMode === 'grid' 
                          ? 'text-xs px-2 py-0.5' 
                          : 'text-xs px-1.5 py-0.5'
                      }`}>
                        <Star className={`${viewMode === 'grid' ? 'w-2.5 h-2.5 mr-1' : 'w-2 h-2 mr-0.5'}`} />
                        Featured
                      </span>
                    )}

                  </div>

                  {/* Stock Status */}
                  <div className={`absolute ${
                    viewMode === 'grid' ? 'top-2 right-2' : 'top-1 right-1'
                  }`}>
                    <div className={`rounded-full ${
                      phytogenic.inStock ? 'bg-green-400' : 'bg-red-400'
                    } ${viewMode === 'grid' ? 'w-2.5 h-2.5' : 'w-2 h-2'}`}></div>
                  </div>

                  {/* Hover Arrow */}
                  <div className={`absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    viewMode === 'grid' ? 'bottom-2 right-2' : 'bottom-1 right-1'
                  }`}>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5">
                      <ChevronRight className={`text-white ${
                        viewMode === 'grid' ? 'w-3 h-3' : 'w-2.5 h-2.5'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className={`${
                  viewMode === 'grid' 
                    ? 'p-4' 
                    : 'flex-1 p-4 flex flex-col justify-between'
                }`}>
                  <div className={`${viewMode === 'grid' ? 'mb-2' : 'mb-1'}`}>
                    <div className="flex items-start justify-between">
                      <h3 className={`font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-200 line-clamp-2 ${
                        viewMode === 'grid' ? 'text-base' : 'text-lg'
                      }`}>
                        {phytogenic.productName}
                      </h3>
                      <div className="flex items-center space-x-1 text-yellow-400 ml-2">
                        <Star className={`fill-current ${
                          viewMode === 'grid' ? 'w-3.5 h-3.5' : 'w-4 h-4'
                        }`} />
                        <span className={`font-medium text-gray-600 ${
                          viewMode === 'grid' ? 'text-xs' : 'text-sm'
                        }`}>{phytogenic.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`${viewMode === 'grid' ? 'mb-2' : 'mb-1'}`}>
                    <p className={`text-gray-600 font-medium ${
                      viewMode === 'grid' ? 'text-xs mb-2' : 'text-sm mb-1'
                    }`}>
                      {phytogenic.activeIngredient}
                    </p>
                    {viewMode === 'grid' && (
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">{phytogenic.description}</p>
                    )}
                  </div>

                  {/* Target Animals */}
                  <div className={`flex flex-wrap gap-1 ${
                    viewMode === 'grid' ? 'mb-3' : 'mb-2'
                  }`}>
                    {phytogenic.targetAnimals.slice(0, viewMode === 'grid' ? 3 : 2).map((animal: string) => (
                      <span key={animal} className={`bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200 ${
                        viewMode === 'grid' ? 'text-xs' : 'text-xs'
                      }`}>
                        {animal}
                      </span>
                    ))}
                    {phytogenic.targetAnimals.length > (viewMode === 'grid' ? 3 : 2) && (
                      <span className={`bg-gray-50 text-gray-600 px-2 py-0.5 rounded-full border border-gray-200 ${
                        viewMode === 'grid' ? 'text-xs' : 'text-xs'
                      }`}>
                        +{phytogenic.targetAnimals.length - (viewMode === 'grid' ? 3 : 2)}
                      </span>
                    )}
                  </div>

                  {/* Price and Details */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`font-bold text-emerald-600 ${
                        viewMode === 'grid' ? 'text-xl' : 'text-2xl'
                      }`}>₨{phytogenic.price.toLocaleString()}</span>
                      <div className={`text-gray-500 ${
                        viewMode === 'grid' ? 'text-xs' : 'text-sm'
                      }`}>{phytogenic.packSize} • {phytogenic.dosageForm}</div>
                    </div>
                    

                  </div>

                  {/* Natural Ingredients Banner */}
                  {/* Withdrawal Period - Only show if not 0 days */}
                  {phytogenic.withdrawalPeriod.meat !== "0 days" && (
                    <div className={`border-t border-gray-100 ${
                      viewMode === 'grid' ? 'mt-2 pt-2' : 'mt-3 pt-3'
                    }`}>
                      <div className={`flex items-center text-gray-500 ${
                        viewMode === 'grid' ? 'text-xs' : 'text-sm'
                      }`}>
                        <Clock className={`mr-1 ${
                          viewMode === 'grid' ? 'w-2.5 h-2.5' : 'w-3 h-3'
                        }`} />
                        Withdrawal: {phytogenic.withdrawalPeriod.meat} (meat)
                      </div>
                    </div>
                  )}                  

                  {/* No Withdrawal Period */}
                  {phytogenic.withdrawalPeriod.meat === "0 days" && (
                    <div className={`border-t border-gray-100 ${
                      viewMode === 'grid' ? 'mt-2 pt-2' : 'mt-3 pt-3'
                    }`}>
                      <div className={`flex items-center text-green-600 ${
                        viewMode === 'grid' ? 'text-xs' : 'text-sm'
                      }`}>
                        <Leaf className={`mr-1 ${
                          viewMode === 'grid' ? 'w-2.5 h-2.5' : 'w-3 h-3'
                        }`} />
                        No Withdrawal Period
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPhytogenics.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all categories</p>
          </div>
        )}

        {filteredPhytogenics.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Showing {filteredPhytogenics.length} of {phytogenics.length} phytogenic additives
            </p>
          </div>
        )}
      </div>
    </div>
  );
}