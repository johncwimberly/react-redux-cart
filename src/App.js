import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import items from './reducers/itemsReducer';
import visibility from './reducers/visibilityReducer';

const store = createStore(combineReducers({items, visibility}))

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </Provider>
      </div>
    );
  }
}

export default App;
