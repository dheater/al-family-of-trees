import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <img src='images/app_mascot.png' alt="sticky" className="mascot navbar-left"/>
                        <Link to="/" className="navbar-brand navbar-center" href="#">AL Family of Trees:Champion's Edition</Link>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/about" href="#">About</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


