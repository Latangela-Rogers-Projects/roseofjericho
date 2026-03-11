import React, { Component } from 'react';



class Head extends Component {

    render() {
        return (
            <>
                <nav class="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3 roj_navbar" id="mainNav" style="">
                    <div class="container">
                        <a class="navbar-brand d-flex align-items-center" href="/">
                            <span class="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon" style="width: 177px;border-radius: 50px;background: rgb(255,255,255);height: 69px;">
                                <img src="assets/img/rojlogo-web.png" width="125" height="51" />
                            </span>
                        </a>
                        <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
                            <span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navcol-1">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                                <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                                <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li>
                                <li class="nav-item"><a class="nav-link" href="contacts.html">Contacts</a></li>
                            </ul><a class="btn btn-primary shadow" role="button" href="signup.html">Sign up</a>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Head