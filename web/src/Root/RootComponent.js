import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {Helmet} from "react-helmet";
import {GoogleFont, TypographyStyle} from "react-typography";
import Typography from 'typography';
import LoadingComponent from "../Core/LoadingComponent";
import LoginComponent from "../Login/LoginComponent";
import {userRetrieveAction} from "../Login/LoginService";
import UserDisplayComponent from "../Core/UserDisplayComponent";

const typography = new Typography({
    baseFontSize: "14px",
    headerFontFamily: ['Poppins', 'sans-serif'],
    bodyFontFamily: ['Roboto', 'serif'],
    googleFonts: [{
        name: 'Roboto',
        styles: ['400, 500']
    }, {
        name: 'Poppins',
        styles: ['300']
    }]
});

class RootComponent extends Component {

    componentDidMount() {
        this.props.init();
    }

    render() {
        const {loading, user} = this.props;
        let body;
        if (loading) {
            body = <LoadingComponent/>;
        } else if (user == null) {
            body = <LoginComponent/>;
        } else {
            body = (
                <div className="panel">
                    <div className="container">
                        <h1>Profile</h1>
                        <UserDisplayComponent user={user}/>
                    </div>
                </div>);
        }
        return (
            <div className="full-height">
                <GoogleFont typography={typography}/>
                <TypographyStyle typography={typography}/>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#000000"/>
                    <title>Tailor</title>
                </Helmet>
                {body}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    init: () => {
        dispatch(userRetrieveAction());
    }
});

const mapStateToProps = state => ({
    loading: state.load.loading,
    user: state.login.user
});

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
