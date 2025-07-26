import React from 'react';
import "./about-section-styles.css"
import apiData from '../../api';

const AboutHeroSection = () => {
    return (
        <>
            <section className="bg-white text-black AH-container">
                <div className='flex flex-col md:flex-row'>
                    <div className="p-20 md:pt-40 md:pb-40 md:w-1/2">
                        <h2 className="text-7xl font-semibold mb-4 text-tc-gold md:pt-20">Our Mission</h2>
                        <p className="text-lg">
                            Our mission is to empower individuals and communities through innovative solutions,
                            transformative leadership, and collaborative initiatives, fostering growth, wholeness,
                            and sustainable impact.
                        </p>
                    </div>
                    <div className="p-20 md:pt-40 md:pb-40 md:w-1/2 md:flex hidden AH-stickerContainer">
                        <div className='bg-tc-blue AH-sticker' style={{ backgroundColor: "black", background: `url(${apiData.imgUri}vecteezy_man-in-suit-giving-a-presentation-on-stage-to-a-large_49461425.jpeg) center`, backgroundSize: "cover" }}></div>
                    </div>
                </div>
            </section>


            <section className="bg-tc-blue text-white">
                <div className="flex flex-col md:flex-row  md:space-x-0 space-y-2 md:space-y-0 " >
                    <div className="p-20 md:pt-40 md:pb-40 md:w-1/2 md:flex hidden AH-stickerContainer">
                        <div className='AH-sticker2' style={{ background: `url(${apiData.imgUri}businesswoman-is-standing-at-a-podium-speaking-into-a_49686865.jpeg) center`, backgroundSize: "cover" }}></div>
                    </div>
                    <div className="bg-opacity-90 p-20 md:pl-32 md:pt-40 md:pb-40 md:w-1/2" style={{ position: "relative" }}>
                        <h2 className="text-7xl font-semibold mb-4 text-tc-gold md:pt-10">Our Vision</h2>
                        <p className="text-lg">
                            To be a global catalyst for transformation, equipping leaders and organizations
                            to create lasting change in every sphere of society.
                        </p>
                    </div>
                </div>
            </section>
            {/* <section className="bg-black text-white AH-container">
                <div className='md:flex-row'>
                    <div className="p-20 md:pt-40 md:pb-40 md:w-1/2">
                        <h2 className="text-7xl font-semibold mb-4 text-tc-gold md:pt-20">Our Mission</h2>
                        <p className="text-lg">
                            Our mission is to empower individuals and communities through innovative solutions,
                            transformative leadership, and collaborative initiatives, fostering growth, wholeness,
                            and sustainable impact.
                        </p>
                    </div>
                </div>
                <div className='AH-sticker'></div>
            </section> */}
        </>
    );
};

export default AboutHeroSection;



{/* <div className="md:flex-row  md:space-x-0 space-y-2 md:space-y-0 " >
                <div className="bg-black bg-opacity-70 p-20 md:pt-40 md:pb-40 md:w-1/2">
                    <h2 className="text-7xl font-semibold mb-4 text-tc-gold md:pt-20">Our Mission</h2>
                    <p className="text-lg">
                        Our mission is to empower individuals and communities through innovative solutions,
                        transformative leadership, and collaborative initiatives, fostering growth, wholeness,
                        and sustainable impact.
                    </p>
                </div>
                <div className="bg-tc-blue bg-opacity-90 p-20 md:pt-40 md:pb-40 md:w-1/2">
                    <h2 className="text-7xl font-semibold mb-4 text-tc-gold md:pt-20">Our Vision</h2>
                    <p className="text-lg">
                        To be a global catalyst for transformation, equipping leaders and organizations
                        to create lasting change in every sphere of society.
                    </p>
                </div>
            </div> */}