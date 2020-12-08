import React from 'react'
import {Link} from 'react-router-dom'
import './style/MenuBar.css'

function MenuBar() {
    return (
        <div className="container menuBox">
            <Link to="/">New Note</Link>
            <Link to="/viewNotes">View Note</Link>
        </div>
    );
}

export default MenuBar;
