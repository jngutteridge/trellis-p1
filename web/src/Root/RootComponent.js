import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import LoadingComponent from "../Core/LoadingComponent";
import LoginComponent from "../Login/LoginComponent";
import {userRetrieve} from "../Login/LoginService";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {ProfilePanelComponent} from "../Core/ProfilePanelComponent";
import NodeComponent from "../Node/NodeComponent";

class RootComponent extends Component {

    componentDidMount() {
        this.props.init();
    }

    render() {
        const {loading, user} = this.props;
        if (user == null) {
            if (loading) {
                return <LoadingComponent/>;
            }
            return <LoginComponent/>;
        }
        return (
            <BrowserRouter>
                <div className="full-height">
                    <nav className="nav-container">
                        <Link to="/profile">
                            <button>Profile</button>
                        </Link>
                    </nav>
                    <Route path="/profile" render={(props) => <ProfilePanelComponent {...props} user={user}/>}/>
                    <Route path="/" exact component={NodeComponent}/>
                </div>
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    init: () => {
        dispatch(userRetrieve());
    }
});

const mapStateToProps = state => ({
    loading: state.load.loading,
    user: state.login.user
});

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
