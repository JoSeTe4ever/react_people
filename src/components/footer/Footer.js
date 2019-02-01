import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    static defaultProps = {}

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    render() {
        return (
            <footer>
                <h3 className="app-footer">This is my footer element</h3>
            </footer>
        );
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }

    componentDidCatch(error, info) {
    }
}

export default Footer;