// import React from 'react';
import { CourseModalProps } from '../types';

export default function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{course.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />

          <div className="space-y-4">
            <p className="text-gray-600">{course.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Instructor</h3>
                <p>{course.instructor}</p>
              </div>
              <div>
                <h3 className="font-semibold">Duration</h3>
                <p>{course.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold">Level</h3>
                <p>{course.level}</p>
              </div>
              <div>
                <h3 className="font-semibold">Category</h3>
                <p>{course.category}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600">
                ${course.price}
              </span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => window.open(course.url)}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}