import React, { Component } from 'react';
import YouTube from 'react-youtube';

class About_2 extends Component {
    constructor() {
        super();
        this.state = {
            activeSlide: 1
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeSlide: 0
            })
            setTimeout(() => {
                this.setState({
                    activeSlide: 1
                })
                setTimeout(() => {
                    this.setState({
                        activeSlide: 0
                    })
                }, 30000);
            }, 30000);
        }, 500);
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const { activeSlide } = this.state;
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };
        return (
            <section class="ArAbout_1ticle" style={{ overflow: "hidden", position: "relative" }}>
                <div className='ArAbout_1ticle_row row' style={{ overflow: "hidden", position: "relative" }}>
                    <div className='slash2' style={{ zIndex: 0, top: -200 }}></div>
                    <div className='slash2' style={{ zIndex: 0, top: -100 }}></div>
                    <div className='col-md-6' style={{ zIndex: 2, }}>
                        <div style={{
                            height: "70vh", width: "100%", objectFit: "cover", position: "relative",
                            overflow: "hidden"
                        }}>
                            <img
                                src='assets/img/mission.jpg'
                                style={{
                                    height: "100%", width: "100%", objectFit: "cover", transition: "30s",
                                    transform: `scale(${activeSlide === 1 ? 1.3 : 1})`
                                }}
                            />
                        </div>
                    </div>
                    <div className='col-md-6' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", zIndex: 2 }}>
                        <div style={{ margin: 10 }}>
                            <h1 style={{ fontWeight: "bolder", letterSpacing: 2, fontSize: 25 }}>MISSION & VISION</h1>
                            <div className='OurMission_home_hr' style={{ marginBottom: 20 }}></div>
                            <h1 style={{ fontWeight: "bolder", letterSpacing: 2, fontSize: 20, opacity: 0.7 }}>Our Mission:</h1>
                            <p style={{ fontSize: 17, letterSpacing: 2 }}>
                                Rose of Jericho Community Development exists to facilitate the improvement of the quality of life of 
                                the people in the district through the provision of basic social services and the promotion of 
                                socio-economic development within the context of good governance.
                            </p>
                            <h1 style={{ fontWeight: "bolder", letterSpacing: 2, fontSize: 20, opacity: 0.7, marginTop: 30 }}>Our Vision:</h1>
                            <p style={{ fontSize: 17, letterSpacing: 2 }}>
                                To rebuild communities filled with people of culture; and by creating serene environments with 
                                the best social amenities and economic opportunities.
                            </p>
                        </div>
                    </div>
                    <div className='col-md-6' style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2, flexDirection: "column", }}>
                        <h1 style={{ fontWeight: "bolder", letterSpacing: 2, fontSize: 35 }}>HEALING OUR COMMUNITIES <span style={{ color: "tomato", fontSize: 40 }}>"</span></h1>
                        <p style={{ fontSize: 17, letterSpacing: 2, fontStyle: "italic" }}>
                            "In every community, there is work to be done. In every nation, there are wounds to heal. In every heart, there is the power to do it."
                        </p>
                        <p style={{ fontSize: 17, letterSpacing: 2, fontWeight: "bolder" }} >- Marianne Williamson</p>
                    </div>
                    <div className='col-md-6' style={{ zIndex: 2, }}>
                        <div style={{
                            height: "70vh", width: "100%", objectFit: "cover", position: "relative",
                            overflow: "hidden"
                        }}>
                            <img
                                src='assets/img/104962801_2289180471390863_4842400546207497003_n.jpg'
                                style={{
                                    height: "100%", width: "100%", objectFit: "cover", transition: "30s",
                                    transform: `scale(${activeSlide === 1 ? 1.3 : 1})`
                                }}
                            />
                        </div>
                    </div>
                    <div className='col-md-12' style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2, flexDirection: "column", paddingTop: 40 }}>
                        <p style={{ fontSize: 17, letterSpacing: 2, }}>
                            The effects of poverty and mental illness are so individualized and difficult to understand, that we 
                            look to each community that we serve to identify the goals they want to achieve. Through community 
                            analysis and community town hall meetings we are able to help our communities move towards achieving 
                            their goals.
                        </p>
                        <p style={{ fontSize: 17, letterSpacing: 2, }}>
                            We understand that excellence doesn’t only derive from mastery of knowledge, but also from compassion, 
                            dedication, and respect. Understanding each communities’ needs is our first step towards purpose and wholeness.
                        </p>
                        <p style={{ fontSize: 17, letterSpacing: 2, }}>
                            We have been given the blueprint to resurrect communities that have been exhausted of all natural 
                            resources to overcome poverty. It is time to resurrect our communities that have been cast aside. 
                            Let the dead things live!!!!
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About_2