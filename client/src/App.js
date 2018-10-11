import React, { Component } from 'react';
import './App.css';

import TeacherList from './Components/TeacherList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TeacherList />
      </div>
    );
  }
}

export default App;
