import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import slides from "./slides.json";
import "./HeroSection.css";
import apiData from "../../api";
import ImagesDev from "../../api/images";
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from "react-icons/fa";



// Main Hero Section Component
const HeroSection_v1 = () => {

  // State to manage current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to manage animation of content
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    setAnimateContent(true);
    setTimeout(() => {
      setAnimateContent(false)
    }, 7000);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimateContent(true);
      setTimeout(() => {
        setAnimateContent(false)
      }, 7000);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      style={{
        position: "relative", width: "100%",
        height: "105vh", overflow: "hidden",
        background: 'linear-gradient(45deg, #01010C,rgb(77, 23, 79), #01010C, #270129 70%)'
      }}>
      <div
        style={{
          position: "relative", width: "100%",
          height: "100%", overflow: "hidden",
          background: `url(${apiData.imgUri}artistic-blurry-colorful-wallpaper-background.jpg) center`,
          backgroundSize: "cover"
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            index={index}
            currentSlide={currentSlide}
            image={slide.image}
            image_bg={slide.image_bg}
            heading={slide.heading}
            subHeading={slide.subHeading}
            customStyle={slide.customStyle}
            isActive={index === currentSlide}
            animateContent={animateContent}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection_v2 = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const foregroundVideoRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  useEffect(() => {
    // Show overlay 1 second after page loads
    const overlayTimer = setTimeout(() => {
      setShowOverlay(true);
    }, 1000);

    return () => clearTimeout(overlayTimer);
  }, []);

  useEffect(() => {
    const syncVideos = () => {
      if (foregroundVideoRef.current && backgroundVideoRef.current) {
        backgroundVideoRef.current.currentTime = foregroundVideoRef.current.currentTime;
        backgroundVideoRef.current.play();
      }
    };

    if (foregroundVideoRef.current) {
      foregroundVideoRef.current.addEventListener("play", syncVideos);
    }

    return () => {
      if (foregroundVideoRef.current) {
        foregroundVideoRef.current.removeEventListener("play", syncVideos);
      }
    };
  }, []);

  const handleOverlayClick = () => {
    setShowOverlay(false);
    setIsMuted(false);

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (foregroundVideoRef.current) {
      foregroundVideoRef.current.muted = false;
      foregroundVideoRef.current.play();
    }
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.play();
    }
  };

  const toggleMute = () => {
    if (foregroundVideoRef.current) {
      setIsMuted(!isMuted);
      foregroundVideoRef.current.muted = !isMuted;
    }
  };

  const togglePlay = () => {
    if (foregroundVideoRef.current) {
      if (isPlaying) {
        foregroundVideoRef.current.pause();
      } else {
        foregroundVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
    if (backgroundVideoRef.current) {
      if (isPlaying) {
        backgroundVideoRef.current.pause();
      } else {
        backgroundVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // <div
    //   className="w-full h-[80vh] md:h-[100vh] sm:h-[80vh] overflow-hidden relative"
    //   style={{ background: 'linear-gradient(45deg, #01010C,rgb(77, 23, 79), #01010C, #270129 70%)' }}
    // >
    //   <div
    //     style={{
    //       position: "relative", width: "100%",
    //       height: "100%", overflow: "hidden",
    //       background: `url(${apiData.imgUri}artistic-blurry-colorful-wallpaper-background.jpg) center`,
    //       backgroundSize: "cover"
    //     }}
    //   >
    //     {/* Background Video with Responsive Scaling */}
    //     {/* <video
    //       ref={backgroundVideoRef}
    //       src={ImagesDev.heroVideo}
    //       autoPlay
    //       loop
    //       muted
    //       playsInline
    //       className="w-full h-full object-cover absolute top-0 left-0 blur-lg brightness-50"
    //     /> */}

    //     {/* Foreground Video */}
    //     <video
    //       ref={foregroundVideoRef}
    //       src={ImagesDev.heroVideo}
    //       autoPlay
    //       loop
    //       muted={isMuted}
    //       playsInline
    //       className="w-full h-full object-cover pt-[15vh] pb-[15vh] md:pt-[0vh] md:pb-[0vh] relative"
    //     />

    //     {/* Overlay for Tap to Unmute */}
    //     <div
    //       onClick={handleOverlayClick}
    //       style={{
    //         position: "absolute",
    //         top: 0,
    //         left: 0,
    //         width: "100%",
    //         height: "100%",
    //         backgroundColor: "rgba(0, 0, 0, 0.6)",
    //         color: "#fff",
    //         display: showOverlay ? "flex" : "none",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         flexDirection: "column",
    //         fontSize: "24px",
    //         fontWeight: "bold",
    //         cursor: "pointer",
    //         textAlign: "center",
    //         animation: showOverlay ? "fadeIn 0.5s ease-in-out" : "fadeOut 0.5s ease-out",
    //       }}
    //     >
    //       <FaVolumeUp
    //         size={40}
    //         style={{
    //           marginBottom: "10px",
    //           marginTop: "40vh",
    //           color: "#fff",
    //           animation: "pulse 1.5s infinite",
    //         }}
    //       />
    //       Tap to Unmute
    //     </div>

    //     {/* Video Controls (Bottom Right) */}
    //     <div
    //       style={{
    //         position: "absolute",
    //         bottom: "20px",
    //         right: "20px",
    //         display: "flex",
    //         gap: "15px",
    //       }}
    //     >
    //       {/* Play/Pause Button */}
    //       <button
    //         onClick={togglePlay}
    //         style={{
    //           backgroundColor: "rgba(0, 0, 0, 0.6)",
    //           border: "none",
    //           padding: "10px",
    //           borderRadius: "50%",
    //           cursor: "pointer",
    //           color: "#fff",
    //           fontSize: "20px",
    //           transition: "0.3s",
    //         }}
    //         onMouseOver={(e) => (e.target.style.color = "#00ffcc")}
    //         onMouseOut={(e) => (e.target.style.color = "#fff")}
    //       >
    //         {isPlaying ? <FaPause /> : <FaPlay />}
    //       </button>

    //       {/* Mute/Unmute Button */}
    //       <button
    //         onClick={toggleMute}
    //         style={{
    //           backgroundColor: "rgba(0, 0, 0, 0.6)",
    //           border: "none",
    //           padding: "10px",
    //           borderRadius: "50%",
    //           cursor: "pointer",
    //           color: "#fff",
    //           fontSize: "20px",
    //           transition: "0.3s",
    //         }}
    //         onMouseOver={(e) => (e.target.style.color = "#00ffcc")}
    //         onMouseOut={(e) => (e.target.style.color = "#fff")}
    //       >
    //         {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    //       </button>
    //     </div>

    //     {/* Keyframe Animations */}
    //     <style>
    //       {`
    //       @keyframes fadeIn {
    //         from { opacity: 0; }
    //         to { opacity: 1; }
    //       }
    //       @keyframes fadeOut {
    //         from { opacity: 1; }
    //         to { opacity: 0; }
    //       }
    //       @keyframes pulse {
    //         0% { transform: scale(1); opacity: 0.8; }
    //         50% { transform: scale(1.1); opacity: 1; }
    //         100% { transform: scale(1); opacity: 0.8; }
    //       }
    //     `}
    //     </style>
    //   </div>

    // </div>
    <div
      className="w-full overflow-hidden relative"
      style={{ background: 'linear-gradient(45deg, #01010C, rgb(77, 23, 79), #01010C, #270129 70%)' }}
    >
      <div className="relative w-full flex justify-center items-center">
        {/* Foreground Video */}
        <video
          ref={foregroundVideoRef}
          src={ImagesDev.heroVideo}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-auto object-cover"
        />

        {/* Overlay for Tap to Unmute */}
        {showOverlay && (
          <div
            onClick={handleOverlayClick}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white text-xl font-bold cursor-pointer text-center animate-fadeIn"
          >
            <FaVolumeUp size={40} className="mb-4 text-white animate-pulse" />
            Tap to Unmute
          </div>
        )}

        {/* Video Controls (Bottom Right) */}
        <div className="absolute bottom-5 right-5 flex gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-black/60 text-white text-lg transition hover:text-teal-400"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-black/60 text-white text-lg transition hover:text-teal-400"
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.1); opacity: 1; }
        100% { transform: scale(1); opacity: 0.8; }
      }
    `}
      </style>
    </div>
  );
};

export default HeroSection_v2;
