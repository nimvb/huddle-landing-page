import logo from './illustration-mockups.svg';
import './index.css';

import React, {Component} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

class App extends Component {
    render() {
        return (
            <div className="grid-page">

                <div className="grid-page-column text-white">

                    <div className="grid-page-content">
                        <div className="grid-page-content-column page-content-container">
                            <Header></Header>
                            <Content></Content>
                        </div>
                        <Footer></Footer>
                    </div>


                </div>

            </div>
        );
    }
}

export default App;
