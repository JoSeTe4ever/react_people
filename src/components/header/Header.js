import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        let currenttime = new Date();
    };

    static defaultProps = {}

    render() {
        return (
            <header className="navbar">
                <h3>Sandbox application</h3>
            </header>
        );
    }
}

export default Header;