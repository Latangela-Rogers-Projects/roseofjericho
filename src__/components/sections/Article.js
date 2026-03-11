import React, { Component } from 'react';

class Article extends Component {
    constructor() {
        super();
        this.state = {
            activeSlide: 1
        }
    }

    changeSlide = (slide) => {
        this.setState({ activeSlide: slide })
    }

    render() {
        const { activeSlide } = this.state
        const slideClass1 = activeSlide === 1 ? "Article_head_T_active" : "";
        const slideClass2 = activeSlide === 2 ? "Article_head_T_active" : "";
        const slideClass3 = activeSlide === 3 ? "Article_head_T_active" : "";
        return (
            <section class="Article">
                {/* <div class="elementor-background-overlay"></div> */}
                <div className='Article_head'>
                    <p className={'Article_head_T ' + slideClass1} onClick={()=>{this.changeSlide(1)}}>COMMUNITY FEEDINGS</p>
                    <p className={'Article_head_T ' + slideClass2} onClick={()=>{this.changeSlide(2)}}>LIFE SKILL TRAINING</p>
                    <p className={'Article_head_T ' + slideClass3} onClick={()=>{this.changeSlide(3)}}>COMMUNITY MENTAL HEALTH SERVICES</p>
                </div>
                <div className='Article_body'>
                    <p className='Article_body_T' style={{display: activeSlide === 1 ? "block" : "none"}}>
                        Millions of people face hunger on a daily basis. Hunger can happen to anyone, at any time.
                        Hunger increases the risk of chronic diseases. Our feeding program provides nutritious meals
                        to women and children. Our 2023 initiative is to provide fresh food to families in Temecula,
                        CA and 10,000 meals to women in children in the Western Region of Ghana.
                    </p>
                    <p className='Article_body_T' style={{display: activeSlide === 2 ? "block" : "none"}}>
                        Our life skills training program provides curriculum addressing social, psychological, cognitive,
                        and attitudinal factors associated with mental health. Our primary objective is to enhance the
                        development of basic life skills, personal competence, and skills related to resistance to
                        social influences that promote mental illnesses.
                    </p>
                    <p className='Article_body_T' style={{display: activeSlide === 3 ? "block" : "none"}}>
                        Mental health illnesses affect a large proportion of the urban population. 1 in 4 people will have
                        a mental health disorder in their lifetime, and this can occur at any age. ROJCD offers treatment
                        services from a holistic approach. Our approach of treating the whole body provides the best outcomes
                        in the recovery process. We treat the underlying issues that trigger addiction, helping to maintain
                        the balance of career, social and family life.
                    </p>
                </div>
            </section>
        )
    }
}

export default Article