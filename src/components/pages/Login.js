import React, {Component} from 'react';
import './style/Login.css'

class Login extends Component {
    render() {
        return (
            <div className="login-box">
                <div className="login-left-side">
                    <div>
                        <h1>Welcome to MDM</h1>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque id nibh tortor
                            id.
                            Elit sed vulputate mi sit amet mauris commodo. Ultrices in iaculis nunc sed augue lacus.
                            Libero
                            volutpat sed cras ornare arcu. Ut porttitor leo a diam sollicitudin tempor.</p>
                        <button>Know More</button>
                    </div>
                </div>
                <div className="login-right-side">
                    <div>
                        <h1>Signin</h1>
                        <form>
                            <input type="text" placeholder="Username"/>
                            <input type="password" placeholder="Password"/>
                            <button>LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
