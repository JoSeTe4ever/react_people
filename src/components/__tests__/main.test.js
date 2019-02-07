import React from 'react';
import {shallow} from 'enzyme';

import Main from '../main/Main';

describe('Main component', () => {

    it('should render a search bar', () => {
        //Arrange Act
        const wrapper = shallow(<Main/>);

        //Assert
        expect(wrapper.find('.container')).toBeDefined();
        expect(wrapper.find('.SearchBar')).toBeDefined();
    });

    it('should render a list of person components', () => {
        //Arrange Act
        const wrapper = shallow(<Main/>);

        //Assert
        expect(wrapper.find('.peopleDataContainer')).toBeDefined();
        expect(wrapper.find('.peopleDataContainer')).toHaveLength(2);
        expect(wrapper.find('Person')).toBeDefined();
    });

    it('should have a create person dialogue functionality', () => {
        //Arrange Act
        const wrapper = shallow(<Main/>);

        //Assert
        expect(wrapper.find('.container')).toBeDefined();
        expect(wrapper.find('.SearchBar')).toBeDefined();
        expect(wrapper.find('.CreatePersonDialogue')).toBeDefined();
    });
});