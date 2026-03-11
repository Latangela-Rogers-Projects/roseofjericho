import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';

const styles = {
    col: {
        padding: 5, position: "relative"
    },
    col_: {
        backgroundColor: "rgba(255,255,255,0.3)", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", padding: 20
    },
    col_h1: { fontWeight: "bolder", fontSize: 25, textAlign: "center" },
    col_p: { marginBottom: 0, paddingBottom: 0 },
    col_a: { fontSize: 50, color: "tomato", marginTop: 0, paddingTop: 0, margin: 10, cursor: "pointer" }
}

class PopUp extends Component {
    constructor() {
        super();
        this.state = {
            activeSlide: 0,
            gotoLink: false
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ activeSlide: 1 })
        }, 5500);
    }


    goToAds = () => {
        const { popUpState, setPopUpState } = this.props.state;
        setPopUpState("opened")
        setTimeout(() => {
            this.setState({ gotoLink: true })
        }, 400);
    };

    manualClose = () => {
        this.setState({ activeSlide: 0 })
    }

    render() {
        const { activeSlide, gotoLink } = this.state;
        const { state } = this.props;
        const { popUpState, setPopUpState } = state;
        const popUpClass_ = popUpState === "opened" ? "popUp-inActive" : "popUp-active";
        const popUpClass = activeSlide === 1 ? popUpClass_ : ""
        return (
            <div className={'popUp ' + popUpClass}>
                {gotoLink && (
                    <Navigate to="/Womens_Wellness_Clinic" />
                )}
                <div onClick={() => { this.goToAds() }} style={{ cursor: "pointer" }}>
                    <img src='assets/img/WELLNESS_WOMEN.jpg' style={{ width: "100%" }} />
                    <h1>the Women's center building project</h1>
                    <p>
                        The Rose of Jericho Wellness Center will be a safe place for women to receive first in class care and treatment.
                    </p>
                    <div className='popUpLine'><div className='popUpLine_'></div></div>
                    <p style={{ fontSize: "small", backgroundColor: "rgba(255,255,255,0.1)" }}>read more</p>
                </div>
                <i class="fas fa-times-circle" onClick={() => {this.manualClose()}}></i>
                <div style={{ position: "absolute", top: 50, right: 10, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 100, padding: 1, height: 30, width: 30, display: "flex", justifyContent: "center", alignItems: 'center' }}>
                    <i class="far fa-question-circle" style={{ color: "rgba(74, 131, 255, 1)", cursor: "pointer", position: "relative", top: 0, left: 0, fontSize: 10 }}></i>
                </div>
            </div>
        )
    }
}

export default PopUp