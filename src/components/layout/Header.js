import React from 'react'

function Header(){
    return (
      <div style={HeadStyle}>
          <h2>Note App</h2>
          <h4>Amin Edition v1.1</h4>
      </div>
    );
}

const HeadStyle = {
    backgroundColor: 'gray',
    color: 'white',
    padding: '2rem',
    textAlign: 'center'
}

export default Header;
