import React, { Component } from 'react';

class OurProgServices_1 extends Component {

    render() {
        return (
            <section class="OurProgServices_1"
                style={{
                    overflow: "hidden", position: "relative", display: "flex", flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}>

                <div className='row' style={{ width: "80vw" }}>
                    <div className='col-md-8'>
                        <h1>COMMUNITY FEEDINGS</h1>
                        <p>
                            Millions of people face hunger on a daily basis. Hunger can happen to anyone,
                            at any time. Hunger increases the risk of chronic diseases. Our feeding program
                            provides nutritious meals to women and children. Our 2020 initiative is to
                            provide 5,000 meals each month.
                        </p>
                    </div>
                    <div className='col-md-4' style={{
                        display: "flex", flexDirection: "column",
                        justifyContent: "flex-start", alignItems: "center"
                    }}>
                        <h1 style={{ fontSize: "larger", marginTop: 10 }}>INTERESTED?</h1>
                        <p>Contact Us Today!</p>
                        <a style={{color:"white", backgroundColor: "tomato", width: "fit-content", height: "fit-content", padding: 10, borderRadius: 20, paddingLeft: 20, paddingRight: 20}}>
                            <i class="fas fa-phone-alt"></i> Contact
                        </a>
                    </div>
                </div>

                <div className='row' style={{ backgroundColor: "rgba(191, 180, 180, 0.278)", padding: 30, width: "100vw", marginBottom: 10, }}>
                    <div style={{ width: "100%", position: "relative", overflow: "hidden", boxShadow: "0px 0px 30px 5px rgba(0,0,0,0.7)" }}>
                        <img src='assets/img/gallery_page_9_popup.jpg' style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute", zIndex: 0, left: 0 }} />
                        <div style={{ height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.5)", position: "absolute", zIndex: 0, left: 0 }}></div>
                        <div className='row' style={{ zIndex: 2, position: "relative" }}>
                            <div className='col-md-6' style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <h1 style={{ margin: "3vw", color: "white", marginBottom: 10 }}>Community Health Screenings</h1>
                                <p style={{ margin: "3vw", color: "white", marginTop: 10 }}>
                                    Our community health screenings provides knowledge and promotes health.
                                    We partner with local community health care agencies, medical professionals, and local
                                    government officials to offer services that will make a lasting impact.
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <p style={{ margin: "3vw", color: "white", marginBottom: 10 }}>Services offered during our community health screenings:</p>
                                <ul style={{ margin: "3vw", color: "white", marginTop: 10 }}>
                                    <li>Body Mass Index</li>
                                    <li>Diabetes Test</li>
                                    <li>Cholesterol Test</li>
                                    <li>Blood Pressure Reading</li>
                                    <li>Smoking Risk Assessment</li>
                                    <li>Alcohol Abuse Screening</li>
                                    <li>Anxiety, Stress, Depression Screening</li>
                                    <li>Review Results with Peer Health Specialist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row' style={{ backgroundColor: "rgba(191, 180, 180, 0.278)", padding: 30, width: "100vw", marginBottom: 0, }}>
                    <div style={{ width: "100%", position: "relative", overflow: "hidden", boxShadow: "0px 0px 30px 5px rgba(0,0,0,0.7)" }}>
                        <img src='assets/img/vol.png' style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute", zIndex: 0, left: 0 }} />
                        <div style={{ height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.5)", position: "absolute", zIndex: 0, left: 0 }}></div>
                        <div className='row' style={{ zIndex: 2, position: "relative" }}>
                            <div className='col-md-12' style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <h1 style={{ margin: "3vw", color: "white", marginBottom: 10 }}>COMMUNITY MENTAL HEALTH SERVICES</h1>
                                <p style={{ margin: "3vw", color: "white", marginTop: 10 }}>
                                    Mental health illnesses affect a large proportion of the urban population. 1 in 4
                                    people will have a mental health disorder in their lifetime, and this can occur at
                                    any age. ROJCD offers treatment services from a holistic approach. Our approach of
                                    treating the whole body provides the best outcomes in the recovery process. We treat
                                    the underlying issues that trigger addiction, helping to maintain the balance of
                                    career, social and family life. Our psychosocial approach looks at individuals in
                                    the context of the combined influence that psychological factors and the surrounding
                                    social environment have on their physical and mental wellness and their ability to
                                    function. We also offer the holistic approach component to enrich the treatment
                                    services we offer. Our primary goal is to care for the whole person (mind, body, and soul).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurProgServices_1