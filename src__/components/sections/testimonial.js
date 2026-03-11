import React, { Component } from 'react';

class Testimonials extends Component {

    render() {
        return (
            <section style={{
                background: "url(assets/img/roseBG.png) center no-repeat", backgroundSize: "cover", backgroundBlendMode: 100, marginTop: 20,
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.4)", position: "relative", top: 13
            }}>
                <div class="container">
                    <div class="row">
                        {/* <div style={{ width: "100%", height: 5, backgroundColor: "green", marginTop: 5 }}></div> */}
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            {/* <p class="fw-bold text-success mb-2" style={{ marginTop: 10 }}>Programes</p> */}
                            <h2 class="fw-bold" style={{marginTop: 10}}><strong>Connect with those in need</strong></h2>
                        {/* <div style={{ width: "100%", height: 5, backgroundColor: "green", marginTop: 5 }}></div> */}
                            <p class="text-muted w-lg-50">No matter the project, our team can handle it.&nbsp;</p>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
                        <div class="col mb-4 roj-Testimonials-col">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_">
                                <img src='assets/img/197133167_177260914345228_1852374427604276547_n-1.jpg' className='roj-testimonials-img-bg' />
                                <div className='roj-testimonials-writeup'>
                                    <h1>SIGN UP FOR 2023 GHANA MEDICAL MISSION</h1>
                                    <hr className='roj-testimonials-line' />
                                    <p>Operation “Heal the Land”</p>
                                    <a className='roj-testimonials-link'>Sign Up</a>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_">
                                <img src='assets/img/210214232_865616007692345_8332186466229696473_n.jpg' className='roj-testimonials-img-bg' />
                                <div className='roj-testimonials-writeup'>
                                    <h1>VOLUNTEER OPPORTUNITIES</h1>
                                    <hr className='roj-testimonials-line' />
                                    <p>A great way to connect with your community is by volunteering your time and talents for one or more of Rose of Jericho Community Development’s community projects or events.</p>
                                    {/* <a className='roj-testimonials-link'>Sign Up</a> */}
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4 roj-Testimonials-col">
                            <div class="d-flex flex-column align-items-center align-items-sm-start roj-Testimonials-col_">
                                <img src='assets/img/210359805_197443675659069_4710153733879046348_n.jpg' className='roj-testimonials-img-bg' />
                                <div className='roj-testimonials-writeup'>
                                    <h1>MAKE A DONATION</h1>
                                    <hr className='roj-testimonials-line' />
                                    <p>Your tax donation will help to build, stabilize, and strengthen the local communities that we serve.</p>
                                    <a className='roj-testimonials-link' style={{ backgroundColor: "tomato", padding: 10 }} href="https://www.paypal.me/roseofjerichocd?locale.x=en_US">DONATE NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonials