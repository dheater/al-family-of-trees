import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class IdentifyTree extends Component {
    render() {
        return (
            <div className="welcome-buttons">
                <div className="row">
                    <Link to="/about " className="landing-link">
                        <button className="welcome-button btn btn-primary">
                            Photo Identify
                        </button>
                    </Link>
                    <Link to="/explore " className="landing-link">
                        <button className="welcome-button btn btn-primary">
                            Identify with Dichotomous Key
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
