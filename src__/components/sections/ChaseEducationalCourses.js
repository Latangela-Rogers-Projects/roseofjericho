import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

class ChaseEducationalCourses extends Component {
    constructor() {
        super();
        this.state = {
            // activeSlide: 1
        }
    }

    render() {
        return (
            <section class="ArAbout_1ticle" style={{ overflow: "hidden", position: "relative", }}>
                <div className='ArAbout_1ticle_row row' style={{
                    overflow: "hidden", position: "relative", background: "url(assets/img/red_bg.jpeg )center no-repeat",
                    backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"
                }}>
                    <img src='assets/img/Chase_logo.png' style={{
                        objectFit: "cover", width: 200, height: 50, borderRadius: "20%"
                    }} />
                    <h1 style={{ letterSpacing: 2, textAlign: "center", textTransform: "uppercase", color: "white", fontSize: "large", marginTop: 10 }}>Chase Educational Courses</h1>

                    <div className='row'>
                        <div className='col-md-6' style={{ padding: 10 }}>
                            <div style={{ padding: 10, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 20 }}>
                                <p style={{letterSpacing: 2, color: "white"}}>
                                    We have been afforded the opportunity to partner with Chase to host the Advancing 
                                    Black Entrepreneurs Educational Courses. 
                                </p>
                                <p style={{letterSpacing: 2, color: "white"}}>
                                    Advancing Black Entrepreneurs by Chase for Business is partnering with Black Enterprise, 
                                    the National Urban League, the U.S. Black Chambers, the National Minority Supplier Development 
                                    Council, and the Boss Network to help Black-owned businesses grow and scale.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6' style={{ padding: 10 }}>
                            <div style={{ padding: 10, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 20 }}>
                                <p style={{letterSpacing: 2, color: "white"}}>
                                    Together, we’ve created an educational program speciﬁcally for Black business owners on topics 
                                    that are vital to business growth and sustainability. These 90-minute guided sessions are 
                                    focused on how business owners can address immediate and long-term financial needs and build resiliency.
                                </p>
                                <p style={{letterSpacing: 2, color: "white", marginTop: 40}}>
                                    Virtual Sessions begin February 23, 2023
                                </p>
                            </div>
                        </div>
                        <p style={{letterSpacing: 2, color: "white", textAlign: "center", marginTop: 20}}>
                            <a style={{padding: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: "tomato", cursor: "pointer", borderRadius: 10}}>Click to sign up </a>
                        </p>
                    </div>


                </div>
            </section>
        )
    }
}

export default ChaseEducationalCourses