import React, {Component} from 'react';
import ImageList from "./TreeList";

export class App extends Component {
    render() {
        return (
            <div>
                <img src='images/app_mascot.png' alt="sticky"/>
                <h1>Welcome to AL Family of Trees: Champion's Edition!</h1>
                <p>Alabama Family of Trees: Champion's Edition is an app to help you learn about the trees you find in
                    the state of Alabama. It will even tell you about the
                    <a href="https://forestry.alabama.gov/Pages/Management/Champion_Tree.aspx">biggest and best trees
                        in the state including several national champions!</a>
                </p>
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

                <ImageList/>
            </div>
        );
    }
}
