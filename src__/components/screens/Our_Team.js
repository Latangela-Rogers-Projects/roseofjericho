import React, { Component } from 'react';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';
import About_3 from '../sections/About_3';
import Our_Community_Partners_Sponsors from '../sections/Our_CommunityPartners_Sponsors';

class Our_Team extends Component {
	componentDidMount() {
        window.scrollTo(0, 0)
      }

	render() {
		return (
			<div>
				<Nav parent="aboutUs" subParent="Our Team"/>
				<PageTitle title="Our Team"/>
				<About_3 />
				<Our_Community_Partners_Sponsors />
				<Footer />
			</div>
		)
	}
}

export default Our_Team