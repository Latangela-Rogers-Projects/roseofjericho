import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

class TripPackages extends Component {
    constructor() {
        super();
        this.state = {
            // activeSlide: 1
        }
    }

    render() {
        const windowsInnerWidth = window.innerWidth
        const windowsInnerHeight = window.innerHeight
        return (
            <div style={{ width: "100%", overflowX: "hidden" }}>
                <section style={{ overflow: "hidden", position: "relative", top: -30, }}>
                    <img style={{ height: windowsInnerWidth > 720 ? windowsInnerHeight * 0.8 : windowsInnerHeight * 0.4, width: "100%", objectFit: "cover" }} src='assets/img/kingdomlivingwebsitecontent/fajp.jpg' />
                    <div class='tp_head_box'>
                        <div class="tp_head_box_hr"></div>
                        <div class='tp_head_box_div'>
                            <h4>October 11-18, 2023</h4>
                            <h1>Ghana 2023Trip</h1>
                            <h3>Accra, Kumasi, and Cape Coast</h3>
                            <Link>BOOK NOW</Link>
                        </div>
                        <div class="tp_head_box_hr"></div>
                    </div>
                </section>

                <div class="tp_head_box-after_div" style={{ overflow: "hidden", position: "relative", top: -30, backgroundColor: "white" }}>
                    <div class='tp_head_box_div' style={{ padding: 10, height: "100%" }}>
                        <div style={{ width: "100%", height: 10, backgroundColor: "rgba(179, 19, 16, 0.4)", marginBottom: 10 }}></div>
                        <h4>October 11-18, 2023</h4>
                        <h1 style={{ fontSize: 50 }}>Ghana 2023Trip</h1>
                        <h3>Accra, Kumasi, and Cape Coast</h3>
                        <Link>BOOK NOW</Link>
                        <div class="tp_head_box_hr"></div>
                    </div>
                </div>

                <div style={{ width: "100%", padding: 20, paddingLeft: "10vw", paddingRight: "10vw", backgroundColor: "white", position: "relative", top: -15, }}>
                    <h3 style={{ textAlign: "center", fontFamily: "Gill Sans MT", fontWeight: "bold" }}>Join us on our majestic black history experience tour</h3>
                    <p style={{ textAlign: "center", fontFamily: "Gill Sans" }}>
                        Come and experience the finer side of life- as we welcome you home to the Motherland.
                        This majestic tour will fill up with the culture and heritage of Ghanaians. The rich
                        history will astound you as we journey through the past, present, and the future of Ghana.
                    </p>
                </div>

                <div class="row">
                    <div class='col-md-6' style={{ padding: windowsInnerWidth > 750 ? "3vw" : 0 }}>
                        <img style={{ height: 300, width: "100%", objectFit: "cover" }} src='assets/img/kingdomlivingwebsitecontent/wp2010981.jpg' />
                    </div>
                    <div class='col-md-6' style={{ padding: windowsInnerWidth > 750 ? "0vw" : "10vw", paddingTop: windowsInnerWidth > 750 ? "3vw" : "10vw", }}>
                        <h1 style={{ fontFamily: "cursive", fontWeight: "bold" }}>Trip Higlights</h1>
                        <div style={{ width: "40%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 10, marginTop: 20 }}></div>
                        <ul style={{ fontFamily: "Gill Sans" }}>
                            <li>Red & Gold "AKWAABA" dinner party & cultural performance</li>
                            <li>Tropical Ghanaian Night Life</li>
                            <li>The Door of No Return</li>
                            <li>African Naming Ceremony - Receive your African Name</li>
                            <li>Explore the Ashanti Kingdom</li>
                            <li>ATVing on the Beach</li>
                        </ul>
                        <div style={{ width: "20%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 10, marginTop: 20 }}></div>
                    </div>
                </div>

                <div class='tp_absolute_image_holder'></div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20 }}>
                    <h1 style={{ fontFamily: "cursive", fontWeight: "bold" }}>FULL PACKAGE INCLUDES:</h1>
                    <div style={{ width: "40%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 0, marginTop: 0 }}></div>

                    <div class="row" style={{ paddingLeft: windowsInnerWidth > 750 ? "10vw" : "0vw", width: "100%" }}>
                        <div class='col-md-6' style={{ padding: windowsInnerWidth > 750 ? "0vw" : "10vw", paddingTop: windowsInnerWidth > 750 ? "3vw" : "10vw", paddingBottom: windowsInnerWidth > 750 ? "0vw" : "0vw", }}>
                            <ul style={{ fontFamily: "Gill Sans" }}>
                                <li class="package_list"><i class="fas fa-check"></i> Roundtrip, economy class flight from New York to Accra</li>
                                <li class="package_list"><i class="fas fa-check"></i> 9 nights accommodations at the follow hotels or similar: <br />
                                    <span style={{ paddingLeft: 30, fontSize: "smaller" }}>5 Nights at Alisa Hotel</span> <br />
                                    <span style={{ paddingLeft: 30, fontSize: "smaller" }}>2 Nights at Ridge Royal Hotel Cape Coast</span>
                                </li>
                                <li class="package_list"><i class="fas fa-check"></i> Red and Gold "AWAABA" Dinner Party & Cultural Performance</li>
                                <li class="package_list"><i class="fas fa-check"></i> Kumasi Cultural Center</li>
                                <li class="package_list"><i class="fas fa-check"></i> Visit Ntonso, a craft village</li>
                                <li class="package_list"><i class="fas fa-check"></i> Visit the Ashanti Kingdom</li>
                                <li class="package_list"><i class="fas fa-check"></i> Cape Coast Castle</li>
                                <li class="package_list"><i class="fas fa-check"></i> The Door of No Return</li>
                            </ul>
                        </div>
                        <div class='col-md-6' style={{ padding: windowsInnerWidth > 750 ? "0vw" : "10vw", paddingTop: windowsInnerWidth > 750 ? "3vw" : "0vw", paddingBottom: windowsInnerWidth > 750 ? "0vw" : "0vw" }}>
                            <ul style={{ fontFamily: "Gill Sans", marginTop: 0, paddingTop: 0 }}>
                                <li style={{ marginTop: 0, paddingTop: 0 }} class="package_list"><i class="fas fa-check"></i> Kakum National Park</li>
                                <li class="package_list"><i class="fas fa-check"></i> Elmina Castle</li>
                                <li class="package_list"><i class="fas fa-check"></i> African Naming Ceremony</li>
                                <li class="package_list"><i class="fas fa-check"></i> Contemporary Art and Design Tour</li>
                                <li class="package_list"><i class="fas fa-check"></i> Walking Tour through Elmina township</li>
                                <li class="package_list"><i class="fas fa-check"></i> Farewell Dinner</li>
                                <li class="package_list"><i class="fas fa-check"></i> All Entrance Fees</li>
                                <li class="package_list"><i class="fas fa-check"></i> All Ground Transportation</li>
                            </ul>
                            <div style={{ width: "20%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 0, marginTop: 20 }}></div>
                        </div>
                    </div>

                    <Link class="tp_a" style={{ margin: 10 }}>
                        Book Trip Now
                    </Link>
                </div>

                <div class='tp_absolute_image_holder' style={{ marginTop: 20 }}></div>

                <div class="acm_heading">
                    <h1 style={{ textAlign: "center", fontFamily: "Gill Sans MT", fontWeight: "bold", textTransform: "uppercase" }}>accommodations details</h1>
                </div>

                <div class="acm_body row">
                    <h1 style={{ textAlign: "center", fontFamily: "Gill Sans MT", fontWeight: "bold", textTransform: "capitalise" }}>Alisa Hotels</h1>
                    <div style={{ width: "20%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 40, marginTop: 10 }}></div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="acm_card" style={{ height: 400 }}>
                                <img src='assets/img/kingdomlivingwebsitecontent/Alisa_North_Ridge_11.jpg' />
                                <div class="acm_card_div"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="acm_card" style={{ height: 400 }}>
                                <img src='assets/img/kingdomlivingwebsitecontent/Alisa-Hotel-North-Ridge-10.jpg' />
                                <div class="acm_card_div"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="acm_card">
                                <img src='assets/img/kingdomlivingwebsitecontent/Alisa_Hotel_Tema.jpg' />
                                <div class="acm_card_div"></div>
                            </div>
                            <div class="acm_card">
                                <img src='assets/img/kingdomlivingwebsitecontent/Alisa_North_Ridge_12.jpg' />
                                <div class="acm_card_div"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="acm_textcard">
                                <p>
                                    Akwaaba to Ghana's prestigious Indigenous Hotels group- Alisa Hotels. The group comprises Alisa Hotel North Ridge and Alisa Hotel Tema.
                                    Hoteliers since 1999, Alisa Hotels has proven to be a trusted brand offering maximum comfort at each of our uniquely designed locations.
                                </p>
                                <p>
                                    With over 300 rooms, the hotels offer luxury accommodation with stylish conference and banquet halls plus unique food and beverage outlets
                                    to satisfy all palettes.
                                </p>
                                <p>
                                    Alisa Hoteles always ensures that the expectations of our esteemed guests are exceeded with our consistent upgrades
                                    and intuitive services in all our outlets. At Alisa Hotels, we strive for excellence and offer world-class services to our cherished guests.
                                </p>
                                <p>
                                    We guarantee more than just a hotel experience, but a warm home from home reception. Alisa Hotels, "Our Akwaaba means more than just welcome"
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "20%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 10, marginTop: 40 }}></div>


                    <div style={{ width: "20%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 40, marginTop: 10 }}></div>
                </div>

                <div class="acm_body row">
                    <h1 style={{ textAlign: "center", fontFamily: "Gill Sans MT", fontWeight: "bold", textTransform: "capitalise" }}>Ridge Royal Hotel- Cape Coast</h1>
                    <div style={{ width: "20%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 40, marginTop: 10 }}></div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="acm_card">
                                <img src='assets/img/kingdomlivingwebsitecontent/Ridge-Royal-Hotel-5.jpg' />
                                <div class="acm_card_div"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="acm_textcard" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                <p>
                                    Moving from the ordinary, you get to live like Royalty. Ridge Royal Hotel takes you to
                                    the ridge of comfort and luxury in the best style possible.
                                </p>
                                <p>
                                    Situated in the historic City of Cape Coast, Ghana. The Hotel boasts of a picturesque landscape in a serene environment.
                                    Richly liviting, comfortably yours.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="acm_card">
                                <img src='assets/img/kingdomlivingwebsitecontent/Ridge_Royal_Hotel_4.jpg' style={{ objectFit: "cover" }} />
                                <div class="acm_card_div"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="acm_card">
                                <img src='assets/img/kingdomlivingwebsitecontent/Ridge_Royal_Hotel_6.jpg' style={{ objectFit: "cover" }} />
                                <div class="acm_card_div"></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: "20%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 40, marginTop: 10 }}></div>
                </div>

                <div class="rtn">
                    <div class="rtn_container">
                        <h4>Reserve Your Trip Now</h4>
                        <h1>Book your spot</h1>
                        <div class="pck_container">
                            <div class="pck_">
                                <h3>Full Package- Includes Flight from New York</h3>
                                <div class="cool_hr" style={{ marginTop: 10, marginBottom: 20, backgroundColor: "rgb(21, 16, 179)" }}></div>
                                <p>Single:$5539 per person</p>
                                <p>Double: $4903 person</p>
                                <Link to="/OrderForm">BOOK NOW</Link>
                            </div>
                            <div class="pck_">
                                <h3>Land Only- No Flight From New York</h3>
                                <div class="cool_hr" style={{ marginTop: 10, marginBottom: 20, backgroundColor: "rgb(21, 16, 179)" }}></div>
                                <p>Single: $5039 per person</p>
                                <p>Double: $4025 person</p>
                                <Link to="/OrderForm">BOOK NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 70 }}>
                    <h1 style={{ fontFamily: "Gill Sans MT", fontWeight: "bold", textTransform: "uppercase" }}>Additional Information</h1>

                    <div class="row" style={{ padding: "6vw", width: "100%", paddingTop: 0, paddingBottom: 0 }}>
                        <div class='col-md-6' style={{ padding: "2vw", paddingTop: windowsInnerWidth > 750 ? "3vw" : "2vw", paddingBottom: windowsInnerWidth > 750 ? "0vw" : "0vw", }}>
                            <h5 style={{ fontFamily: "Gill Sans MT", fontWeight: "bold", textTransform: "uppercase" }}>WHAT’S NOT INCLUDED:</h5>
                            <ul style={{ fontFamily: "Gill Sans" }}>
                                <li class="">Gratuities for Driver and Tour Guide</li>
                                <li class="">Spa treatments or spa packages not listed</li>
                                <li class="">Travel Insurance</li>
                                <li class="">Gratuities for Tour Guide (suggested $10-$20 per day)</li>
                                <li class="">Gratuities for Driver (suggested $5-$10 per day)</li>
                                <li class="">Gratuities for Waiters/waitress (suggested $2 per person)</li>
                                <li class="">Items of a personal nature</li>
                                <li class="">Meals except where noted</li>
                                <li class="">Beverage during meals</li>
                                <li class="">Additional excursion offered by tour guide</li>
                            </ul>

                            <h5 style={{ fontFamily: "Gill Sans MT", fontWeight: "bold", textTransform: "uppercase" }}>WHAT’S NOT INCLUDED:</h5>
                            <ul style={{ fontFamily: "Gill Sans" }}>
                                <li class="">
                                    Missing a vacation is bad enough. Losing the money you paid for your vacation is even worse. Trip
                                    insurance is therefore recommended. You can purchase travel insurance on your own.
                                    <ul>
                                        <li class=""><a style={{ color: "#0158CC" }} href='http://www.dpbolvw.net/click-9018181-10583388?fbclid=IwAR2zRn9hoiE8lohb_iTkLB6iOQZadnG_aA4WFfXu8RzQEh_Xy2aJJ2cgdic'>Travel Guard</a></li>
                                        <li class=""><a style={{ color: "#0158CC" }} href='https://www.allianztravelinsurance.com/'>Allianz</a></li>
                                        <li class=""><a style={{ color: "#0158CC" }} href='http://www.kqzyfj.com/click-9018181-13165240?fbclid=IwAR0ntVeNE0DNs2JjhZYni3GE2p-tFZiMviXAPeRewDzRU19LDsxe9YpaDoc'>TravelEx</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <h5 style={{ fontFamily: "Gill Sans MT", fontWeight: "bold", textTransform: "uppercase" }}>TRAVEL NOTES:</h5>
                            <ul style={{ fontFamily: "Gill Sans" }}>
                                <li class="">
                                    Traveling abroad requires a passport valid for six months beyond travel dates. Check your
                                    passport to ensure your passport is valid for this tour.
                                </li>
                            </ul>
                        </div>

                        <div class='col-md-6' style={{ padding: "2vw", paddingTop: windowsInnerWidth > 750 ? "3vw" : "0vw", paddingBottom: windowsInnerWidth > 750 ? "0vw" : "0vw" }}>
                            <ul style={{ fontFamily: "Gill Sans" }}>
                                <li class="">
                                    All prices are based on the rates of exchange in effect at the time of price quotation. In
                                    the event that the US dollar devalues, Kingdom Living Travel & Tours and Dating African
                                    reserves the right to increase prices accordingly. Your final invoice will reflect
                                    increases resulting from currency devaluation.
                                </li>
                                <li class="">
                                    Roommate Matching is offered for this tour. If you want to be matched, please enter
                                    “Roommate Requested” on the reservation form where it asks for your roommate name.
                                    Also, please note roommate matching does not take place until after 75% of the cost
                                    of the package is paid.
                                </li>
                                <li class="">
                                    Full Itinerary will be emailed to you 60 Days in advance to plan your free time.
                                </li>
                            </ul>

                            <h5 style={{ fontFamily: "Gill Sans MT", fontWeight: "bold", textTransform: "uppercase" }}>AUTOMATIC BILLING PLAN:</h5>
                            <p style={{ fontFamily: "Gill Sans" }}>
                                You can enroll in our automatic billing and relax knowing that your future payments will be
                                made automatically. When you book, we’ll calculate an evenly divided automatic billing plan
                                for you, and you will know in advance the day of every month that your payment will be processed.
                                Your initial deposit is due at the time of booking, and your future payments will be charged
                                according to the schedule you see on your invoice. Automatic billing is available at no charge.
                            </p>
                        </div>
                    </div>

                    <div style={{ width: "40%", height: 2, backgroundColor: "rgba(179, 19, 16, 0.4)", borderRadius: 20, marginBottom: 0, marginTop: 0 }}></div>

                </div>



                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 70, fontWeight: "600" }}>
                    <h1 style={{ fontFamily: "Gill Sans MT", fontWeight: "bold", textTransform: "uppercase" }}>TERMS & POLICIES</h1>

                    <div class="row" style={{ padding: "6vw", width: "100%", paddingTop: 0, paddingBottom: 0 }}>
                        <div class='col-md-6' style={{ padding: "2vw", paddingTop: windowsInnerWidth > 750 ? "3vw" : "2vw", paddingBottom: windowsInnerWidth > 750 ? "0vw" : "0vw", }}>
                            <ul style={{ fontFamily: "Gill Sans" }}>
                                <li class="">
                                    Making reservations for this package signifies your acceptance of our Terms and Conditions.
                                </li>
                                <li class="">
                                    All payments to Kingdom Living Travel & Tours by Dating African, LLC are non-refundable and
                                    non-transferrable.  This is because Dating African d/b/a Kingdom Living Travel & Tours has
                                    contractual agreements with hotels, airlines and other vendors that will not allow us to
                                    obtain any refunds. This way we can keep our package prices low and allow you to make monthly
                                    payments on your vacation.
                                </li>
                                <li class="">
                                    Passengers are responsible for ensuring that they have the proper travel documents and MUST
                                    CHECK with the respective consulate(s) or visa agency to determine whether any visas or
                                    passports are required. Passports are required to be valid for at least 6 months after
                                    the date of travel. Some countries require a full blank “VISA” page in the passport for
                                    stamping purposes. Any information provided on travel description pertains to US citizens
                                    only. Non-US citizens should check with the respective consulate of the country(s) to be
                                    visited for current entry requirements.  Reservations must be made in your FULL NAME as
                                    it appears on your passport.
                                </li>
                                <li class="">
                                    Missing a vacation is bad enough. Losing the money you paid for your vacation is even worse;
                                    therefore, we recommend Travel Protection that helps provide coverage for Trip Cancellation,
                                    Interruption, Baggage Loss or Delay, Medial Express, and more.  Our preferred travel insurance
                                    vendors: Allianz Travel Insurance, Travel Guard, TravelEx, CSA Travel Protection, Travel Safe.
                                </li>
                            </ul>
                        </div>

                        <div class='col-md-6' style={{ padding: "2vw", paddingTop: windowsInnerWidth > 750 ? "3vw" : "0vw", paddingBottom: windowsInnerWidth > 750 ? "0vw" : "0vw" }}>
                            <ul style={{ fontFamily: "Gill Sans" }}>
                                <li class="">
                                    Seat assignments ARE at the discretion of the airline.  Seats for this group tour are only
                                    located in economy class. If you require a certain seat, we recommend booking the land only
                                    package.
                                </li>
                                <li class="">
                                    Prices are subject to change without notice. Please make your reservations today at this
                                    low price to be locked in.
                                </li>
                                <li class="">
                                    Monthly payments are required to keep your reservations current unless you make larger
                                    payments than what is required of your monthly payment plan.  Your invoice will clearly
                                    note your payment plan. We suggest you put this payment plan on your personal calendar.
                                </li>
                                <li class="">
                                    You must ensure your roommate, if applicable, is also making timely monthly payments.
                                </li>
                                <li class="">
                                    Roommate Matching is available.
                                </li>
                                <li class="">
                                    You can log-in to our client portal to view your account 24 hours a day. A link to your group
                                    page will be emailed to you after your initial deposit is paid.
                                </li>
                                <li class="">
                                    Name changes are allowed with a $200 name change fee up until the final payment date and $250
                                    after final payment date plus any vendor fees.
                                </li>
                                <li class="">
                                    Late payment of $250 per person is required after the final due date listed on your payment
                                    plan.  Late payment fees are automatically added to your reservation the day after your final
                                    due date.
                                </li>
                                <li class="">
                                    All late payment requests must be approved by management before the final payment
                                    deadline on your invoice.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default TripPackages