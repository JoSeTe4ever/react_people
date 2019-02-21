import React from 'react';
import {shallow} from 'enzyme';

import Main from '../main/Main';

describe('Main component', () => {

    it('should render a search bar', () => {
        //Arrange Act
        const peopleData=[
            {
                "_id": "5c20f8aa5360274d34dfb6ea",
                "index": 0,
                "guid": "0b26c2e8-e557-439a-86da-2a27ed033f7c",
                "isActive": false,
                "balance": "$3,533.46",
                "picture": "https://api.adorable.io/avatars/66/asbot2323t@adorable.png",
                "age": 28,
                "eyeColor": "green",
                "name": "Lacy Nguyen",
                "gender": "female",
                "company": "NUTRALAB",
                "email": "lacynguyen@nutralab.com",
                "phone": "+1 (992) 571-3102",
                "address": "135 Leonora Court, Calpine, Wyoming, 6321",
                "about": "Lorem nostrud cillum quis aute eiusmod ut. Occaecat dolore ex officia qui. Mollit do ullamco proident eu officia aliqua qui aute et est. Excepteur proident elit amet minim exercitation cillum id fugiat mollit exercitation.\r\n",
                "registered": "2016-06-16T03:48:05 -02:00",
                "latitude": 88.691426,
                "longitude": 167.368535,
                "tags": [
                    "aliquip",
                    "nulla",
                    "quis",
                    "id",
                    "culpa",
                    "tempor",
                    "cillum"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Clarissa Valentine"
                    },
                    {
                        "id": 1,
                        "name": "Hancock Rasmussen"
                    },
                    {
                        "id": 2,
                        "name": "Stanton Mcbride"
                    }
                ],
                "greeting": "Hello, Lacy Nguyen! You have 5 unread messages.",
                "favoriteFruit": "strawberry"
            },
            {
                "_id": "5c20f8aa7960361f6ecb3ed6",
                "index": 1,
                "guid": "895fdff9-5f17-4f05-87c6-97385e741270",
                "isActive": true,
                "balance": "$2,506.29",
                "picture": "https://api.adorable.io/avatars/66/lacynguyen@nutralab.com",
                "age": 35,
                "eyeColor": "blue",
                "name": "Luz Aguilar",
                "gender": "female",
                "company": "UNCORP",
                "email": "luzaguilar@uncorp.com",
                "phone": "+1 (801) 488-3873",
                "address": "263 Furman Avenue, Salunga, Nevada, 926",
                "about": "Est pariatur tempor deserunt adipisicing cupidatat id deserunt ipsum est occaecat. Aute irure nostrud nisi laboris aliquip ut excepteur Lorem velit nulla. Deserunt incididunt laboris cillum ullamco. Ut est labore laborum officia aute ad et. Ex aliquip aliquip esse voluptate quis nostrud ea sint. Ea do pariatur dolor sunt.\r\n",
                "registered": "2016-09-26T09:12:51 -02:00",
                "latitude": -76.779587,
                "longitude": 167.373558,
                "tags": [
                    "id",
                    "mollit",
                    "anim",
                    "nostrud",
                    "sunt",
                    "quis",
                    "commodo"
                ],
                "friends": [
                    {
                        "id": 0,
                        "name": "Strickland Conley"
                    },
                    {
                        "id": 1,
                        "name": "Lenora Rowland"
                    },
                    {
                        "id": 2,
                        "name": "Pamela Leach"
                    }
                ],
                "greeting": "Hello, Luz Aguilar! You have 10 unread messages.",
                "favoriteFruit": "strawberry"
            }];

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
    });

    it('should have a create person dialogue functionality', () => {
        //Arrange Act
        const wrapper = shallow(<Main/>);

        //Assert
        expect(wrapper.find('.container')).toBeDefined();
        expect(wrapper.find('.SearchBar')).toBeDefined();
        expect(wrapper.find('.CreatePersonDialogue')).toBeDefined();
    });


    it('should render appropiately with default props', () => {
        //Arrange Act
        const wrapper = shallow(<Main/>);

        //Assert
        expect(wrapper).toMatchSnapshot();
    });
});