import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import background from './assets/background.jpg';

const awesomeBackground = {
  paperContainer: {
    backgroundImage: `url(${background})`
  }
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Ryan Parekh',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Welcome to my website!',
        subTitle: 'I will be updating about my life and programming progress.',
        text: 'If you have any questions, shoot me an email in the Contact page!'
      },
      
      sub: {
        subTitle: 'My name is Ryan Parekh!',
        text: 'Learn more about me!'
      },

      about: {
        title: 'About Me',
      },

      contact: {
        title: 'Contact me!',
      },

    }
  }

  render(){
    return (
      <div style={awesomeBackground.paperContainer}>
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Ryan Parekh</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" className="nav-link-size" style={{ textDecoration: 'none' }} to="/">Home</Link>
                <Link className="nav-link" className="nav-link-size" style={{ textDecoration: 'none' }} to="/about">About</Link>
                <Link className="nav-link" className="nav-link-size" style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

        <Footer />



        </Container>
      </Router>
      </div>
    );
  }
}

export default App;
