import React, { Component } from 'react';
import YouTube from 'react-youtube';

class About_1 extends Component {
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
        const {activeSlide} = this.state;
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
                                src='assets/img/160663448_3543881515836172_4125828369181678619_n.jpg'
                                style={{
                                    height: "100%", width: "100%", objectFit: "cover", transition: "30s",
                                    transform: `scale(${activeSlide === 1 ? 1.3 : 1})`
                                }}
                            />
                        </div>
                    </div>
                    <div className='col-md-6' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", zIndex: 2 }}>
                        <div style={{ margin: 10 }}>
                            <h1 style={{ fontWeight: "bolder", letterSpacing: 2 }}>ABOUT US</h1>
                            <div className='OurMission_home_hr' style={{ marginBottom: 20 }}></div>
                            <p style={{ fontSize: 17, letterSpacing: 2 }}>
                                Rose of Jericho Community Development (ROJCD) has been providing grassroots community 
                                outreach programs to the communities of McKinney, TX and Carrollton, TX. LaTangela knew 
                                that this organization was challenged to resurrect communities that were considered 
                                nonproductive. This birthed the organization’s name of “Rose of Jericho Community 
                                Development Center (ROJCD)”. ROJCD would get off to a slow start. During the inception 
                                stages, LaTangela would work alone to provide the communities of McKinney and Carrollton 
                                with life skills training and development, spiritual counseling, and career counseling. 
                                She began to realize the root of poverty was the mindsets of the people living in the 
                                communities she served. The organization would expand its reach both nationally and 
                                internationally. ROJCD now provides services to Riverside County of California and Accra, Ghana.
                            </p>
                            <a href='https://www.facebook.com/Roseofjerichocd'><i class="fab fa-facebook" style={{ fontSize: 40 }}></i></a>
                        </div>
                    </div>
                    <div className='col-md-6' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", zIndex: 2 }}>
                        <p style={{ fontSize: 17, letterSpacing: 2 }}>
                            Since 2017, ROJCD has grown by leaps and bounds. ROJCD is no longer operated by one individual. 
                            It has since expanded its programs and services to offer women’s mental health awareness training 
                            seminars & conferences, mental health medical missions to parts of Africa, community health fairs, 
                            and community feedings, counseling, community development programs, and women's empowerment summits. 
                            Our organization’s primary focus is community development. We believe in the 8 dimensions of wellness: 
                            Emotional/Mental, Environmental, Financial, Intellectual, Occupational, Physical, Social, Spiritual.
                            <p style={{ fontSize: 17, letterSpacing: 2, marginTop: 20 }} >Our motto is “Your Place For Transformation and Restoration”!</p>
                        </p>
                    </div>
                    <div className='col-md-6' style={{ zIndex: 2 }}>
                        <YouTube videoId="W_bFPonIkVg" opts={opts} onReady={this._onReady} />
                    </div>
                </div>
            </section>
        )
    }
}

export default About_1