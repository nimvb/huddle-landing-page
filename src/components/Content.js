import React, {Component} from 'react';
import logo from "../illustration-mockups.svg";

class Content extends Component {
    render() {
        return (
            <div className="grid-content font-family-open-sans text-white text-header">

                <div className="grid-content-column">
                    <img src={logo} alt="adw" width="100%"/>
                </div>
                <div className="grid-content-column padding-left">
                    <div className="grid-content-header content-header">
                        <div className="grid-content-header-column text-header font-weight-600">
                            Build The Community Your Fans Will Love
                        </div>
                    </div>

                    <div className="grid-content-text">
                        <div className="grid-content-text-column content-text">
                            Huddle re-imagines the way we build communities. You have a voice, but so
                            does your audience. Create connectors with your users as you engage in
                            genuine discussion.
                        </div>
                    </div>

                    <div className="grid-row">
                        <div className="grid-column button-container">
                            <button className="text-purple button background-white">Register</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Content;
