import React, { Component } from 'react';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';
import Our_Community_Partners_Sponsors from '../sections/Our_CommunityPartners_Sponsors';
import TripPackages from '../sections/TripPackages';

class Packages extends Component {
	componentDidMount() {
        window.scrollTo(0, 0)
      }

	render() {
		return (
			<div>
				<Nav parent="Packages" />
				{/* <PageTitle title="Packages"/> */}
				<TripPackages />
				<Footer />
			</div>
		)
	}
}

export default Packages