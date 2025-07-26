import React, { useEffect, useState } from 'react';
import apiData from '../../api';

// Reusable Slide Component
const Slide = ({ index, currentSlide, image, image_bg, heading, subHeading, customStyle = {}, isActive, animateContent, animateContainer }) => {
  const [fgAnim, set_fgAnim] = useState(false);
  const [bgAnim, set_bgAnim] = useState(false);
  const [hAnim, set_hAnim] = useState(false);
  const [pAnim, set_pAnim] = useState(false);
  const image_bg_ = apiData.imgUri + image_bg;
  const image_ = apiData.imgUri + image

  useEffect(() => {
    if (animateContent) {
      set_fgAnim(true);
      set_bgAnim(true);
      setTimeout(() => {
        set_hAnim(true)
        setTimeout(() => {
          set_pAnim(true)
        }, 100);
      }, 600);
    } else {
      set_fgAnim(false);
      set_bgAnim(false)
      set_hAnim(false);
      setTimeout(() => {
        set_pAnim(false)
      }, 150);
    }
  }, [animateContent]);

  return (
    <div style={{ ...customStyle, ...activeStyle(animateContent), position: "absolute", width: "100%", height: "100%" }}>
      {index === currentSlide &&
        <>
          <div
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.8,
              position: "absolute"
            }}>
            <img
              src={image_bg_}
              alt={heading}
              style={{
                ...bg_Animate(bgAnim, index),
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute"
              }}
            />
            <img
              src={image_}
              alt={heading}
              style={{
                ...fg_Animate(fgAnim, index),
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute"
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.5)",
              ...bg_Animate(bgAnim, index),
            }}>
          </div>
          <div
            className='Hero_textContainer'
            style={{
              position: "absolute",
              color: "white",
              ...customStyle.text && customStyle.text,
            }}
          >
            <h1 style={{ ...h_Animate(hAnim, index) }}>{heading}</h1>
            <p style={{ ...h_Animate(pAnim, index) }}>{subHeading}</p>
          </div>
        </>
      }
    </div>
  );
};

export default Slide;


const activeStyle = (isActive) => {
  const style = isActive ? {
    opacity: 1,
    zIndex: 2,
    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
    transform: "scale(1)",
  }
    : {
      opacity: 0,
      zIndex: 1,
      transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      transform: "scale(1)",
    };
  return style;
}


const fg_Animate = (boolean, index) => {
  const style = boolean ? {
    opacity: 1,
    // zIndex: 2,
    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
    transform: "scale(1)",
  }
    : {
      opacity: 0,
      // zIndex: 1,
      transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      transform: "scale(0.9)",
    };
  return style;
}

const bg_Animate = (boolean, index) => {
  const style = boolean ? {
    opacity: 0.8,
    // zIndex: 2,
    transition: "opacity 3s ease-in-out, transform 8s ease-in-out",
    transform: "scale(1)",
  }
    : {
      opacity: 0,
      // zIndex: 1,
      transition: "opacity 3s ease-in-out, transform 1s ease-in-out",
      transform: "scale(1.2)",
    };
  return style;
}

const blackScreen_Animate = (boolean, index) => {
  const style = boolean ? {
    opacity: 0.2,
    // zIndex: 2,
    transition: "opacity 5s ease-in-out",
  }
    : {
      opacity: 0,
      // zIndex: 1,
      transition: "opacity 1s ease-in-out",
    };
  return style;
}

const h_Animate = (boolean, index) => {
  const style = boolean ? {
    opacity: 1,
    // zIndex: 2,
    transition: "opacity 3s ease-in-out, transform 1.5s ease-in-out",
    transform: "translateY(0px)",
  }
    : {
      opacity: 0,
      // zIndex: 1,
      transition: "opacity 1.5s ease-in-out, transform 3s ease-in-out",
      transform: "translateY(300px)",
    };
  return style;
}