import React, { Component } from 'react';
import CommunityAction from '../sections/CommunityAction';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';

class ComunityImpact extends Component {
	componentDidMount() {
        window.scrollTo(0, 0)
      }

	render() {
		return (
			<div>
				<Nav parent="OurPrograms&Services" subParent="Community Impact"/>
				<PageTitle title="Community Impact"/>
				<CommunityAction />
				<Footer />
			</div>
		)
	}
}

export default ComunityImpact