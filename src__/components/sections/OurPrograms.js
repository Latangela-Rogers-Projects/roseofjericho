import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OurPrograms extends Component {

    render() {
        return (
            <section class="OurMission_home">
                <hr />
                <div className='roj-OurMission_home-col'>
                    <img src='assets/img/210332277_3612565248969229_2735237555521414950_n.jpg' className='roj-OurMission_home-img-bg' />
                    <div className='OurMission_home_cover'></div>
                    <div class="d-flex flex-column align-items-center align-items-sm-start roj-OurMission_home-col_">
                        <h2 style={{color: "white"}}>OUR PROGRAMS</h2>
                        {/* <h1>ROSE OF JERICHO COMMUNITY DEVELOPMENT CENTER</h1> */}
                        <hr />
                        <p>Rose of Jericho Community Development (ROJCD) has a social responsibility to provide services that promote community engagement and revitalization through economic development, life skills training and development, mental health</p>
                        <Link to={'/OurPrograms&Services'} className='roj-testimonials-link'>Read More</Link>
                    </div>
                </div>
                <div className='OurMission_home_hr'></div>
            </section>
        )
    }
}

export default OurPrograms