import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import TeacherList from './Components/TeacherList'
import TeacherShow from './Components/TeacherShow'
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/teachers' component={TeacherList} />
              <Route exact path='/teachers/:teacherId' component={TeacherShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
