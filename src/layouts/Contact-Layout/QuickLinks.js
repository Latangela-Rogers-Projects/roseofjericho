import React from 'react';

const QuickLinks = () => {
  const links = [
    { title: 'Top Resources', url: '/Resources', description: 'Explore our most popular Resources and guides.' },
    { title: 'About', url: '/about', description: 'Find answers to commonly asked questions.' },
    { title: 'Explore Our Channel', url: 'https://www.youtube.com/embed/videoseries?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU', description: 'Stay updated with the latest podcasts and posts.' },
    { title: 'Join Now', url: 'https://latangela-rogers.mykajabi.com/offers/DQiq2NuL/checkout', description: 'Reach out to our team, join the community.' },
    { title: 'Leadership Transformation & Development', url: 'https://latangela-rogers.mykajabi.com/offers/9yQQv7bJ/checkout', description: 'The 12-Month Executive Coaching Program ' },
    { title: 'Events', url: '/events', description: 'Follow up on past and upcoming events' },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Quick Links to Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="relative bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 group opacity-80"
            >
              <h3 className="text-xl font-semibold text-tc-gold group-hover:underline mb-2">
                {link.title}
              </h3>
              <p className="text-gray-600">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;