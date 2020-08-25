import React from 'react';
import './App.css';
import Sidebar from './components/Profile/Sidebar/Sidebar';
import Aside from './components/Profile/Aside/Aside'
import {Redirect, Route, withRouter} from "react-router-dom";
import Media from "./components/Media/Media";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import HeaderContentContainer from "./components/HeaderContent/HeaderContentContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));
const FriendsContainer = React.lazy(() => import ( "./components/Friends/FriendsContainer"));
const AboutContainer = React.lazy(() => import ( "./components/About/AboutContainer"));
const LoginPage = React.lazy(() => import ( "./components/Login/Login"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <>
                <HeaderContentContainer/>
                <div className='app-wrapper'>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                        <div className='profile-wrapper'>
                            <Route path='/profile/:userId?'
                                   component={Profile}/>

                            <Route path='/profile' component={Aside}/>
                            <Route path='/profile' component={Sidebar}/>
                        </div>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/friends' render={withSuspense(FriendsContainer)}/>
                        <Route path='/media' component={Media}/>
                        <Route path='/about' component={withSuspense(AboutContainer)}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                    </div>
                </div>
                <Footer/>
                <Route path='/login' render={withSuspense(LoginPage)}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App);