import React from 'react';
import './Person.css'
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import PropTypes from 'prop-types';

class Person extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render(props) {
        const {person} = this.props;
        let imgSrc;
        if (!person.picture) {
            imgSrc = "https://api.adorable.io/avatars/66/asbott2@adorable.png";
        } else {
            imgSrc = person.picture;
        }
        return (
            <div className="card">
                <img src={imgSrc} alt="Avatar" className={"dynamicAvatar"}/>
                <div className="container">
                    <h4><b>{person.name}</b></h4>
                    <p>{person.address}</p>
                    <Checkbox></Checkbox>
                </div>
            </div>
        )
    }
};

const personShape = PropTypes.shape({
    "_id": PropTypes.string,
    "index": PropTypes.number,
    "guid": PropTypes.string,
    "picture": PropTypes.string,
    "age": PropTypes.number,
    "eyeColor": PropTypes.string,
    "name": PropTypes.string,
    "email": PropTypes.string,
    "address": PropTypes.string,
    "greeting": PropTypes.string,
    "favoriteFruit": PropTypes.string

});

Person.propTypes = {
    person: personShape
};


export default Person;