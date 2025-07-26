import React from 'react';
import ResourcesLayout from '../layouts/Resources-Layout';
import apiData from '../api';

function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <div>
        <section style={{ backgroundColor: "black", background: `url(${apiData.imgUri}events.jpg) center`, backgroundSize: "cover",}}>
          <div className='pt-24 pb-5 bg-white bg-opacity-90 '>
            <ResourcesLayout />
            {/* <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Resources</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-8">
              Our resource section is currently under development. Soon you'll have access to:
            </p>
            <ul className="text-lg space-y-4">
              <li>Free guides and workbooks</li>
              <li>Transformational leadership articles</li>
              <li>Educational videos and webinars</li>
              <li>Community success stories</li>
            </ul>
          </div>
        </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resources;