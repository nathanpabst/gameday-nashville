import React from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import firebase from 'firebase';

import './App.css';

import Navbar from '../Components/Navbar/Navbar';
import MyEvents from '../Components/MyEvents/MyEvents';
import CreateEvent from '../Components/CreateEvent/CreateEvent';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import fbConnection from '../firebaseRequests/connection';
import EventListing from '../Components/EventListing/EventListing';
import EventForm from '../Components/EventForm/EventForm';
import Games from '../Components/Games/Games';
import Footer from '../Components/Footer/Footer';
import ReportBug from '../Components/ReportBug/ReportBug';
fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/myEvents', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  state={
    authed: false,
  }

  componentDidMount () {
    this.authListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      };
    });
  }

  componentWillUnmount () {
    this.authListener();
  }

  runAway = () => {
    this.setState({authed: false});
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
              runAway={this.runAway}
            />
            <div className="container nav-margin">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={EventListing}/>
                  <PrivateRoute
                    path="/myEvents"
                    authed={this.state.authed}
                    component={MyEvents}
                  />
                  <PublicRoute
                    path="/register"
                    authed={this.state.authed}
                    component={Register}
                  />
                  <PublicRoute
                    path="/Login"
                    authed={this.state.authed}
                    component={Login}
                  />
                  <PublicRoute
                    path="/reportBug"
                    authed={this.state.authed}
                    component={ReportBug}
                  />
                  <PrivateRoute
                    path="/createEvent"
                    authed={this.state.authed}
                    component={CreateEvent}
                  />
                  <PrivateRoute
                    path="/eventListing"
                    authed={this.state.authed}
                    component={EventListing}
                  />
                  <PrivateRoute
                    path="/eventForm"
                    authed={this.state.authed}
                    component={EventForm}
                  />
                  <PrivateRoute
                    path="/games"
                    authed={this.state.authed}
                    component={Games}
                  />
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
