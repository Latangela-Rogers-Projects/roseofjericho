import React from 'react';
import "./about-section-styles.css"
import apiData from '../../api';


const HistorySection = () => {
    return (
        <section className="bg-tc-blue text-white" style={{ background: `url(${apiData.imgUri2}missions_history.jpg) center`, backgroundSize: "cover" }}
        >
            <div className="flex flex-col md:flex-row  md:space-x-0 space-y-2 md:space-y-0 " >
                <div className="bg-black bg-opacity-70 p-20 md:pt-40 md:pb-40 md:w-1/2">
                    <h2 className="text-7xl font-semibold mb-4 text-tc-gold">Our History</h2>
                    <p className="text-lg mb-6">
                        The Transformation Collective was founded by LaTangela Rogers, a visionary leader
                        with an unwavering commitment to empowering individuals and communities to reach
                        their full potential. With over 16 years of civil service experience, 19 years of
                        ministry leadership, and more than a decade of expertise in organizational leadership,
                        LaTangela has built a reputation as a catalyst for transformative change in both the
                        public and private sectors.
                    </p>
                    <p className="text-lg mb-6">
                        Her academic achievements further underscore her dedication to growth and excellence.
                        Holding a Bachelor of Arts in Management and a Master of Arts in Human Behavior,
                        LaTangela is currently pursuing a Ph.D. in Organizational Leadership, with a focus on
                        equipping leaders to navigate complex challenges and foster sustainable impact.
                    </p>
                    <p className="text-lg mb-6">
                        The journey of the Transformation Collective began with LaTangela's realization that
                        true transformation requires a holistic approach—one that integrates spiritual growth,
                        leadership development, and practical strategies for organizational success. Drawing
                        from her wealth of experience in civil service and ministry, she envisioned a platform
                        where individuals and organizations could be empowered to create meaningful change.
                    </p>
                </div>
                <div className="bg-tc-blue bg-opacity-90 p-20 md:pt-40 md:pb-40 md:w-1/2">
                    {/* <h2 className="text-7xl font-semibold mb-4 text-tc-gold md:pt-20">Our Vision</h2> */}
                    <p className="text-lg pt-20 mb-6">
                        Founded on the principles of innovation, collaboration, and faith, the Transformation
                        Collective brings together a network of professionals, community leaders, and
                        changemakers dedicated to advancing personal and collective transformation. From
                        leadership coaching and training to community outreach and development, the Collective
                        is committed to equipping others to thrive and make a lasting difference in the world.
                    </p>
                    <p className="text-lg mb-6">
                        Under LaTangela’s guidance, the Transformation Collective has become a beacon of hope and
                        inspiration, transforming lives and communities one step at a time. Today, it stands as a testament
                        to the power of vision, perseverance, and purpose-driven leadership.
                    </p>
                    <div class="flex items-center justify-center h-96">
                        <img class=" h-96" src={`${apiData.imgUri2}LRogeers.png`}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;