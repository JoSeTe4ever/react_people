import React, {Component} from 'react';
import './Main.css'
import peopleData from './../../data/peopleData';
import Person from "./person-card/Person";
import SearchBar from "./search-bar/SearchBar";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {people: peopleData, favouritePeople: []};
        this.filterPeople = this.filterPeople
    };

    static defaultProps = {};

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    render() {

        this.peopleCardsComponents = this.state.people.map(person => <Person person={person} key={person._id}
                                                                             handleCheckboxChange={this.handleCheckboxChange}/>);

        return (
            <div>
                <h3>This is my main element</h3>
                <SearchBar placeholder="Type here" onSearchTermChange={term => console.log("search " + term)}/>
                <div className="container">
                    <div className="peopleDataContainer">
                        {this.peopleCardsComponents.slice(0, 5)}
                    </div>
                    <div className="peopleDataContainer">
                        {this.peopleCardsComponents.slice(5, 10)}
                    </div>
                </div>
            </div>
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

    handleCheckboxChange(id) {
        this.setState(prevState => {
            const isFavorite = this.prevState.favouritePeople.some((elem) => elem._id == id);
            const selectedElem = this.prevState.favouritePeople.filter((elem) => elem._id == id);

            if (!isFavorite && selectedElem) {
                this.prevState.favouritePeople.push(selectedElem);
            } else {
                this.prevState.favouritePeople.splice(selectedElem);
            }

        });
        console.log("selected " + id);
    }

    filterPeople() {
    }
}

export default Main;