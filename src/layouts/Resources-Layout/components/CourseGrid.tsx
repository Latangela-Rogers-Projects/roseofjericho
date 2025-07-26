// import React from 'react';
import { Course } from '../types';

interface CourseGridProps {
  courses: Course[];
  onCourseClick: (course: Course) => void;
}

export default function CourseGrid({ courses, onCourseClick }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => onCourseClick(course)}
        >
          <div className='relative w-full h-48 '>
            <img
              src={course.imagePlaceHolder}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <img
              src={course.imageUrl}
              alt={course.title}
              className="absolute top-0 w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{course.title?.slice(0,50)}{course.title?.length >= 50 ? "..." : ""}</h3>
            <p className="text-gray-600 mb-2">{course.description?.slice(0,250)}{course.description?.length >= 250 ? "..." : ""}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-blue-600 font-bold">${course.price}</span>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">
                {course.level}
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <p>Instructor: {course.instructor}</p>
              <p>Duration: {course.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}