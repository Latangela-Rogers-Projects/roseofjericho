import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OurMission extends Component {

    render() {
        return (
            <section class="OurMission_home">
            <h2>OUR MISSION</h2>
            <hr />
                <div className='roj-OurMission_home-col'>
                    <img src='assets/img/197133167_177260914345228_1852374427604276547_n-1.jpg' className='roj-OurMission_home-img-bg' />
                    <div className='OurMission_home_cover'></div>
                    <div class="d-flex flex-column align-items-center align-items-sm-start roj-OurMission_home-col_">
                            <h1>ROSE OF JERICHO COMMUNITY DEVELOPMENT CENTER</h1>
                            <hr />
                            <p>Rose of Jericho Community Development Center (ROJCD) is a recognized 501(c)3 organization. ROJCD serves as a grassroots community organization that is dedicated to being an anchor in many of the local and surrounding communities of Riverside County and Accra, Ghana. ROJCD has a social responsibility to provide services that promote community engagement and revitalization through economic development, vocational options, professional development, life skills training and development, and health and wellness education.</p>
                            <Link to={'/Mission_Vision'} className='roj-testimonials-link'>Read More</Link>
                        </div>
                </div>
                <div className='OurMission_home_hr'></div>
            </section>
        )
    }
}

export default OurMission