import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Directory from './components/DirectoryComponent';
// import { CAMPSITES } from './shared/campsites'; 

class App extends Component {
  render() {
      return (
          <div className="App">
              <Main/>
          </div>
      );
  };
}

export default App;