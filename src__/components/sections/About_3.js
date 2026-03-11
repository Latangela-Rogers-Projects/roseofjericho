import React, { Component } from 'react';
import YouTube from 'react-youtube';

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

class About_3 extends Component {
    constructor() {
        super();
        this.state = {
            // activeSlide: 1
        }
    }

    render() {
        return (
            <section class="ArAbout_1ticle" style={{ overflow: "hidden", position: "relative" }}>
                <div className='ArAbout_1ticle_row row' style={{ overflow: "hidden", position: "relative" }}>
                    <div className='slash2' style={{ zIndex: 0, top: -200 }}></div>
                    <div className='slash2' style={{ zIndex: 0, top: -100 }}></div>

                    <h1 style={{letterSpacing: 2, textAlign: "center", fontWeight: "bolder"}}>Board of Directors</h1>

                    <div className='col-md-4' style={styles.col}>
                        <div style={styles.col_}>
                            <h1 style={styles.col_h1}>LATANGELA ROGERS, M.A.</h1>
                            <p style={styles.col_p}>FOUNDER, PRESIDENT</p>
                            <div>
                                <a style={styles.col_a}><i class="fab fa-facebook"></i></a>
                                <a style={styles.col_a}><i class="fab fa-twitter"></i></a>
                                <a style={styles.col_a}><i class="fab fa-google-plus"></i></a>
                                <a style={styles.col_a}><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4' style={styles.col}>
                        <div style={styles.col_}>
                            <h1 style={styles.col_h1}>DR. JOSEPH NUERTEY M.D.</h1>
                            <p style={styles.col_p}>VICE PRESIDENT</p>
                            <div>
                                <a style={styles.col_a}><i class="fab fa-facebook"></i></a>
                                <a style={styles.col_a}><i class="fab fa-twitter"></i></a>
                                <a style={styles.col_a}><i class="fab fa-google-plus"></i></a>
                                <a style={styles.col_a}><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4' style={styles.col}>
                        <div style={styles.col_}>
                            <h1 style={styles.col_h1}>THEODORE OWUSU, MISSIONS & TOURISM</h1>
                            <p style={styles.col_p}>SECRETARY</p>
                            <div>
                                <a style={styles.col_a}><i class="fab fa-facebook"></i></a>
                                <a style={styles.col_a}><i class="fab fa-twitter"></i></a>
                                <a style={styles.col_a}><i class="fab fa-google-plus"></i></a>
                                <a style={styles.col_a}><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4' style={styles.col}>
                        <div style={styles.col_}>
                            <h1 style={styles.col_h1}>AMISHA ASKEW, LICENSED VOCATIONAL NURSE</h1>
                            <p style={styles.col_p}>TREASURER</p>
                            <div>
                                <a style={styles.col_a}><i class="fab fa-facebook"></i></a>
                                <a style={styles.col_a}><i class="fab fa-twitter"></i></a>
                                <a style={styles.col_a}><i class="fab fa-google-plus"></i></a>
                                <a style={styles.col_a}><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4' style={styles.col}>
                        <div style={styles.col_}>
                            <h1 style={styles.col_h1}>SAM ABU, EDUCATOR, M.ED.</h1>
                            <p style={styles.col_p}>EXECUTIVE BOARD MEMBER</p>
                            <div>
                                <a style={styles.col_a}><i class="fab fa-facebook"></i></a>
                                <a style={styles.col_a}><i class="fab fa-twitter"></i></a>
                                <a style={styles.col_a}><i class="fab fa-google-plus"></i></a>
                                <a style={styles.col_a}><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4' style={styles.col}>
                        <div style={styles.col_}>
                            <h1 style={styles.col_h1}>MERCEDES MABUSE, EDUCATOR, B.A.</h1>
                            <p style={styles.col_p}>EXECUTIVE BOARD MEMBER</p>
                            <div>
                                <a style={styles.col_a}><i class="fab fa-facebook"></i></a>
                                <a style={styles.col_a}><i class="fab fa-twitter"></i></a>
                                <a style={styles.col_a}><i class="fab fa-google-plus"></i></a>
                                <a style={styles.col_a}><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default About_3