import React, { Component, Fragment } from "react";
import { withRouter,Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import "./App.css";

class App extends Component {

  constructor(props) {
  super(props);

  this.state = {
    isAuthenticated: false,
    username:''
    };
  }

  userHasAuthenticated = (authenticated,username) => {
    sessionStorage.setItem(this.state.isAuthenticated, JSON.stringify(authenticated));
    sessionStorage.setItem(this.state.username, JSON.stringify(username));
    this.setState({ 
      isAuthenticated: authenticated,
      username: username 
    });
  }

  handleLogout = event => {
    sessionStorage.clear()
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }

    return (

      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Albarans</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.isAuthenticated
                ? 
                  <Fragment>
                    <Navbar.Text>benvingut,</Navbar.Text>
                    <LinkContainer to="/usuari">
                      <NavItem>{this.state.username}</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem onClick={this.handleLogout}>Logout</NavItem>
                    </LinkContainer>
                  </Fragment>
                : <Fragment>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps}/>
      </div>
    );
  }
}

export default withRouter(App);

