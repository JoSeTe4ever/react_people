import React, {Component} from "react";
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ""};
    }

    render() {
        return (
            <div className="searchContainer">
                <div className="searchBar">
                    <input className="searchTerm"
                           placeholder={this.props.placeholder}
                           value={this.state.searchTerm}
                           onChange={event => this.onInputChange(event.target.value)}/>
                </div>
            </div>
        );
    }

    onInputChange(searchTerm) {
        this.setState({searchTerm});
        this.props.onSearchTermChange(searchTerm); // this is the callback function that is exposed through props.
    }
}

export default SearchBar;