// import React from 'react';

const categories = [
    'All',
    'Personal Development',
    'Strategic Leadership',
    'Team Leadership'
  ];
  
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

interface SidebarProps {
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: string) => void;
  selectedCategory: string;
  selectedLevel: string;
}

export default function Sidebar({ 
  onCategoryChange, 
  onLevelChange, 
  selectedCategory, 
  selectedLevel 
}: SidebarProps) {
  return (
    <div className="hidden md:block w-64 bg-white p-6 shadow-lg h-screen m-2" style={{borderRadius: '1rem'}}>
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        {categories.map((category) => (
          <div key={category} className="mb-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                className="form-radio text-blue-600"
              />
              <span>{category}</span>
            </label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-2">Level</h3>
        {levels.map((level) => (
          <div key={level} className="mb-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="level"
                checked={selectedLevel === level}
                onChange={() => onLevelChange(level)}
                className="form-radio text-blue-600"
              />
              <span>{level}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}