import React from 'react';
import './Person.css'

const Person = (props) => {
    const {person} = props;
    return (
        <div className="card">
            <img src={person.picture} alt="Avatar"/>
            <div className="container">
                <h4><b>{person.name}</b></h4>
                <p>{person.address}</p>
            </div>
        </div>
    )
};

export default Person;