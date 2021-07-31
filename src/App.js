import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import List from './components/List'

import Searchbar from './components/Searchbar'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Searchbar/>
        <List/>
      </div>
    )
  }
}

export default App;
