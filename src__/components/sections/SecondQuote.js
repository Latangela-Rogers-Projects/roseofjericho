import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SecondQuote extends Component {

    render() {
        return (
            <section class="SecondQuote">
                <img src='assets/img/leadership.png' className='SecondQuote_body_bg_img' />
                <div className='slash1'></div>
                <div className='slash2'></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 class="fw-bold" style={{ color: "white" }}><strong>Become A Volunteer</strong></h2>
                            <p style={{ color: "white" }}>Our volunteers share the vision and values of the communities we serve. As a team we’re driven by the idea that the best work is born from diligence, collaboration, social engagement.&nbsp;</p>
                        </div>
                    </div>
                    <div class="SecondQuote_body">
                        <div class="SecondQuote_body_col">
                            <img src='assets/img/vol.png' className='SecondQuote_body_col_img' />
                        </div>
                        <div class="SecondQuote_body_col">
                            <img src='assets/img/Missiontripphoto.jpg' className='SecondQuote_body_col_img' />
                        </div>
                        <div class="SecondQuote_body_col">
                            <img src='assets/img/CommunityFeeding.jpg' className='SecondQuote_body_col_img' />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            <Link to={'/Our_Team'} className='SecondQuote_a'>JOIN OUR TEAM</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SecondQuote