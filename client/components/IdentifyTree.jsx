import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class IdentifyTree extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Link to="/about " className="landing-link">
                        <button className="welcome-button btn btn-primary">
                            Photo Identify
                        </button>
                    </Link>
                    <Link to="/explore " className="landing-link">
                        <button className="welcome-button btn btn-primary">
                            Dichotomous Key
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
