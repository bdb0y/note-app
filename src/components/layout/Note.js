import React, {Component} from 'react';
import './style/Note.css'

class Note extends Component {
    render() {
        const {title, note, priority} = this.props.note;
        return (
            <div className="note">
                <h4>{title} <span>#{priority}</span></h4>
                <p>{note}</p>
            </div>
        );
    }
}

export default Note;
