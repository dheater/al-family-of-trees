import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class LandingPage extends Component {
    render() {
        return (
<div>
            <div className="container">
<div class="image">
        <img src="images/app_mascot.svg"></img>
      </div>
<div class="bubble">
    <p>"Hi, I'm Sticky!"</p>
    <p>"I'll be your guide today. What's next on our journey?"</p>
</div>
            </div>
            <div className="welcome-buttons">
                <div className="row">
                    <a href="https://forestry.alabama.gov/Pages/Management/Champion_Tree_Nomination.aspx">
                        <button className="welcome-button btn btn-primary">
                            Nominate a Champ
                        </button>
                    </a>
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
            </div>
        );
    }
}
