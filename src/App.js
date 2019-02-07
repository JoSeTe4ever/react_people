import React, {Component} from 'react';
import Footer from './components/footer/Footer'
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import peopleData from "./data/peopleData";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main peopleData={peopleData}/>
                <Footer className="App-footer"/>
            </div>
        );
    }
}

export default App;
