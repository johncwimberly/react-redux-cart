import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import items from './reducers/itemsReducer';
import visibility from './reducers/visibilityReducer';
import TodoList from './todoList';

const store = createStore(combineReducers({items, visibility}))

class App extends Component {

  addSpecificItem(name) {
    store.dispatch({type: 'ADD', name});
  }

  onRadioClick(visibility){
    store.dispatch({type: visibility})
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to the Snowman TODO List</h1>
          <h3>Please add Items to your todo list</h3>
          <form onSubmit={ (event) => {
                event.preventDefault()
                let name = document.getElementById("itemName").value;
                this.addSpecificItem(name)
              }
            }>
                Item Name:<br/>
                <input id="itemName" type="text" name="itemname"/> <br/>
                <input type="submit" name="submitbutton" />
            </form>
            <div className="row">
            <div className="column columnLeft">
              <h5>Filter</h5>
              <div className='radio'>
                <input type="radio" id="SHOW_ALL" name="visibility" value="All" onChange={(event) => {this.onRadioClick('SHOW_ALL')}}/>
                <label htmlFor="SHOW_ALL">All</label>
              </div>
              <div className='radio'>
                <input type="radio" id="show_completed" name="visibility" value="Completed" onChange={(event) => {this.onRadioClick('SHOW_COMPLETED')}}/>
                <label htmlFor="show_completed">Completed</label>
              </div>
              <div className='radio'>
                <input type="radio" id="show_in_progress" name="visibility" value="In Progress" onChange={(event) => {this.onRadioClick('SHOW_IN_PROGRESS')}}/>
                <label htmlFor="show_in_progress">In Progress</label>
              </div>

              
          </div>
        
          <div className="column columnRight">
            <h5>Todos</h5>
            <TodoList />
          </div>
        </div>
              
        </header>
        </div>
      </Provider>
    );
  }
}

export default App;
