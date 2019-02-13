import React from 'react';

class Header extends React.Component{
    render() {
        return(
            <React.Fragment>
                <header >
                    <div className="collapse bg-dark" id="navbarHeader">
                        <div>
                            <div className="row">
                                <div className="col-sm-8 col-md-7 py-4">
                                    <h4 >About</h4>
                                    <p >Add some information about the album below, the author, or
                                        any other background context. Make it a few sentences long so folks can pick up
                                        some informative tidbits. Then, link them off to some social networking sites or
                                        contact information.</p>
                                </div>

                                <div className="col-sm-4 offset-md-1 py-4">
                                    <h4 >Contact</h4>
                                    <ul className="list-unstyled">
                                        <li><a >Follow on Twitter</a></li>
                                        <li><a >Like on Facebook</a></li>
                                        <li><a >Email me</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar navbar-dark  bg-warning shadow-sm">
                        <div className="container d-flex justify-content-between">
                            <a className="navbar-brand d-flex align-items-center">
                                <svg width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" className="mr-2">
                                </svg>
                                <strong>WONDER SHOP</strong>
                            </a>

                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;