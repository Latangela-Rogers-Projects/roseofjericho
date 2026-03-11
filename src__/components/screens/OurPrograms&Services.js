import React, { Component } from 'react';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';
import OurProgServices_1 from '../sections/OurProgServices_1';
import OurProgServices_2 from '../sections/OurProgServices_2';

class OurPrograms_Services extends Component {
	componentDidMount() {
        window.scrollTo(0, 0)
      }

	render() {
		return (
			<div>
				<Nav parent="OurPrograms&Services" />
				<PageTitle title="Our Programs & Services"/>
				<OurProgServices_1 />
				<OurProgServices_2 />
				<Footer />
			</div>
		)
	}
}

export default OurPrograms_Services