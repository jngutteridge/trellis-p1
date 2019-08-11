import React from 'react';
import {connect} from 'react-redux'
import UserDisplayComponent from "../Core/UserDisplayComponent";
import {userLoginAction, userLogoutAction, userRegisterAction} from "./LoginService";

const LoginComponent = ({user, login, logout, register}) => (
    <div className="panel">
        {user == null ? (
            <div>
                <div className="container">
                    <h1>Welcome to Tailor</h1>
                </div>
                <nav className="nav-container">
                    <button onClick={login}>Login with Facebook</button>
                </nav>
            </div>
        ) : user['VerificationCode'] === '' ? (
            <div>
                <div className="container">
                    <h1>Registration</h1>
                    <UserDisplayComponent user={user}/>
                </div>
                <nav className="nav-container">
                    <button onClick={register}>Register as {user.Name}</button>
                    <button onClick={logout}>Logout</button>
                </nav>
            </div>
        ) : (
            <div>
                <div className="container">
                    <h1>Verification</h1>
                    <UserDisplayComponent user={user}/>
                    <h3>Verification Code</h3>
                    <h2 className="verify-code">{user['VerificationCode']}</h2>
                </div>
                <nav className="nav-container">
                    <button onClick={logout}>Logout</button>
                </nav>
            </div>
        )}
    </div>
);

const mapStateToProps = state => ({
    user: state.login.user,
    properties: state.login.properties,
});

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(userLoginAction()),
    logout: () => dispatch(userLogoutAction()),
    register: () => dispatch(userRegisterAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
