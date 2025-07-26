import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CourseGrid from './components/CourseGrid';
import CourseModal from './components/CourseModal';
import { courses } from './data/courses';
// import { Course } from './types';

export default function ResourcesLayout() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = courses.filter((course) => {
    const categoryMatch =
      selectedCategory === 'All' || course.category === selectedCategory;
    const levelMatch = 
      selectedLevel === 'All' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-gray-150 bg-opacity-90 flex m-0 md:m-4" style={{borderRadius: 20}}>
      <Sidebar
        onCategoryChange={setSelectedCategory}
        onLevelChange={setSelectedLevel}
        selectedCategory={selectedCategory}
        selectedLevel={selectedLevel}
      />
      <main className="flex-1">
        <header className="">
          <div className="max-w-7xl mx-auto py-4 px-6">
            <h1 className="text-3xl font-bold text-gray-900">All Our Resources</h1>
            <h1 className="text-1xl font-bold text-gray-900">Online Training Courses</h1>
            </div>
        </header>
        <CourseGrid
          courses={filteredCourses}
          onCourseClick={setSelectedCourse}
        />
        <CourseModal
          course={selectedCourse}
          isOpen={selectedCourse !== null}
          onClose={() => setSelectedCourse(null)}
        />
      </main>
    </div>
  );
}