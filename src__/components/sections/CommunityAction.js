import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CommunityAction extends Component {

    render() {
        return (
            <section class="OurProgServices_1"
                style={{
                    overflow: "hidden", position: "relative", display: "flex", flexDirection: "column",
                    justifyContent: "center", alignItems: "center",
                }}>


                <div className='row' style={{ position: "relative", overflow: "hidden",  boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.3)", }}>
                    {/* <div className='col-md-12' style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0%" }}>
                        <div style={{ height: "30vh", width: "100%", boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.3)", }}>
                            <img src='assets/img/CommunityFeeding.jpg' style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                        </div>
                    </div> */}
                    <div className='col-md-12' style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: 0, backgroundColor: "green", overflow: "hidden" }}>
                        <img src='assets/img/CommunityFeeding.jpg' style={{ height: "100%", width: "100%", objectFit: "cover", position: "absolute", top: 0 }} />
                        <div style={{ padding: 100, position: "relative", backgroundColor: "rgba(0,0,0,0.7)", paddingRight: "5vw", paddingLeft: "5vw" }}>
                            <h1 style={{ fontFamily: "fantasy", fontWeight: "900", color: "white" }}>2023 COMMUNITY ACTION</h1>
                            <p style={{ letterSpacing: 2, marginBottom: 20, color: "white" }}>
                                Multiple women’s seminars were conducted to help women move beyond their traumas. Over 400 women in the
                                local communities of Riverside County, were served this year. Next year it is our projection to double the
                                number we assisted this year.
                            </p>
                            <p style={{ letterSpacing: 2, marginBottom: 20, color: "white" }}>
                                Hunger and health are deeply connected. People who are food insecure are disproportionately affected by
                                diet- sensitive chronic diseases such as diabetes and high blood pressure, and according to research,
                                food insecurity is also linked to many adverse effects to overall health. A poor diet is linked to poorer
                                mental health in children and adolescents. In the year 2020 we served over 1000 women and children through
                                community feedings in Ghana. In addition, we provided 400 medical screenings to locals in the Budurburam
                                Liberian Camp in Ghana. In the year 2021 we served 300 women and children. This year 2022 we fed 200
                                people. For 2023 we are launching our "Feed 10,000" campaign. This is our 5 year initiative that will help
                                fight hunger in California and in parts of Ghana.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='ArAbout_1ticle_row row' style={{ overflow: "hidden", position: "relative", marginTop: 30 }}>
                    {/* <div className='slash2' style={{ zIndex: 0, top: -200 }}></div>
                    <div className='slash2' style={{ zIndex: 0, top: -100 }}></div> */}

                    <h1 style={{ letterSpacing: 2, fontWeight: "bolder", fontSize: 25, textTransform: "uppercase", textAlign: "center" }}>Community Projects and Capital Campaigns:</h1>

                    <div className='col-md-6' style={{ padding: "2vw", height: "60vh" }}>
                        <div style={{ boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.3)", position: "relative", overflow: "hidden", height: "100%", width: "100%", }}>
                            <img src='assets/img/WELLNESS_WOMEN.jpg' style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                            <div className='roj-OurMission_home-col_' style={{ position: "absolute", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.6)", width: "100%", height: "100%" }}>
                                <h1 style={{ color: "white" }}>Rose of Jericho Women's Wellness Clinic</h1>
                                <p style={{ color: "white" }}>The Rose of Jericho Wellness Center will be a safe place for women to receive first in class care and treatment. </p>
                                <Link to={'/Womens_Wellness_Clinic'} className='roj-testimonials-link'>Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6' style={{ padding: "2vw", height: "60vh" }}>
                        <div style={{ boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.3)", position: "relative", overflow: "hidden", height: "100%", width: "100%", }}>
                            <img src='assets/img/241208741_593454921691632_3093531241122153202_n-1.jpg' style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                            <div className='roj-OurMission_home-col_' style={{ position: "absolute", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.6)", width: "100%", height: "100%" }}>
                                <h1 style={{ color: "white" }}>Heart for Clean Water Project</h1>
                                <p style={{ color: "white" }}>Metallic mercury, which is commonly used in gold extraction by the artisanal miners, highly toxic, and other cancer-causing chemicals have been found in the river. </p>
                                <Link to={'/Mission_Vision'} className='roj-testimonials-link'>Read More</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default CommunityAction