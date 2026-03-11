import React, { Component } from 'react';
import Women_wellnes from '../sections/Women_wellnes';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';

class WomensWellnessClinic extends Component {
	componentDidMount() {
        window.scrollTo(0, 0)
      }

	render() {
		return (
			<div>
				<Nav parent="OurPrograms&Services" subParent="Women's Wellness Clinic"/>
				<PageTitle title="Women's Wellness Clinic" subTitle="Rose of Jericho Women's Wellness Clinic"/>
				<Women_wellnes />
				<Footer />
			</div>
		)
	}
}

export default WomensWellnessClinic