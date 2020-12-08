import React, {Component} from 'react';
import './style/CreateNote.css'

class CreateNote extends Component {

    state = {
        title: '',
        note: '',
        priority: 'Urgent'
    }

    onSave = () => {
        const {title, note, priority} = this.state;
        if (title !== '' && !title.toLowerCase().startsWith(' ')) {
            if (!title.toLowerCase().includes('<script>') && !note.toLowerCase().includes('<script>')
            && !title.toLowerCase().includes('</script>') && !note.toLowerCase().includes('</script>')) {
                this.props.addNote(title, note, priority);
                this.clearEntries();
            } else alert('Input includes forbidden content!');
        } else alert('Your entry includes empty values!');
    }

    clearEntries = () => {
        this.setState(
            {
                title: '',
                note: '',
                priority: 'Urgent'
            }
        );
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="formBox">
                <form>
                    <div className="form-group">
                        <label htmlFor="titleInput">Title</label>
                        <input type="text" className="form-control" id="titleInput"
                               name="title" value={this.state.title}
                               onChange={this.onChange} placeholder="Sample Title"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="NoteInput">Your note</label>
                        <textarea className="form-control" id="NoteInput" rows="3" name="note"
                                  value={this.state.note} onChange={this.onChange}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="priorityInput">Priority</label>
                        <select className="form-control" id="priorityInput" name="priority"
                                value={this.state.priority} onChange={this.onChange}>
                            <option>Urgent</option>
                            <option>Important</option>
                            <option>That's OK</option>
                            <option>Umm</option>
                            <option>NO</option>
                        </select>
                    </div>
                </form>
                <div className="actionBox">
                    <button className="btn btn-success" onClick={this.onSave}>SAVE</button>
                    <button className="btn btn-danger" onClick={this.clearEntries}>CLEAR</button>

                </div>
            </div>
        );
    }
}

export default CreateNote;
