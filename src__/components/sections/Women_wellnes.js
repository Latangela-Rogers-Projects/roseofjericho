import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

class Women_wellnes extends Component {
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

    render() {
        const { parent } = this.props;
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };
        return (
            <>
                {parent === "home" ?
                    <section className='Women_wellnes' style={{ overflow: "hidden", position: "relative", width: "100%", boxShadow: "0px 0px 30px 6px rgba(0,0,0,0.5)" }}>

                        <img src='assets/img/WELLNESS_WOMEN.jpg' style={{ width: "100%", height: "100%", position: "absolute", zIndex: 0, top: 0, left: 0, objectFit: "cover" }} />
                        <div className='roj-OurMission_home-col_' style={{
                            position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingTop: 0
                        }}>
                            <div style={{
                                boxShadow: "0px 0px 20px 6px rgba(0,0,0,0.5)", paddingTop: 40, backgroundColor: "rgba(160, 81, 45, 0.615)", width: "fit-content",
                                borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 20,
                            }}>
                                <h1
                                    style={{
                                        fontWeight: "bolder", fontSize: "x-large", textAlign: "center", color: "white",
                                        textTransform: "uppercase", marginTop: 40
                                    }}>
                                    the Women's center building project
                                </h1>
                            </div>

                            <div style={{
                                boxShadow: "0px 0px 20px 6px rgba(0,0,0,0.5)", paddingTop: 40, backgroundColor: "rgba(160, 81, 45, 0.615)", width: "80vw",
                                borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, marginTop: "35vh", marginBottom: 0, display: "flex", flexDirection: "column",
                                justifyContent: "center", alignItems: "center"
                            }}>
                                <p
                                    style={{
                                        fontWeight: "bolder", textAlign: "center", color: "white",
                                    }}>
                                    We are looking forward to our state-of-the-art spa like women's wellness center. The Rose of Jericho Wellness
                                    Center will be a safe place for women to receive first in class care and treatment. The services women will be able to
                                    receive: wellness checks, womb care, mental health assessments, counseling, health and wellness education.
                                </p>
                                <Link to={'/Womens_Wellness_Clinic'} className='roj-testimonials-link'>Read More</Link>
                            </div>
                        </div>
                    </section>
                    :
                    <section style={{
                        display: "flex", flexDirection: "column",
                        justifyContent: "center", alignItems: "center", position: "relative"
                    }}>

                        <div className='Women_wellnes' style={{ 
                            overflow: "hidden", position: "relative", width: "100%", boxShadow: "0px 0px 30px 6px rgba(0,0,0,0.5)",
                            display: "flex", justifyContent: "center", alignItems: "center" 
                        }}>
                            <img src='assets/img/WELLNESS_WOMEN.jpg' style={{ width: "100%",}} />
                            <h1
                                    style={{
                                        fontWeight: "bolder",
                                        fontSize: "large", textAlign: "center", paddingTop: 40,
                                        backgroundColor: "rgba(160, 81, 45, 0.615)", width: "fit-content", color: "white",
                                        borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 20,
                                        boxShadow: "0px 0px 20px 6px rgba(0,0,0,0.5)", textTransform: "uppercase",
                                        position: "absolute", top: 0
                                    }}>
                                    the Women's center building project
                                </h1>
                        </div>

                        <div className='row' style={{
                            width: "80vw", display: "flex", flexDirection: "column",
                            justifyContent: "center", alignItems: "center", position: "relative"
                        }}>
                            <p style={{ letterSpacing: 2, marginBottom: 20, alignSelf: "center", textAlign: "center" }}>
                                We are looking forward to our state-of-the-art spa like women's wellness center. The Rose of Jericho Wellness
                                Center will be a safe place for women to receive first in class care and treatment. The services women will be able to
                                receive: wellness checks, womb care, mental health assessments, counseling, health and wellness education.
                            </p>
                            <hr style={{ width: "20vw", borderColor: "black" }} />
                            <p style={{ letterSpacing: 2, marginBottom: 20, alignSelf: "center", textAlign: "center" }}>
                                The center will be based in Ghana in a city outside of Accra.
                            </p>
                            <hr style={{ width: "20vw", borderColor: "black" }} />
                            <p style={{ letterSpacing: 2, marginBottom: 20, alignSelf: "center", textAlign: "center", fontWeight: "bold" }}>
                                We are raising $300,000 USD for the completion of the center. Every dollar will help us to meet our capital campaign goal
                            </p>
                        </div>


                        {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to right, rgba(245, 222, 179, 0.139), rgba(255, 192, 74, 0.038), rgba(245, 222, 179, 0.239))" }}>
                            <img src='assets/img/TD1.png' style={{ width: "45vw", height: "40vw", objectFit: "cover", margin: "2vw", boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.1)" }} />
                            <img src='assets/img/TD2.png' style={{ width: "45vw", height: "40vw", objectFit: "cover", margin: "2vw", boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.1)" }} />
                        </div> */}

                    </section>
                }

            </>
        )
    }
}

export default Women_wellnes