import React, { Component } from 'react';

const { innerHeight, innerWidth } = window

class HeartforCleanWaterProject_ extends Component {

    render() {
        return (
            <section class="OurProgServices_1"
                style={{
                    overflow: "hidden", position: "relative", display: "flex", flexDirection: "column",
                    justifyContent: "center", alignItems: "center", paddingTop: 0
                }}>

                <video width={innerWidth - 10} controls >
                    <source src="assets/img/Ghana_Clean_Water_Project.mp4" type="video/mp4" />
                </video>


                <div className='row' style={{
                    paddingLeft: "5vw", paddingRight: "5vw", position: "relative", overflow: "hidden",
                    marginTop: 10, backgroundColor: "rgba(115,115,115,0.1)", paddingTop: 20, paddingBottom: 20,
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
                }}>
                    <div className='col-md-12' style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "2vw", paddingLeft: "2vw" }}>
                        <div>
                            {/* <h1 style={{ fontFamily: "fantasy" }}>2020 COMMUNITY ACTION</h1> */}
                            <p style={{ letterSpacing: 2, marginBottom: 20, alignSelf: "center", textAlign: "center" }}>
                                The Pra River contamination that runs through multiple communities are used for drinking water, fishing,
                                bathing and the contamination has caused long term effects on the health of children and families within
                                the community. Metallic mercury, which is commonly used in gold extraction by the artisanal miners, is
                                highly toxic, and other cancer-causing chemicals have been found in the river. We are working to provide
                                clean water and mobile health clinics to communities directly impacted by the Pra River in the Western
                                Region of Ghana.
                            </p>
                            <p style={{ letterSpacing: 2, marginBottom: 20, alignSelf: "center", textAlign: "center" }}>
                                Help us to bring clean water to the families being directly impacted by donating today!
                            </p>
                            <a href="https://www.paypal.me/roseofjerichocd?locale.x=en_US" style={{
                                backgroundColor: "tomato", padding: 10, color: "white", borderRadius: 10, marginTop: 10, paddingLeft: "40vw", paddingRight: "40vw",
                                alignSelf: "center", textAlign: "center", cursor: "pointer", marginLeft: "2vw"
                            }}>Donate</a>
                        </div>
                    </div>
                </div>


                <div className='col-md-12' style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 5 }}>
                    <div style={{ height: "20vw", width: "25vw", padding: 6 }}>
                        <img src='assets/img/240478109_355510589601481_2324821915986045131_n.jpg' style={{ height: "100%", width: "100%", objectFit: "cover", boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.5)" }} />
                    </div>
                    <div style={{ height: "20vw", width: "25vw", padding: 6 }}>
                        <img src='assets/img/240728051_150233840608264_3717344054449439813_n.jpg' style={{ height: "100%", width: "100%", objectFit: "cover", boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.5)" }} />
                    </div>
                    <div style={{ height: "20vw", width: "25vw", padding: 6 }}>
                        <img src='assets/img/241182659_1447218092325649_729760777811111968_n.jpg' style={{ height: "100%", width: "100%", objectFit: "cover", boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.5)" }} />
                    </div>
                    <div style={{ height: "20vw", width: "25vw", padding: 6 }}>
                        <img src='assets/img/241208741_593454921691632_3093531241122153202_n-1.jpg' style={{ height: "100%", width: "100%", objectFit: "cover", boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.5)" }} />
                    </div>
                </div>

                <div className='row' style={{
                    paddingLeft: "5vw", paddingRight: "5vw", position: "relative", overflow: "hidden",
                    marginTop: 10, backgroundColor: "rgba(115,115,115,0.1)", paddingTop: 20, paddingBottom: 20,
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
                }}>
                    <div className='col-md-12' style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "2vw", paddingLeft: "2vw" }}>
                        <div>
                            <p style={{ letterSpacing: 2, marginBottom: 20, alignSelf: "center", textAlign: "center" }}>
                                Millions of people face hunger on a daily basis. Hunger can happen to anyone, at any time. Hunger 
                                increases the risk of chronic diseases. Our feeding program provides nutritious meals to women and 
                                children. Our 5 year initiative is to feed 10,000 people in Riverside County and internationally in 
                                the Western Region of Ghana.
                            </p>
                            <h1 style={{ fontFamily: "fantasy", textAlign: "center" }}>Help Us Feed 10,000</h1>
                            <a href="https://www.paypal.me/roseofjerichocd?locale.x=en_US" style={{
                                backgroundColor: "tomato", padding: 10, color: "white", borderRadius: 10, marginTop: 10, paddingLeft: "40vw", paddingRight: "40vw",
                                alignSelf: "center", textAlign: "center", cursor: "pointer", marginLeft: "2vw"
                            }}>Donate</a>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default HeartforCleanWaterProject_