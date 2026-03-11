import React, { Component } from 'react';

class FirstQuote extends Component {

    render() {
        return (
            <section class="FirstQuote">
                <img src='assets/img/210359805_197443675659069_4710153733879046348_n.jpg' className='FirstQuote_img' />
                <div className='FirstQuote_div_cover'></div>
                <div className='FirstQuote_div row'>
                    <div className='FirstQuote_div_ col-md-12'>
                        <div className='FirstQuote_div__'>
                            <p>
                                <span style={{ fontSize: "20px", color: "tomato" }}>“</span> Powerful and sustained change requires constant
                                communication, not only throughout the rollout but after the major elements of the plan are in place. The
                                more kinds of communication employed, the more effective they are.<span style={{ fontSize: "20px", color: "tomato" }}>”</span>
                            </p>
                            <h3>Quote Source / DeAnne Aguirre</h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FirstQuote