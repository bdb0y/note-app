import React, {Component} from 'react';
import Note from "../layout/Note";


class ViewNotes extends Component {
    render() {
        return (
            this.props.notes.map((note) => (
                <Note key={note.id} note={note}/>
            ))
        )
    }
}


export default ViewNotes;
