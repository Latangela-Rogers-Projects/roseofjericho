import React, { Component } from 'react';
import YouTube from 'react-youtube';

const styles = {
    col: {
        padding: 5, position: "relative"
    },
    col_: {
        backgroundColor: "rgba(255,255,255,0.3)", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", padding: 20
    },
    col_h1: { fontWeight: "bolder", fontSize: 25, textAlign: "center" },
    col_p: { marginBottom: 0, paddingBottom: 0 },
    col_a: { fontSize: 50, color: "tomato", marginTop: 0, paddingTop: 0, margin: 10, cursor: "pointer" }
}

class Our_Community_Partners_Sponsors extends Component {
    constructor() {
        super();
        this.state = {
            // activeSlide: 1
        }
    }

    render() {
        return (
            <section class="ArAbout_1ticle" style={{ overflow: "hidden", position: "relative",}}>
                <div className='ArAbout_1ticle_row row' style={{ overflow: "hidden", position: "relative", backgroundColor: "rgba(189, 126, 0, 0.077)" }}>
                    <div className='slash2' style={{ zIndex: 0, top: -200, backgroundColor: "rgba(0,0,0,0.04)" }}></div>
                    <div className='slash2' style={{ zIndex: 0, top: -100, backgroundColor: "rgba(0,0,0,0.04)" }}></div>

                    <h1 style={{letterSpacing: 2, textAlign: "center", fontWeight: "100", textTransform: "uppercase"}}>Our Community Partners & Sponsors</h1>
               
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-6 d-sm-flex justify-content-sm-center">
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/Chase_logo.png' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>JP Morgan Chase</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/Encompass_Health_logo.png' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>Encompass Health</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/Accra_Psych_Hospital_logo.jpg' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>Accra Psychiatric Hospital</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/ReMax_png_logo.jpg' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>ReMax</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/Cheryl_Williams_logo.png' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>Cheryl Willamson</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/Shama_District_Logo.jpg' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>Shama District Assembly</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/Ghana_Health_Services_Logo.jpg' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>Ghana Health Services</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/VRA.png' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>Volta River Authority</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/Starbucks.jpg' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>StarBucks</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/Costco.png' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>Costco</p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col OCPS">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_ OCPS_">
                                <img src='assets/img/Nothing_bunt_cakes.png' className='roj-testimonials-img-bg' style={{objectFit: "contain"}}/>
                                <div className='roj-testimonials-writeup2'>
                                    <p>Nothing Bunt Cakes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p style={{letterSpacing: 2, textAlign: "center", position: "relative" }}>
                        We are not able to do the work that we do to rebuild the communities we serve without our community partners 
                        and sponsors. If you are interested in becoming one of our community partners or sponsors contact us by sending 
                        an email at <span><a href='mailto:info@roseofjericho-cd.org'>info@roseofjericho-cd.org</a></span>
                    </p>

                </div>
            </section>
        )
    }
}

export default Our_Community_Partners_Sponsors