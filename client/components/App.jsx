import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LandingPage} from "./LandingPage";
import Header from "./Header";
import About from "./About";

export class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/users">
                            <Users/>
                        </Route>
                        <Route path="/">
                            <LandingPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

// function About() {
//     return <h2>About</h2>;
// }
//
function Users() {
    return <h2>Users</h2>;
}
