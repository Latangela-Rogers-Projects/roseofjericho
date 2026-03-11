'use client';

import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

interface PopUpState {
  popUpState: string;
  setPopUpState: (state: string) => void;
}

interface PopUpProps {
  state: PopUpState;
}

export default function PopUp({ state }: PopUpProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [gotoLink, setGotoLink] = useState(false);

  const { popUpState, setPopUpState } = state;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide(1);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  const goToAds = () => {
    setPopUpState('opened');
    setTimeout(() => {
      setGotoLink(true);
    }, 400);
  };

  const manualClose = () => {
    setActiveSlide(0);
  };

  const popUpClass = activeSlide === 1 && popUpState !== 'opened' ? 'translate-y-0' : 'translate-y-full';

  return (
    <div
      className={`fixed right-5 bottom-5 w-[30vw] md:w-[50vw] lg:w-[30vw] bg-purple-900 rounded-lg shadow-2xl transition-transform duration-600 cubic-bezier(0.47, 1.64, 0.41, 0.8) z-50 ${popUpClass}`}
    >
      {/* Redirect Link */}
      {gotoLink && (
        <Link to="/Womens_Wellness_Clinic" className="hidden">
          Navigate
        </Link>
      )}

      {/* Close Button */}
      <button
        onClick={manualClose}
        className="absolute top-2.5 right-2.5 text-2xl text-purple-200 hover:text-white transition cursor-pointer"
        aria-label="Close popup"
      >
        <i className="fas fa-times-circle"></i>
      </button>

      {/* Help Icon */}
      <div className="absolute top-12 right-2.5 bg-white/50 rounded-full p-1 h-8 w-8 flex items-center justify-center">
        <i className="far fa-question-circle text-blue-500 text-xs cursor-pointer"></i>
      </div>

      {/* Clickable Content */}
      <div onClick={goToAds} className="cursor-pointer">
        {/* Image */}
        <img
          src="assets/img/WELLNESS_WOMEN.jpg"
          alt="Wellness Women Center"
          className="w-full h-auto object-cover rounded-t-lg"
        />

        {/* Title */}
        <h1 className="text-white text-center font-bold text-lg uppercase px-4 py-3">
          the Women's center building project
        </h1>

        {/* Description */}
        <p className="text-white text-center text-sm px-4 pb-3">
          The Rose of Jericho Wellness Center will be a safe place for women to receive first in class care and treatment.
        </p>

        {/* Divider */}
        <div className="flex justify-center py-2">
          <div className="w-[70%] h-px bg-white/75 rounded-full"></div>
        </div>

        {/* Read More */}
        <p className="text-white text-center text-xs pb-4 bg-white/10 py-2 m-4 rounded">
          read more
        </p>
      </div>
    </div>
  );
}
