import React, { useEffect, useState } from 'react';
import { Youtube, Music, Play, Pause, Volume2, VolumeX, ArrowRight, Share2, Heart, MessageCircle, Bookmark } from 'lucide-react';
import QuickLinks from '../layouts/Contact-Layout/QuickLinks';
import useFetchYouTubeResources from '../api/useFetchYouTubeResources';
import { audioLinks, videoLinks } from '../api/youtubeLinks';

const Media = () => {
  const [activeTab, setActiveTab] = useState('youtube');
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectedPodcast, setSelectedPodcast] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const resourcesFromHook = useFetchYouTubeResources(videoLinks, audioLinks);
  const [AudioResources, setAudioResources] = useState([]);
  const [VideoResources, setVideoResources] = useState([]);

  const videos = [
    {
      title: "Leadership Transformation",
      duration: "15:30",
      views: "1.2K",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      likes: 245,
      comments: 32
    },
    {
      title: "Community Impact",
      duration: "12:45",
      views: "956",
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      likes: 189,
      comments: 24
    },
    {
      title: "Global Leadership",
      duration: "18:20",
      views: "2.1K",
      thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80",
      likes: 312,
      comments: 45
    }
  ];

  const podcasts = [
    {
      title: "The Art of Transformation",
      duration: "45:20",
      episode: "EP 01",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80",
      plays: "2.3K"
    },
    {
      title: "Leadership in Crisis",
      duration: "38:15",
      episode: "EP 02",
      thumbnail: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&q=80",
      plays: "1.8K"
    },
    {
      title: "Building Community",
      duration: "42:30",
      episode: "EP 03",
      thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
      plays: "1.5K"
    }
  ];

  useEffect(() => {
    setAudioResources(resourcesFromHook.filter(item => item.type === "audio"));
    setVideoResources(resourcesFromHook.filter(item => item.type === "video"));
  },[resourcesFromHook])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-deep-purple to-black text-white pt-20">
      <div className='absolute top-0 left-0 right-0 bottom-0 opacity-20' style={{ background: `url(https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&q=80) center`, backgroundSize: "cover" }} />
      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Media Center</h1>
          <p className="text-xl text-gray-300">Explore our transformative content</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('youtube')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
              activeTab === 'youtube' ? 'bg-gold text-deep-purple' : 'bg-white/10'
            }`}
          >
            <Youtube className="w-5 h-5" /> YouTube
          </button>
          <button
            onClick={() => setActiveTab('podcast')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
              activeTab === 'podcast' ? 'bg-gold text-deep-purple' : 'bg-white/10'
            }`}
          >
            <Music className="w-5 h-5" /> Podcast
          </button>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'youtube' ? (
              <div className="bg-black/30 rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/videoseries?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU"
                    title="YouTube Channel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{VideoResources[selectedVideo]?.title}</h2>
                  <div className="flex items-center gap-4 text-gray-400 mb-4">
                    <span>{VideoResources[selectedVideo]?.views} views</span>
                    <span>{VideoResources[selectedVideo]?.duration}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 hover:text-gold transition-colors">
                      <Heart className="w-5 h-5" /> {VideoResources[selectedVideo]?.likes}
                    </button>
                    <button className="flex items-center gap-2 hover:text-gold transition-colors">
                      <MessageCircle className="w-5 h-5" /> {VideoResources[selectedVideo]?.comments}
                    </button>
                    <button className="flex items-center gap-2 hover:text-gold transition-colors">
                      <Share2 className="w-5 h-5" /> Share
                    </button>
                    <button className="flex items-center gap-2 hover:text-gold transition-colors">
                      <Bookmark className="w-5 h-5" /> Save
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-black/30 rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={AudioResources[selectedPodcast]?.thumbnail}
                    alt={AudioResources[selectedPodcast]?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-full bg-gold text-deep-purple flex items-center justify-center hover:bg-white transition-colors"
                    >
                      {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">{AudioResources[selectedPodcast]?.title}</h2>
                    <span className="text-gold">{AudioResources[selectedPodcast]?.episode}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="hover:text-gold transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <div className="flex-1 h-1 bg-white/20 rounded-full">
                      <div className="w-1/3 h-full bg-gold rounded-full"></div>
                    </div>
                    <span className="text-gray-400">{AudioResources[selectedPodcast].duration}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Playlist */}
          <div className="lg:col-span-1">
            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">
                {activeTab === 'youtube' ? 'Latest Videos' : 'Recent Episodes'}
              </h3>
              <div className="space-y-4">
                {(activeTab === 'youtube' ? VideoResources : AudioResources).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => activeTab === 'youtube' ? setSelectedVideo(index) : setSelectedPodcast(index)}
                    className={`flex gap-4 cursor-pointer group ${
                      (activeTab === 'youtube' ? selectedVideo : selectedPodcast) === index
                        ? 'bg-gold/20'
                        : 'hover:bg-white/5'
                    } p-3 rounded-lg transition-colors`}
                  >
                    <div className="relative w-32 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {activeTab === 'youtube' && (
                        <div className="absolute bottom-1 right-1 bg-black/80 text-xs px-1 rounded">
                          {item.duration}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-gold transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {activeTab === 'youtube' ? `${item.views} views` : `${item.plays} plays`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={activeTab === 'youtube' 
                  ? "https://youtube.com/@thetransformationcollective-la?si=sUXUbYwJrcjeeeN7"
                  : "https://music.youtube.com/playlist?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU&si=4daLdL1mPGKUS9uW"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-gold text-deep-purple py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white transition-colors"
              >
                View All <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <QuickLinks />
    </div>
  );
};

export default Media;