import React from 'react';
import {shallow} from '../../enzyme';

import Person from '../main/person-card/Person';

describe('Person component', () => {

    it('should render a person card containing the model information', () => {
        //Arrange
        const jopi = {
            "_id": "5c20f8aa7960361f6ecb3ed6",
            "index": 1,
            "greeting": "Hello, Jopi! You have 10 unread messages.",
            "favoriteFruit": "strawberry"
        };
        const handleCheckboxChange = () => {
        };

        //Act
        const wrapper = shallow(<Person person={jopi}
                                        key={jopi._id}
                                        handleCheckboxChange={handleCheckboxChange}/>);

        //Assert
    });
});