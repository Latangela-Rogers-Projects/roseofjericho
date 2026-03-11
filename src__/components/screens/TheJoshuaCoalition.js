import React, { Component } from 'react';
import CommunityAction from '../sections/CommunityAction';
import TheJoshuaCoalition_ from '../sections/TheJoshuaCoalition_';
import Footer from '../statics/footer';
import Nav from '../statics/nav';
import PageTitle from '../statics/PageTitle';


class TheJoshuaCoalition extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Nav parent="tjpActive"/>
                <PageTitle title="The Joshua Project Coalition" />
                <TheJoshuaCoalition_ />
                <Footer />
            </div>
        )
    }
}

export default TheJoshuaCoalition