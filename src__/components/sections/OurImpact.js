import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OurImpact extends Component {

    render() {
        return (
            <section class="OurMission_home">
                <hr />
                <div className='roj-OurMission_home-col'>
                    <img src='assets/img/210359805_197443675659069_4710153733879046348_n.jpg' className='roj-OurMission_home-img-bg' />
                    <div className='OurMission_home_cover'></div>
                    <div class="d-flex flex-column align-items-center align-items-sm-start roj-OurMission_home-col_">
                        <h2 style={{color: "white"}}>OUR IMPACT</h2>
                        {/* <h1>ROSE OF JERICHO COMMUNITY DEVELOPMENT CENTER</h1> */}
                        <hr />
                        <p>ROJCD is committed to delivering sustainable economic growth and poverty reduction within the local communities we serve. We have completed the first phase of 7 phases of our 5 year launch plan. We Served over 1000 women and children through our community feeding initiative. We served over 400 adults during our medical mission’s initiative.</p>
                        <Link to={'/Comunity_Impact'} className='roj-testimonials-link'>Read More</Link>
                    </div>
                </div>
                <div className='OurMission_home_hr'></div>
            </section>
        )
    }
}

export default OurImpact