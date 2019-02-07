import React, {Component} from 'react';
import './Main.css'
import peopleData from './../../data/peopleData';
import Person from "./person-card/Person";
import SearchBar from "./search-bar/SearchBar";
import CreatePersonDialogue from "./create-dialog/CreatePersonDialogue";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {people: props.peopleData, favouritePeople: []};
        this.filterPeople = this.filterPeople.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    };

    static defaultProps = {};

    render() {
        this.peopleCardsComponents = this.state.people.map(person => <Person person={person}
                                                                             key={person._id}
                                                                             handleCheckboxChange={this.handleCheckboxChange}/>);
        return (
            <div>
                <SearchBar placeholder="Type here" onSearchTermChange={term => this.filterPeople(term)}/>
                <CreatePersonDialogue/>
                <div className="container">
                    <div className="peopleDataContainer">
                        {this.peopleCardsComponents.slice(0, 5)}
                    </div>
                    <div className="peopleDataContainer">
                        {this.peopleCardsComponents.slice(5, 10)}
                    </div>

                    <div className="peopleDataContainer">
                        {this.peopleCardsComponents.slice(10, 15)}
                    </div>
                    <div className="peopleDataContainer">
                        {this.peopleCardsComponents.slice(15, 20)}
                    </div>
                </div>
            </div>
        );
    }

    handleCheckboxChange(id) {
        this.setState(prevState => {
            const isFavorite = prevState.favouritePeople.some((elem) => elem._id === id);
            const selectedElem = prevState.favouritePeople.filter((elem) => elem._id === id);

            if (!isFavorite && selectedElem) {
                prevState.favouritePeople.push(selectedElem);
            } else {
                prevState.favouritePeople.splice(selectedElem);
            }
            return prevState;
        });
    }

    filterPeople(term) {
        if (!term) {
            this.setState(prevState => {
                return {people: peopleData, favouritePeople: prevState.favouritePeople};
            });
        }
        else {
            this.setState(prevState => {
                const selectedElems = prevState.people.filter((elem) => elem.name.toLowerCase().indexOf(term.toLowerCase()) !== -1);
                return {people: selectedElems, favouritePeople: prevState.favouritePeople};
            });
        }
    }
}

export default Main;