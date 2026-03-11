import React, { Component } from 'react';
import '../App.css';
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Redirect
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Screens/HomePage';
import AboutMe from './Screens/AboutMe';
import ExecutiveTourism from './Screens/ExecutiveTourism';
import ThePathwayToGhana from './Screens/ThePathwayToGhana';
import BookTravel from './Screens/BookTravel';
import AdvisorBenefits from './Screens/AdvisorBenefits';
import Blog from './Screens/Blog';
import Blogs from './Screens/Blogs';
import StartupPage from './Screens/StartupPage';
import Contact from './Screens/Contact';
import Blogs_ from './Screens/Blogs_';



class App_ extends Component {
    constructor() {
        super();
        this.state = {
            adsClosedByUser: false,
            currentAdAnimProgress: 0,
            newsletterClosedByUser: true,
            currentAdAnimProgress: 0,
            showWriteEmail: false,
            subscribed: false,
        }
    }

    closeAds = () => {
        this.setState({ adsClosedByUser: true });
    }
    NewsLetter_close = () => {
        this.setState({ newsletterClosedByUser: true });
    }
    NewsLetter_open = () => {
        this.setState({ newsletterClosedByUser: false });
    }
    emailToggle = () => {
        const { showWriteEmail } = this.state
        this.setState({ showWriteEmail: !showWriteEmail });
    }
    update_currentAdAnimProgress = () => {
        const { currentAdAnimProgress } = this.state;
        const newProgress = currentAdAnimProgress >= 7 ? 0 : currentAdAnimProgress + 1;
        this.setState({ currentAdAnimProgress: newProgress })
    }

    render() {
        const fn = {
            closeAds: this.closeAds, up_CAAP: this.update_currentAdAnimProgress,
            NewsLetter_close: this.NewsLetter_close, NewsLetter_open: this.NewsLetter_open,
            emailToggle: this.emailToggle
        }
        const ParentProps = { fn: fn, state: this.state, userData: this.props.userData }
        return (
            <>
                <Router>
                    {/* <Switch>
                        <Route exact path="/" >
                            <HomePage />
                        </Route>
                        <Redirect from='*' to='/finishSetingAccount' />
                    </Switch> */}

                    <Routes>
                        <Route exact path="/" element={<HomePage ParentProps={ParentProps} />} />
                        <Route exact path="/Home" element={<HomePage ParentProps={ParentProps} />} />
                        <Route exact path="/AboutMe" element={<AboutMe ParentProps={ParentProps} />} />
                        <Route exact path="/ExecutiveTourism" element={<ExecutiveTourism ParentProps={ParentProps} />} />
                        <Route exact path="/ThePathwayToGhana" element={<ThePathwayToGhana ParentProps={ParentProps} />} />
                        <Route exact path="/BookTravel" element={<BookTravel ParentProps={ParentProps} />} />
                        <Route exact path="/AdvisorBenefits" element={<AdvisorBenefits ParentProps={ParentProps} />} />
                        <Route exact path="/Blogs/:id" element={<Blogs ParentProps={ParentProps} />} />
                        <Route exact path="/Blogs" element={<Blogs ParentProps={ParentProps} noFilter={true}/>} />
                        <Route exact path="/blog/:id" element={<Blog ParentProps={ParentProps} />} />
                        <Route exact path="/Blogs_/:id" element={<Blogs_ ParentProps={ParentProps} />} />
                        <Route exact path="/Contact" element={<Contact ParentProps={ParentProps} />} />
                        <Route path="*" element={<HomePage ParentProps={ParentProps} />} />
                        {/* <Route exact path="/login" element={<Login />} />
                        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                        <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </Router>

            </>
        )
    }
}

export default App_;
