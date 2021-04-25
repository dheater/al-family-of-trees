import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Explore extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Link to="/about " className="landing-link">
                        <button className="welcome-button btn btn-primary">
                            Find nearest champ
                        </button>
                    </Link>
                    <Link to="/collection " className="landing-link">
                        <button className="welcome-button btn btn-primary">
                            Learn about AL trees
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}



