import React, { Component } from 'react';
import HeartforCleanWaterProject_ from '../sections/HeartforCleanWaterProject_';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';

class HeartforCleanWaterProject extends Component {
	componentDidMount() {
        window.scrollTo(0, 0)
      }

	render() {
		return (
			<div>
				<Nav parent="OurPrograms&Services" subParent="Heart for Clean Water Project"/>
				<PageTitle title="Heart for Clean Water Project" />
				<HeartforCleanWaterProject_ />
				<Footer />
			</div>
		)
	}
}

export default HeartforCleanWaterProject