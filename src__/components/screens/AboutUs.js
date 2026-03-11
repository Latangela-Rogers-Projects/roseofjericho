import React, { Component } from 'react';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';
import About_1 from '../sections/About_1';

class AboutUs extends Component {
	componentDidMount() {
        window.scrollTo(0, 0)
      }

	render() {
		return (
			<div>
				<Nav parent="aboutUs" />
				<PageTitle title="About Us"/>
				<About_1 />
				<Footer />
			</div>
		)
	}
}

export default AboutUs