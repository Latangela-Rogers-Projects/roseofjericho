import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 3 },
};

const itemImgStyle = { width: "30vw", height: "15vw", boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.6)", objectFit: "cover" }

const items = [
    <img style={itemImgStyle} src='assets/img/209021540_235427368255393_3295422259815091089_n-1.jpg' onDragStart={handleDragStart} role="presentation" />,
    <img style={itemImgStyle} src='assets/img/209327642_456370815599029_431621112293892472_n.jpg' onDragStart={handleDragStart} role="presentation" />,
    <img style={itemImgStyle} src='assets/img/210619894_213031987409271_3318832050275209284_n.jpg' onDragStart={handleDragStart} role="presentation" />,
    <img style={itemImgStyle} src='assets/img/210741611_971169696757441_642495374676660181_n.jpg' onDragStart={handleDragStart} role="presentation" />,
    <img style={itemImgStyle} src='assets/img/213737862_353705886133796_2897441820942226357_n.jpg' onDragStart={handleDragStart} role="presentation" />,
    <img style={itemImgStyle} src='assets/img/214449541_947906109105581_8991599701029096878_n.jpg' onDragStart={handleDragStart} role="presentation" />,
    <img style={itemImgStyle} src='assets/img/214759729_541348733877663_4834973791956458224_n.jpg' onDragStart={handleDragStart} role="presentation" />,
    <img style={itemImgStyle} src='assets/img/215147563_1374210369618390_7337603880088253504_n_copy.jpg' onDragStart={handleDragStart} role="presentation" />,
    <img style={itemImgStyle} src='assets/img/217016561_3953981781397193_4901163308482854272_n.jpg' onDragStart={handleDragStart} role="presentation" />,
    <img style={itemImgStyle} src='assets/img/219493113_590725108978367_5173541289558807140_n.jpg' onDragStart={handleDragStart} role="presentation" />,
];


class OTB_summit extends Component {

    render() {
        return (
            <section class="OurProgServices_1"
                style={{
                    overflow: "hidden", position: "relative", display: "flex", flexDirection: "column",
                    justifyContent: "center", alignItems: "center",
                }}>


                <div className='row' style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
                    <div className='col-md-6' style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0%" }}>
                        <div style={{ height: "70vh", width: "100%", }}>
                            <img src='assets/img/210741611_971169696757441_642495374676660181_n.jpg' style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                        </div>
                    </div>
                    <div className='col-md-6' style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "2vw", paddingLeft: "2vw" }}>
                        <div>
                            <h1 style={{ fontFamily: "cursive" }}>OUT OF THE BOX</h1>
                            <p style={{ letterSpacing: 2, marginBottom: 20 }}>
                                Out the Box for Women is a program that we created specifically with women in mind. It is a mobile
                                program that provides a safe place for women to walk out their transformation and restoration journey.
                                Each segment of this program is designed to inspire, empower, motivate, encourage, and to move women
                                forward in their divine healing and into their designed purpose. Through participation, women will
                                have the opportunity to attend extraordinary summit sessions with first in class community speakers
                                and teachers. Women will receive practical tools and resources to not just live, but to soar beyond
                                their current situations.
                            </p>
                            <p style={{ letterSpacing: 2, marginBottom: 20 }}>
                                Examples of our program topics: How to detect mental illness, How to cope with mental illness,
                                mindful wellness, better living, art therapy, business strategies, financial empowerment, keys to
                                living a successful life, casualties of a broken system, and making the shift.
                            </p>
                            <a href='https://outheboxcoaching.com'
                                style={{ width: "fit-content", height: "fit-content", padding: 10, paddingRight: 30, paddingLeft: 30, border: "3px solid rgba(0,0,0,0.1)", }}>
                                Register Our Next Summit
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ width: "70vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <p style={{ marginTop: 30, color: "GrayText" }}>We are excited about our women's summit!!!!</p>
                    <h3 style={{ fontSize: 25, fontWeight: "bolder", letterSpacing: 2 }}>Our summit theme is "I AM Enough".</h3>
                </div>

                <div style={{ marginBottom: 10, overflow: "hidden", position: "relative" }}>
                    <img src='assets/img/215147563_1374210369618390_7337603880088253504_n.jpg' style={{ width: "100%", objectFit: "cover", position: "absolute", height: "100%" }} />
                    <div style={{
                        position: "relative",borderTop: "15px solid white", borderBottom: "15px solid white",
                        boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.5) inset"
                        //  borderBottom: "20px solid rgba(42, 0, 55, 0.7", borderTop: "20px solid rgba(42, 0, 55, 0.7" 
                    }}>
                        <p style={{
                            marginTop: "17vh", marginBottom: "17vh", background: "linear-gradient(rgba(0, 0, 30, 0.5), rgba(0, 0, 0, 0.7))", 
                            padding: 30, color: "white", borderTop: "15px solid white", borderBottom: "15px solid white",
                            boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.4) inset"
                        }}>
                            This summit is designed to inspire, empower, motivate, encourage, and to move women forward in their
                            divine healing and into their designed purpose. By attendina. guests will have the opportunitv to hear
                            extraordinarv breakout session speakers share their experiences and receive practica tools and
                            resources to not just live, but to soar beyona ineir current situations. vur guests wIll also nave
                            ine opportunity to participate in spontaneous worsnip ana to experience a prophetic outpouring.
                            Continental BreakTast and Lunch included!
                        </p>
                    </div>
                </div>

                <div style={{ padding: "5vw", paddingBottom: "2vh", paddingTop: "2vh" }}>
                    <h1>Seminar topics</h1>
                    <p style={{ lineHeight: 4 }}>
                        <span style={{ padding: 10, backgroundColor: "rgb(255, 174, 0)", borderRadius: 10, color: "black", margin: 10 }}>How to detect mental illness</span>
                        <span style={{ padding: 10, backgroundColor: "rgb(255, 174, 0)", borderRadius: 10, color: "black", margin: 10 }}>How to Balance Ministry and Business</span>
                        <span style={{ padding: 10, backgroundColor: "rgb(255, 174, 0)", borderRadius: 10, color: "black", margin: 10 }}>Mindful Wellness</span>
                        <span style={{ padding: 10, backgroundColor: "rgb(255, 174, 0)", borderRadius: 10, color: "black", margin: 10 }}>I Am More Than Enough</span>
                        <span style={{ padding: 10, backgroundColor: "rgb(255, 174, 0)", borderRadius: 10, color: "black", margin: 10 }}>I Am Not My Hair</span>
                        <span style={{ padding: 10, backgroundColor: "rgb(255, 174, 0)", borderRadius: 10, color: "black", margin: 10 }}>Branding and Marketing</span>
                        <span style={{ padding: 10, backgroundColor: "rgb(255, 174, 0)", borderRadius: 10, color: "black", margin: 10 }}>Financial Education</span>
                        <span style={{ padding: 10, backgroundColor: "rgb(255, 174, 0)", borderRadius: 10, color: "black", margin: 10 }}>Persevering Through Casualties,</span>
                        <span style={{ padding: 10, backgroundColor: "rgb(255, 174, 0)", borderRadius: 10, color: "black", margin: 10 }}>Marriage 101</span>
                        <span style={{ padding: 10, backgroundColor: "rgb(255, 174, 0)", borderRadius: 10, color: "black", margin: 10 }}>Single and Armed</span>
                    </p>
                </div>

                <div style={{ width: "100%", backgroundColor: "rgba(128, 0, 128, 0.01)", padding: "2vw", paddingBottom: "2vh", paddingTop: "2vh", }}>
                    <AliceCarousel
                        mouseTracking items={items}
                        responsive={responsive}
                        style={{ backgroundColor: "red" }}
                        controlsStrategy="alternate"
                        disableButtonsControls
                        autoPlay
                        autoPlayInterval={5000}
                        infinite={true}
                    />
                </div>

                <div class="FirstQuote">
                    <img src='assets/img/213737862_353705886133796_2897441820942226357_n.jpg' className='FirstQuote_img' />
                    <div className='FirstQuote_div_cover'></div>
                    <h3 style={{ color: "white", textAlign: "center", paddingTop: 40, fontWeight: "bolder", fontSize: 30, }}>Additional Conference Information</h3>
                    <div className='FirstQuote_div row' >
                        <div className='FirstQuote_div_ col-md-6'>
                            <div className='FirstQuote_div__' style={{ borderRadius: 0, backgroundColor: "rgba(128, 128, 128, 0.704)", width: "100%" }}>
                                <p>
                                    Our VIP Experience is sure to get our guests  red up for the main event. Come enjoy networking with
                                    our keynote speakers and breakout session facilitators, giveaways, music, and personal prophetic
                                    impartation.
                                </p>
                            </div>
                        </div>
                        <div className='FirstQuote_div_ col-md-6'>
                            <div className='FirstQuote_div__' style={{ borderRadius: 0, backgroundColor: "rgba(128, 128, 128, 0.704)", width: "100%" }}>
                                <p>
                                    This event will be held on Friday 6:00 PM to 8:00 PM in lounge are of the event hotel venue. This
                                    is a cocktail style networking event opportunity that will afford women the opportunity to network.
                                    Light hors d’oeuvres will be served.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OTB_summit