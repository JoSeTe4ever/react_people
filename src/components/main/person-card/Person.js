import React from 'react';
import './Person.css'
import Checkbox from "@material-ui/core/Checkbox/Checkbox";

class Person extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="card">
                <img src={person.picture} alt="Avatar" className={"dynamicAvatar"}/>
                <div className="container">
                    <h4><b>{person.name}</b></h4>
                    <p>{person.address}</p>
                    <Checkbox></Checkbox>
                </div>
            </div>
        )
    }
};

export default Person;