import React, { Component } from 'react';
import OTB_summit from '../sections/OTB_Summit';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';

class OutOfTheBox extends Component {
	componentDidMount() {
        window.scrollTo(0, 0)
      }

	render() {
		return (
			<div>
				<Nav parent="OurPrograms&Services" subParent="Out Of The Box"/>
				<PageTitle title="Out Of The Box" subIcon="assets/img/outthebox-logo2.png"/>
				<OTB_summit />
				<Footer />
			</div>
		)
	}
}

export default OutOfTheBox