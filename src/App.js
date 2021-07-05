import React from "react";
import { Router, Route } from "react-router-dom";

import Amplify from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import awsExports from "./aws-exports";

import { createBrowserHistory as createHistory } from "history";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import UploadImage from "./components/UploadImage";

Amplify.configure(awsExports);

const history = createHistory();

function App() {
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <Router history={history}>
          <Navbar bg="primary" expand="md" variant="dark">
            <Navbar.Brand href="/">
              S3 Dynamo Appsync graphql cognito
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/uploadImage">Upload Image</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <AmplifySignOut />
          </Navbar>

          <Route path="/uploadImage" exact component={UploadImage} />
        </Router>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
