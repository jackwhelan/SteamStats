import React, { Component } from 'react';

class NavigationComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={require('../images/logo.svg')} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                        <span className=""> Jack Whelan</span> > <span className="">Steam Stats API</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/csgo">CSGO</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationComponent;