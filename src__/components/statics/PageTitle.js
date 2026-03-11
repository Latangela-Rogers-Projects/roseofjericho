import React, { Component } from 'react';



class PageTitle extends Component {

    render() {
        const { title, subTitle } = this.props
        return (
            <div
                style={{
                    height: 160, width: "100%", top: -30, position: "relative", objectFit: "cover",
                    backgroundColor: "rgb(106, 80, 51)", boxShadow: "0px 0px 30px 4px rgba(0, 0, 0, 0.362)"
                }}
            >
                <img
                    src='assets/img/design11-01_generated.jpg'
                    style={{
                        height: 160, width: "100%", position: "absolute", objectFit: "cover", opacity: 0.9
                    }}
                />
                <div style={{
                    height: "100%", width: "100%", position: "relative", display: "flex",
                    justifyContent: "space-between", alignItems: "flex-end",
                    padding: 0, paddingLeft: 50,
                }}>
                    <div>
                        <h1 style={{ color: "white", fontSize: "3.5vw", fontWeight: "bolder", textTransform: "uppercase", marginBottom: 0, paddingBottom: 0 }}>{title}</h1>
                        <p style={{ color: "white", fontSize: "2vw" }}>Home <i class="fas fa-angle-double-right" style={{ fontSize: 15 }}></i>  { subTitle ? subTitle : title}</p>
                    </div>
                    {this.props.subIcon ?
                        <div>
                            <img src={this.props.subIcon} style={{height: "10vw", width: "10vw", objectFit: "cover", borderRadius: 10, marginRight: 30}}/>
                        </div>
                        :
                        null}
                </div>
            </div>
        )
    }
}

export default PageTitle;