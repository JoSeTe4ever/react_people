import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    static defaultProps = {}

    render() {
        return (
            <footer>
                <h3 className="app-footer">This is my footer element</h3>
            </footer>
        );
    }
}

export default Footer;