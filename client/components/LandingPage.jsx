import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class LandingPage extends Component {
    render() {
        return (
            <div className="welcome-buttons">
                <div className="row">
                    <Link to="/nominate" className="landing-link">
                        <button className="welcome-button btn btn-primary">
                            Nominate a Champ
                        </button>
                    </Link>
                    <Link to="/collection" className="landing-link">
                        <button className="welcome-button btn btn-primary">
                            My Collection
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <Link to="/explore" className="landing-link">
                        <button className="welcome-button btn btn-primary">
                            Explore
                        </button>
                    </Link>
                    <Link to="/identify" className="landing-link">
                        <button className="welcome-button btn btn-primary">
                            Identify a Tree
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
