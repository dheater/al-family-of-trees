import React, {Component} from 'react';

export class LandingPage extends Component {
    render() {
        return (
            <div className="welcome-buttons">
                <div className="row">
                    <button onClick={() => console.log('clicked')}
                            className="welcome-button btn btn-primary">
                        Scan a Champ
                    </button>
                    <button onClick={() => console.log('clicked')}
                            className="welcome-button btn btn-primary">
                        My Collection
                    </button>
                </div>
                <div className="row">
                    <button onClick={() => console.log('clicked')}
                            className="welcome-button btn btn-primary">
                        Explore
                    </button>
                    <button onClick={() => console.log('clicked')}
                            className="welcome-button btn btn-primary">
                        Identify a Tree
                    </button>
                </div>
            </div>
        );
    }
}
