// Dependency imports
import React, { useState, useEffect } from 'react';
import {Router} from '@reach/router';

// Views and components
import Home from "./views/Home";
import AssemblyAdd from "./views/AssemblyAdd";
import AssemblyDetail from "./views/AssemblyDetail";
import AssemblyEdit from "./views/AssemblyEdit";
import SocketTest from "./views/SocketTest";
import NotFound from "./views/NotFound";

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container className="container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Assemble!</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/new">New</Nav.Link>
        </Nav>
      </Navbar>
      <Row>
        <Col>
          <Router>
            <Home path="/"/>

            <AssemblyAdd path="/new" />

            {/* includes add teammate */}
            <AssemblyDetail path="/assemblies/:id" />

            {/* includes add teammate */}
            <AssemblyEdit path="/assemblies/:id/edit" />

            <SocketTest path='/sockettest'/>
            <NotFound default/>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;