import React, { Component } from 'react';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';
import About_2 from '../sections/About_2';

class Mission_Vission extends Component {
	componentDidMount() {
        window.scrollTo(0, 0)
      }

	render() {
		return (
			<div>
				<Nav parent="aboutUs" subParent="Mission & Vision"/>
				<PageTitle title="Mission & Vision"/>
				<About_2 />
				<Footer />
			</div>
		)
	}
}

export default Mission_Vission