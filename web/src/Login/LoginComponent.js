import React from 'react';
import {connect} from 'react-redux'
import {userLogin} from "./LoginService";

const LoginComponent = ({login}) => (
    <div className="panel">
        <div>
            <div className="container">
                <h1>Trelloclone</h1>
            </div>
            <nav className="nav-container">
                <button onClick={login}>Login with Facebook</button>
            </nav>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(userLogin()),
});

export default connect(null, mapDispatchToProps)(LoginComponent);
