import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/index'
import Footer from './components/footer/index'
import Lorem from './components/lorem/index'
import Nav from './components/nav/index'

function App() {
  return (
    <div className="App">
      <div class='wrapper'>
        <Header>

        </Header >
        <Lorem />
        <div class="push"></div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
