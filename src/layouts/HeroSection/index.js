import React, { useState, useEffect, useRef } from "react";
import { VolumeX, Volume2, Play, Pause, ChevronLeft, ChevronRight, PauseCircleIcon, PlayCircleIcon } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import apiData from "../../api";
// import HeroSlider, { Slide, MenuNav, Overlay } from 'hero-slider';
import slides from "./slides.json";

const HeroSection_ = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const overlayTimer = setTimeout(() => {
      setShowOverlay(true);
    }, 1000);

    return () => clearTimeout(overlayTimer);
  }, []);

  const handleOverlayClick = () => {
    setShowOverlay(false);
    setIsMuted(false);

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full h-[60vh] md:h-screen relative pt-[15vh] bg-gradient-to-br from-deep-purple via-deep-purple to-black overflow-hidden">
      <div className="relative w-full h-full overflow-hidden bg-black/50">
        <video
          ref={videoRef}
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=165&oauth2_token_id=57447761"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        />

        {showOverlay && (
          <div
            onClick={handleOverlayClick}
            className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col text-white cursor-pointer animate-fade-in"
          >
            <Volume2 size={40} className="mb-2 animate-pulse" />
            <span className="text-2xl font-bold">Tap to Unmute</span>
          </div>
        )}

        <div className="absolute bottom-6 right-6 flex gap-4">
          <button
            onClick={togglePlay}
            className="bg-black/60 p-3 rounded-full text-white hover:text-gold transition-colors"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          <button
            onClick={toggleMute}
            className="bg-black/60 p-3 rounded-full text-white hover:text-gold transition-colors"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your <span className="text-gold">Leadership</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Empowering individuals and communities through innovative solutions
            </p>
            <button className="bg-gold text-deep-purple px-8 py-4 rounded-lg text-lg font-bold hover:bg-white transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const HeroSection__ = () => {
//   return (
//     <HeroSlider
//       slidingAnimation="fade"
//       orientation="horizontal"
//       initialSlide={1}
//       style={{
//         backgroundColor: '#000',
//       }}
//       settings={{
//         slidingDuration: 500,
//         slidingDelay: 100,
//         shouldAutoplay: true,
//         shouldDisplayButtons: true,
//         autoplayDuration: 5000,
//         height: '100vh',
//       }}
//     >
//       {slides.map((slide, index) => (
//         <Slide
//           background={{
//             backgroundImageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
//             backgroundAttachment: 'fixed',
//           }}
//         />
//         // <Slide
//         //   key={index}
//         //   index={index}
//         //   currentSlide={currentSlide}
//         //   image={slide.image}
//         //   image_bg={slide.image_bg}
//         //   heading={slide.heading}
//         //   subHeading={slide.subHeading}
//         //   customStyle={slide.customStyle}
//         //   isActive={index === currentSlide}
//         //   animateContent={animateContent}
//         // />
//       ))}

//       {/* <Slide
//         background={{
//           backgroundImageSrc: 'https://example.com/image2.jpg',
//           backgroundAttachment: 'fixed',
//         }}
//       />
//       <Slide
//         background={{
//           backgroundImageSrc: 'https://example.com/image3.jpg',
//           backgroundAttachment: 'fixed',
//         }}
//       /> */}

//       <Nav />
//     </HeroSlider>
//   );
// };


const slides_ = [
  {
    id: 0,
    title: "Byodo-In Temple",
    location: "Kaneohe, Hawaii",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    id: 1,
    title: "Mount Fuji",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Track play/pause state
  const totalSlides = slides.length;
  const [progress, setProgress] = useState(0);


  // useEffect(() => {
  //   if (!isPlaying) return; // Stop auto-slide if paused

  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [current, isPlaying]); // Depend on isPlaying state



  useEffect(() => {
    if (!isPlaying) return; // Stop progress when paused

    let start = Date.now();
    const duration = 5000; // Slide duration (5s)

    const updateProgress = () => {
      const elapsed = Date.now() - start;
      const percentage = (elapsed / duration) * 100;

      if (percentage >= 100) {
        setProgress(0);
        nextSlide();
        start = Date.now(); // Reset timer for the next slide
      } else {
        setProgress(percentage);
      }
    };

    const interval = setInterval(updateProgress, 50);

    return () => clearInterval(interval);
  }, [current, isPlaying]); // Track slide change & play state

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const getOffset = (index) => {
    return index === 0 ? 0 : index === 1 ? 33 : 66;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* STatic Background Images */}
      <div className="absolute w-full h-screen overflow-hidden flex"
        style={{ background: `url(${apiData.imgUri}artistic-blurry-colorful-wallpaper-background.jpg) center`, backgroundSize: "cover" }}></div>

      <div className="absolute w-full h-screen overflow-hidden flex opacity-20"
        style={{
          background: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80) center",
          backgroundSize: "cover"
        }}></div>



      {/* Animated Slider With Wipe Effect */}
      <div className="absolute w-full h-screen overflow-hidden flex">
        {slides.map((slide, index) => (
          <motion.div
            key={slide}
            className="absolute top-0 left-0 h-full w-full bg-cover bg-center overflow-hidden"
            style={{ overflow: "hidden" }}
            animate={{ opacity: index === current ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className={`relative h-full w-full flex flex-col items-center justify-center text-white`}>
              <div style={{ position: "absolute", color: "white", ...slide.customStyle.text, }}>
                <h1 className="relative text-lg md:text-5xl font-bold">{slide.heading}</h1>
                <p className="relative text-xs md:text-lg mt-2">{slide.subHeading}</p>
              </div>
              <div style={{ position: "absolute", color: "white", ...slide.customStyle2?.text, }}>
                <h1 className="relative text-lg md:text-5xl font-bold">{slide.heading2}</h1>
                <p className="relative text-xs md:text-lg mt-2">{slide.subHeading2}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>



      {/* Animated Slider With Wipe Effect */}
      <div className="relative w-full h-screen overflow-hidden flex">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="relative top-0 left-0 h-full w-full bg-cover bg-center overflow-hidden"
            style={{ overflow: "hidden" }}
            animate={{ height: index === current ? "100%" : "0%" }}
            initial={{ height: "0%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className={`relative h-full w-full flex flex-col items-center justify-center text-white`}>
              <div
                style={{ background: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80) center`, backgroundSize: "cover", left: `-${getOffset(index)}vw` }}
                className={`absolute top-0 left-0 h-[100vh] w-[100vw] inset-0 left-0 flex flex-col items-center justify-center text-white`}
              ></div>
              <div className="relative h-full w-full bg-black/20 flex flex-col items-center justify-center p-16">
                <h1 className="relative text-lg md:text-5xl font-bold">{slide.title}</h1>
                <p className="relative text-xs md:text-lg mt-2">{slide.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        className="absolute bottom-1/4 md:bottom-1/3 left-4 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
        onClick={prevSlide}
      >
        <ChevronLeft size={32} />
      </button>
      <button
        className="absolute bottom-1/4 md:bottom-1/3 right-4 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
        onClick={nextSlide}
      >
        <ChevronRight size={32} />
      </button>


      <div
        className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 hover:scale-105 transition-transform duration-[600ms] 
        bg-black bg-opacity-50 text-white rounded-full w-64 h-10
        flex space-x-2 items-center justify-center cursor-pointer relative overflow-hidden
    `}
        onClick={togglePlayPause}
      >
        {/* Progress Bar */}
        <div
          className="absolute left-0 bottom-0 h-1 bg-white rounded-full transition-all duration-50"
          style={{ width: `${progress}%` }}
        ></div>

        {isPlaying ? (
          <>
            <PauseCircleIcon size={22} />
            <p>Pause Slide</p>
          </>
        ) : (
          <>
            <PlayCircleIcon size={22} />
            <p>Play Slide</p>
          </>
        )}
      </div>

      {/* <div className={`absolute bottom-6 left-[10vw] hover:scale-105 transition-transform duration-[600ms] 
        bg-black bg-opacity-50 text-white rounded-full w-64 h-10
        flex space-x-2 items-center justify-center cursor-pointer
        `} onClick={togglePlayPause}>
        {isPlaying ?
          <>
            <PauseCircleIcon size={22} />
            <p>Pause Slide</p>
          </>
          :
          <>
            <PlayCircleIcon size={22} />
            <p>Play Slide</p>
          </>
        }
      </div> */}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-white text-lg font-semibold transition-all duration-300 ${current === index ? "border-b-2 border-white" : "opacity-50 hover:opacity-100 border-b-2 border-grey"
              }`}
            onClick={() => goToSlide(index)}
          >
            {/* {`Slide ${index + 1}`} */}
          </button>
        ))}
      </div>
    </div>
  );
}




export default HeroSection;