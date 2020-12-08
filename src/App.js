import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header'
import CreateNote from './components/pages/CreateNote'
import ViewNotes from "./components/pages/ViewNotes";
import MenuBar from "./components/layout/MenuBar";
// import Login from "./components/pages/Login";
class App extends Component {

    state = {
        notes: [
            {
                id: 0,
                title: 'Title',
                note: 'This Note',
                priority: 'Urgent'
            }
        ]
    };

    addNote = (title, note, priority) => {
            const newNote = {
                id: this.state.notes.length,
                title,
                note,
                priority
            }
            console.log(newNote)
            this.setState({notes: [...this.state.notes, newNote]});
            console.log(this.state.notes)
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="middleBox container">
                        <Header/>
                        <MenuBar/>
                        <Route path="/" exact render={props => (
                            <>
                                <CreateNote addNote={this.addNote}/>
                                {/*<Login />*/}
                            </>
                        )}/>
                        <Route path="/viewNotes" render={props => (
                            <>
                                <ViewNotes notes={this.state.notes}/>
                            </>
                        )}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
