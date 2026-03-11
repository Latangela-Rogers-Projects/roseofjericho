import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const half_height_of_screen = window.innerHeight / 2



class Nav extends Component {
    constructor() {
        super();
        this.state = {
            logoHeight: window.innerHeight,
            // ACTIVE_roj_nav_card: 0,
            // ACTIVE_roj_nav_card_text: 0,
            // showCardText: false,
            ACTIVE_roj_nav_card: 2,
            ACTIVE_roj_nav_card_text: 2,
            showCardText: true,
            totalSlides: 3,
        };
        this.interval = null
    }

    componentDidMount = () => {
        // window.addEventListener('scroll', this.handleScroll);
        this.compDidMountAfter()
    };

    roj_transition_transit = (qury) => {
        const querry = qury;
        const { ACTIVE_roj_nav_card, totalSlides } = this.state;
        const forNegativeQuery = ACTIVE_roj_nav_card <= 1 ? totalSlides : ACTIVE_roj_nav_card - 1
        const forPositiveQuery = ACTIVE_roj_nav_card >= totalSlides ? 1 : ACTIVE_roj_nav_card + 1
        const newValue = querry === "prev" ? forNegativeQuery : forPositiveQuery;
        this.setState({
            ACTIVE_roj_nav_card: newValue,
            ACTIVE_roj_nav_card_text: 100,
            showCardText: false
        });
        setTimeout(() => {
            this.setState({ showCardText: true });
            setTimeout(() => {
                this.setState({ ACTIVE_roj_nav_card_text: newValue });
                setTimeout(() => {
                    // this.start_roj_nav_card_Animation()
                }, 10000);
            }, 500);
        }, 500);
    }

    compDidMountAfter = () => {
        setTimeout(() => {
            this.setState({
                ACTIVE_roj_nav_card: 1,
                ACTIVE_roj_nav_card_text: 100,
                showCardText: false
            });
            setTimeout(() => {
                this.setState({ showCardText: true });
                setTimeout(() => {
                    this.setState({ ACTIVE_roj_nav_card_text: 1 });
                    setTimeout(() => {
                        this.start_roj_nav_card_Animation()
                    }, 10);
                }, 500);
            }, 500);
        }, 500);
    }
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
        clearInterval(this.interval);
    };
    handleScroll = (event) => {
        const scrollTop = window.scrollY;
        const minHeight = 100;
        const logoHeight_ = Math.max(minHeight, window.innerHeight - scrollTop);
        const logoHeight = Math.min(window.innerHeight, logoHeight_);
        this.setState({ logoHeight });
    }

    start_roj_nav_card_Animation = () => {
        const { ACTIVE_roj_nav_card, totalSlides } = this.state;
        const newValue = ACTIVE_roj_nav_card + 1;
        if (ACTIVE_roj_nav_card <= (totalSlides - 1)) {
            setTimeout(() => {
                this.setState({
                    ACTIVE_roj_nav_card: newValue,
                    ACTIVE_roj_nav_card_text: 100,
                    showCardText: false
                });
                setTimeout(() => {
                    this.setState({ showCardText: true });
                    setTimeout(() => {
                        this.setState({ ACTIVE_roj_nav_card_text: newValue });
                        this.start_roj_nav_card_Animation()
                    }, 500);
                }, 500);
            }, 10000);
        } else {
            setTimeout(() => {
                this.setState({
                    ACTIVE_roj_nav_card: 1,
                    ACTIVE_roj_nav_card_text: 100,
                    showCardText: false
                });
                setTimeout(() => {
                    this.setState({ showCardText: true });
                    setTimeout(() => {
                        this.setState({ ACTIVE_roj_nav_card_text: 1 });
                        this.start_roj_nav_card_Animation()
                    }, 500);
                }, 500);
            }, 10000);
        }
    }

    render() {
        const { logoHeight, ACTIVE_roj_nav_card, ACTIVE_roj_nav_card_text, showCardText } = this.state;
        const { parent, subParent } = this.props
        const windowsInnerWidth = window.innerWidth
        const windowsInnerHeight = window.innerHeight
        const roj_nav_cardSTYLE1 = {
            width: windowsInnerWidth > 991 ? (windowsInnerWidth / 2) - 100 : windowsInnerWidth - 40,
            height: windowsInnerHeight * 0.85,
        }
        const class_ = {
            homeActive: parent === "home" ? "active" : "",
            aboutUsActive: parent === "aboutUs" ? "active" : "",
            OurPrograms_ServicesActive: parent === "OurPrograms&Services" ? "active" : "",
            tjpActive: parent === "tjpActive" ? "active" : "",
            Mission_VisionActive: subParent === "Mission & Vision" ? "active" : "",
            OurTeamActive: subParent === "Our Team" ? "active" : "",
            OutOfTheBoxActive: subParent === "Out Of The Box" ? "active" : "",
            CommunityImpactActive: subParent === "Community Impact" ? "active" : "",
            HeartforCleanWaterProjectActive: subParent === "Heart for Clean Water Project" ? "active" : "",
            WomensWellnessClinicActive: subParent === "Women's Wellness Clinic" ? "active" : "",
        }
        const roj_nav_card1 = ACTIVE_roj_nav_card === 1 ? "roj_nav_card_1_active" : "roj_nav_card_1";
        const roj_nav_card2 = ACTIVE_roj_nav_card === 2 ? "roj_nav_card_2_active" : "roj_nav_card_2";
        const roj_nav_card3 = ACTIVE_roj_nav_card === 3 ? "roj_nav_card_3_active" : "roj_nav_card_3";
        const roj_nav_card4 = ACTIVE_roj_nav_card === 4 ? "roj_nav_card_4_active" : "roj_nav_card_4";

        const roj_nav_card_img1 = ACTIVE_roj_nav_card === 1 ? "roj_nav_card_img_active" : "roj_nav_card_img";
        const roj_nav_card_img2 = ACTIVE_roj_nav_card === 2 ? "roj_nav_card_img_active" : "roj_nav_card_img";
        const roj_nav_card_img3 = ACTIVE_roj_nav_card === 3 ? "roj_nav_card_img_active" : "roj_nav_card_img";
        const roj_nav_card_img4 = ACTIVE_roj_nav_card === 4 ? "roj_nav_card_img_active" : "roj_nav_card_img";

        const rn_info_title1 = ACTIVE_roj_nav_card_text === 1 ? "rn_info_title_active" : "rn_info_title";
        const rn_info_title2 = ACTIVE_roj_nav_card_text === 2 ? "rn_info_title_active" : "rn_info_title";
        const rn_info_title3 = ACTIVE_roj_nav_card_text === 3 ? "rn_info_title_active" : "rn_info_title";
        const rn_info_title4 = ACTIVE_roj_nav_card_text === 4 ? "rn_info_title_active" : "rn_info_title";

        const rn_info_paragh1 = ACTIVE_roj_nav_card_text === 1 ? "rn_info_paragh_active" : "rn_info_paragh";
        const rn_info_paragh2 = ACTIVE_roj_nav_card_text === 2 ? "rn_info_paragh_active" : "rn_info_paragh";
        const rn_info_paragh3 = ACTIVE_roj_nav_card_text === 3 ? "rn_info_paragh_active" : "rn_info_paragh";
        const rn_info_paragh4 = ACTIVE_roj_nav_card_text === 4 ? "rn_info_paragh_active" : "rn_info_paragh";

        const rn_info_paragh21 = ACTIVE_roj_nav_card_text === 1 ? "rn_info_paragh2_active" : "rn_info_paragh2";
        const rn_info_paragh22 = ACTIVE_roj_nav_card_text === 2 ? "rn_info_paragh2_active" : "rn_info_paragh2";
        const rn_info_paragh23 = ACTIVE_roj_nav_card_text === 3 ? "rn_info_paragh2_active" : "rn_info_paragh2";
        const rn_info_paragh24 = ACTIVE_roj_nav_card_text === 4 ? "rn_info_paragh2_active" : "rn_info_paragh2";
        return (
            <>
                <nav
                    class="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3 roj_navbar roj_transition2" id="mainNav">


                    <img
                        className='nav_img_bg roj_transition' src='assets/img/pexels-brett-sayles-4504742_.jpg'
                        style={{ opacity: 0.8, borderRadius: 10, }}
                    />

                    <div className='roj-nav-blocker roj_transition' style={{ opacity: 0.63, borderRadius: 10, }}></div>


                    <div class="container roj_transition2">
                        <a class="navbar-brand d-flex align-items-center roj_transition2" href="/">
                            <span class="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon roj_bs_icon">
                                <img src="assets/img/rojlogo-web.png" width="125" height="51" />
                            </span>
                        </a>
                        <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
                            <span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse roj_navbar2" id="navcol-1" style={{}}>
                            <ul class="navbar-nav mx-auto" >
                                <li class="nav-item"><Link to={'/'} class={"nav-link " + class_.homeActive} href="index.html">
                                    <i class="fas fa-home"></i> Home <br /><hr class={"nav-link-hr " + class_.homeActive} /></Link>
                                </li>
                                <li class="nav-item"><Link to={'/AboutUs'} class={"nav-link " + class_.aboutUsActive} href="services.html">
                                    {/* <i class="fas fa-info-circle"></i>*/} About Us <br /><hr class={"nav-link-hr " + class_.aboutUsActive} /></Link>
                                    <div className='navLink1DropDown'>
                                        <li class="nav-item"><Link to={'/Mission_Vision'} class={"nav-link " + class_.Mission_VisionActive}>Mission & Vission <br /><hr class={"nav-link-hr " + class_.Mission_VisionActive} /></Link></li>
                                        <li class="nav-item"><Link to={'/Our_Team'} class={"nav-link " + class_.OurTeamActive}>Our Team <br /><hr class={"nav-link-hr " + class_.OurTeamActive} /></Link></li>
                                    </div>
                                </li>
                                <li class="nav-item"><Link to={'/OurPrograms&Services'} class={"nav-link " + class_.OurPrograms_ServicesActive} href="projects.html">
                                    {/* <i class="fas fa-compass"></i>*/} Our Projects & Services <br /><hr class={"nav-link-hr " + class_.OurPrograms_ServicesActive} /></Link>
                                    <div className='navLink1DropDown'>
                                        <li class="nav-item"><Link to={'/Out_Of_The_Box'} class={"nav-link " + class_.OutOfTheBoxActive}>Out Of The Box <br /><hr class={"nav-link-hr " + class_.OutOfTheBoxActive} /></Link></li>
                                        <li class="nav-item"><Link to={'/Comunity_Impact'} class={"nav-link " + class_.CommunityImpactActive}>Community Impact <br /><hr class={"nav-link-hr " + class_.CommunityImpactActive} /></Link></li>
                                        <li class="nav-item"><Link to={'/Heart_for_Clean_Water_Project'} class={"nav-link " + class_.HeartforCleanWaterProjectActive}>Heart for Clean Water Project <br /><hr class={"nav-link-hr " + class_.LifeSkillTrainingActive} /></Link></li>
                                        <li class="nav-item"><Link to={'/Womens_Wellness_Clinic'} class={"nav-link " + class_.WomensWellnessClinicActive}>Women's Wellness Clinic <br /><hr class={"nav-link-hr " + class_.CommunityMentalHealthServiceActive} /></Link></li>
                                    </div>
                                </li>
                                <li class="nav-item"><Link to={'/The_Joshua_Coalition'} class={"nav-link " + class_.tjpActive} href="pricing.html">{/* <i class="fas fa-podcast"></i>*/} The Joshua Project Coalition <br /><hr class={"nav-link-hr " + class_.tjpActive} /></Link></li>
                                {/* <li class="nav-item"><Link to={'/Home'} class="nav-link" href="contacts.html"><i class="fas fa-notes-medical"></i> Medical Mission Trips</Link></li> */}
                            </ul>
                            <a
                                class="btn btn-primary shadow roj_transition2 roj-Donate" href="https://www.paypal.me/roseofjerichocd?locale.x=en_US"
                                style={{ backgroundColor: "rgb(183, 61, 0)", marginTop: 0 }}
                            ><i class="far fa-arrow-alt-circle-right"></i> Donate Now</a>
                        </div>
                    </div>
                </nav>

                {
                    parent === "home" &&
                    <>
                        <div style={{ height: windowsInnerHeight * 0.7, width: "100%", position: "absolute", top: -80, left: 0, overflow: "hidden" }}>
                            <img style={{ height: windowsInnerHeight * 0.7, width: "100%", position: "absolute", top: 0, left: 0, opacity: 1, objectFit: "cover" }} src='assets/img/pexels-brett-sayles-4504742_.jpg' />
                            <div className='roj-nav-blocker' style={{ opacity: 1, borderRadius: 0, zIndex: 0, background: "linear-gradient(0.25turn, rgba(42, 0, 55, 0.8), rgba(0, 0, 0, 0.3), rgba(42, 0, 55, 0.6), rgba(42, 0, 55, 0.8))" }}></div>
                        </div>
                        <div className='roj_transition' style={{ height: windowsInnerHeight * 0.7, width: "100%", overflow: "hidden", position: "relative", backgroundColor: "black", top: 30 }}>

                            <div className='col-mb-6 roj_nav_content_collumn' style={{ position: "absolute" }}>
                                <div className={'roj_nav_card'} style={{ opacity: ACTIVE_roj_nav_card_text === 1 ? 1 : 0 }}>
                                    <img className={roj_nav_card_img1 + ' roj_transition'} src='assets/img/218036353_146968374201847_1134335439513124336_n.jpg' />
                                </div>
                                <div className={'roj_nav_card'} style={{ opacity: ACTIVE_roj_nav_card_text === 2 ? 1 : 0 }}>
                                    <img className={roj_nav_card_img2 + ' roj_transition'} src='assets/img/241182659_1447218092325649_729760777811111968_n.jpg' />
                                </div>
                                <div className={'roj_nav_card'} style={{ opacity: ACTIVE_roj_nav_card_text === 3 ? 1 : 0 }}>
                                    <img className={roj_nav_card_img3 + ' roj_transition'} src='assets/img/about.png' />
                                </div>
                                <div className={'roj_nav_card'} style={{ opacity: ACTIVE_roj_nav_card_text === 4 ? 1 : 0 }}>
                                    <img className={roj_nav_card_img4 + ' roj_transition'} src='assets/img/241510120_235649281843979_5935109471248854482_n.jpg' />
                                </div>
                            </div>

                            <div className='col-mb-6 roj_nav_content_collumn'>
                                <div className={'roj_nav_card ' + roj_nav_card1}>
                                    <img className={roj_nav_card_img1 + ' roj_transition'} src='assets/img/218036353_146968374201847_1134335439513124336_n.jpg' />
                                </div>
                                <div className={'roj_nav_card ' + roj_nav_card2}>
                                    <img className={roj_nav_card_img2 + ' roj_transition'} src='assets/img/241182659_1447218092325649_729760777811111968_n.jpg' />
                                </div>
                                <div className={'roj_nav_card ' + roj_nav_card3}>
                                    <img className={roj_nav_card_img3 + ' roj_transition'} src='assets/img/about.png' />
                                </div>
                                <div className={'roj_nav_card ' + roj_nav_card4}>
                                    <img className={roj_nav_card_img4 + ' roj_transition'} src='assets/img/241510120_235649281843979_5935109471248854482_n.jpg' />
                                </div>
                            </div>

                            <div className='writeupContainer' style={{ opacity: showCardText ? 1 : 0 }}></div>

                            <div className='col-mb-6 roj_nav_content_collumn2'>
                                {/* <p>{windowsInnerWidth}</p> */}
                                <div className='info_title'>
                                    <h1 className={'rn_info_title_ ' + rn_info_title1} style={{ fontSize: windowsInnerWidth > 1421 ? "3.5vw" : windowsInnerWidth > 1140 ? "4vw" : windowsInnerWidth > 877 ? "4.5vw" : "5vw" }}>OUR MISSION</h1>
                                    <h1 className={'rn_info_title_ ' + rn_info_title2} style={{ fontSize: "4vw", bottom: -10 }}>Hearts For Wellness</h1>
                                    <h1 className={'rn_info_title_ ' + rn_info_title3}>Hearts For Missions</h1>
                                    <h1 className={'rn_info_title_ ' + rn_info_title4}>FOURTH TITLE</h1>
                                </div>
                                <div className='info_paragh'>
                                    <h1 className={'rn_info_paragh_ ' + rn_info_paragh1}
                                        style={{
                                            fontSize: 100, fontWeight: "bolder", top: -20
                                        }}
                                    >
                                        EMPOWER
                                    </h1>
                                    <p className={'rn_info_paragh_ ' + rn_info_paragh2}
                                        style={{
                                            fontSize: windowsInnerWidth > 1421 ? "5.5vw" : windowsInnerWidth > 1140 ? "6vw" : windowsInnerWidth > 877 ? "6.5vw" : "7vw", fontWeight: "bolder", top: -20
                                        }}>
                                        Clean Water Project
                                    </p>
                                    <p className={'rn_info_paragh_ ' + rn_info_paragh3}
                                        style={{
                                            width: windowsInnerWidth > 991 ? "60%" : "95%",
                                            height: 95, fontSize: windowsInnerWidth > 1421 ? "1vw" : windowsInnerWidth > 1140 ? "1.2vw" : windowsInnerWidth > 877 ? "1.3vw" : "2vw"
                                        }}
                                    >
                                        Our mission trip's core focus is to contribute to the health care infrastructure
                                        by improving upon health care delivery that will help to eliminate chronic illnesses
                                        and transmittable diseases that are fueled by contaminated water due to illegal
                                        mining. We envision a country filled with enduring and improving health systems
                                        where everyone has access to quality and compassionate healthcare
                                    </p>
                                    <p className={'rn_info_paragh_ ' + rn_info_paragh4}>
                                        All the information jhesl asople hbdle
                                        can msma skensdk sidnsd jshaks jsadnddd
                                    </p>
                                </div>
                                <div className='info_paragh2'>
                                    <p className={'rn_info_paragh2_ ' + rn_info_paragh21}>
                                        Empowering Communities. Removing Stigma. Ending Poverty.
                                    </p>
                                    <a className={'rn_info_paragh2_ ' + rn_info_paragh22}
                                        style={{
                                            height: "fit-content", width: "fit-content", padding: 10,
                                            backgroundColor: "tomato", top: 20, color: "white"
                                        }} href="https://www.paypal.me/roseofjerichocd?locale.x=en_US"
                                    >
                                        Donate Now
                                    </a>
                                    <p className={'rn_info_paragh2_ ' + rn_info_paragh23}>

                                    </p>
                                    <p className={'rn_info_paragh2_ ' + rn_info_paragh24}>
                                        All the information jhesl asople hbdle
                                        can msma skensdk sidnsd jshaks jsadnddd
                                    </p>
                                </div>
                            </div>

                            <div className='roj_transition_controls roj_transition_controls_1' onClick={() => { this.roj_transition_transit("prev") }}>
                                <i class="fas fa-chevron-circle-left"></i>
                            </div>
                            <div className='roj_transition_controls roj_transition_controls_2' onClick={() => { this.roj_transition_transit("next") }}>
                                <i class="fas fa-chevron-circle-right"></i>
                            </div>


                        </div>
                        <div class='row' style={{ position: "relative", top: 30, padding: 20, paddingTop: 5, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            {/* <div style={{ width: "90%", height: 2, backgroundColor: "green", marginTop: 5, alignSelf: "center" }}></div> */}
                            <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center'}}>
                                <div class="link_sugestions"> <div class="dot" /> <Link to={'/Out_Of_The_Box'} class={"nav-link_sugestions "}>Out Of The Box</Link></div>
                                <div class="link_sugestions"> <div class="dot" /> <Link to={'/Comunity_Impact'} class={"nav-link_sugestions "}>Community Impact</Link></div>
                                <div class="link_sugestions"> <div class="dot" /> <Link to={'/Heart_for_Clean_Water_Project'} class={"nav-link_sugestions "}>Heart for Clean Water Project</Link></div>
                                <div class="link_sugestions"> <div class="dot" /> <Link to={'/Womens_Wellness_Clinic'} class={"nav-link_sugestions "}>Women's Wellness Clinic</Link></div>
                            </div>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default Nav