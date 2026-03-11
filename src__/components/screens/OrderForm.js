import React, { Component } from 'react';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';
import Our_Community_Partners_Sponsors from '../sections/Our_CommunityPartners_Sponsors';
import CheckOut from '../sections/CheckOut';

class OrderForm extends Component {
	componentDidMount() {
        window.scrollTo(0, 0)
      }

	render() {
		return (
			<div>
				<Nav parent="Packages" />
				{/* <PageTitle title="Packages"/> */}
				<CheckOut />
				<Footer />
			</div>
		)
	}
}

export default OrderForm