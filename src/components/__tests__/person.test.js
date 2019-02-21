import React from 'react';
import {shallow} from 'enzyme';

import Person from '../main/person-card/Person';

describe('Person component', () => {

    it('should render correctly with specific props', () => {
        //Arrange
        const jopi = {
            "_id": "5c20f8aa7960361f6ecb3ed6",
            "index": 1,
            "greeting": "Hello, Jopi! You have 10 unread messages.",
            "favoriteFruit": "strawberry",
            "name": "Jopi Piqueras",
            "address": "Smin Streen 78373",
            "picture": "https://api.adorable.io/avatars/66/lacynguyen@nutralab.com"
        };
        const handleCheckboxChange = () => {
        };

        //Act
        const personWrapper = shallow(<Person person={jopi}
                                              key={jopi._id}
                                              handleCheckboxChange={handleCheckboxChange}/>);

        //Assert
        expect(personWrapper).toMatchSnapshot();
    });

    it('should render a person card containing the model information', () => {
        //Arrange
        const jopi = {
            "_id": "5c20f8aa7960361f6ecb3ed6",
            "index": 1,
            "greeting": "Hello, Jopi! You have 10 unread messages.",
            "favoriteFruit": "strawberry",
            "name": "Jopi Piqueras",
            "address": "Smin Streen 78373",
            "picture": "https://api.adorable.io/avatars/66/lacynguyen@nutralab.com"
        };
        const handleCheckboxChange = () => {
        };

        //Act
        const personWrapper = shallow(<Person person={jopi}
                                        key={jopi._id}
                                        handleCheckboxChange={handleCheckboxChange}/>);

        //Assert
        expect(personWrapper.find('h4')).toHaveLength(1);
        expect(personWrapper.find('h4').text()).toBe("Jopi Piqueras");
        expect(personWrapper.find('p').text()).toBe("Smin Streen 78373");
        expect(personWrapper.find('img')).toHaveLength(1);
        expect(personWrapper.find('img').prop("src")).toBe("https://api.adorable.io/avatars/66/lacynguyen@nutralab.com");
    });
});