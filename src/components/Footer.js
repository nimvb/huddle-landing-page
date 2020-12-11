import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="grid-page-content-column grid-page-footer">
                <div className="grid-page-footer-column">

                </div>
                <div className="grid-page-footer-column">
                    <div className="grid-footer-icons icons-container">
                        <div className="grid-footer-icons-column">

                        </div>
                        <div className="grid-footer-icons-column">
                            <a href="/">

                                <ion-icon name="logo-facebook"></ion-icon>

                            </a>
                            <a href="/">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href="/">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
