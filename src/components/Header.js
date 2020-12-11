import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="grid-header font-family-poppins padding-bottom-80px">
                <div className="grid-header-column font-weight-600">
                        <span className="display-inline-flex">
                            <p className="margin-0 display-flex flex-align-items-center flex-justify-content">
                                <ion-icon name="chatbox-ellipses-outline">

                                </ion-icon>
                            </p>

                            <p className="text-header margin-0 margin-left-5px display-flex">
                                Huddle
                            </p>

                        </span>


                </div>
            </div>
        );
    }
}

export default Header;
