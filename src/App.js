import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import items from './reducers/itemsReducer';
import visibility from './reducers/visibilityReducer';
import TodoCart from './todoCart';

const store = createStore(combineReducers({items, visibility}))

class App extends Component {

  addSpecificItem(name) {
    store.dispatch({type: 'ADD', name});
  }

  onRadioClick(visibility){
    console.log("Visibility changing to ", visibility);
    store.dispatch({type: visibility})
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to the Snowman Grocery List</h1>
          <h3>Please add Items to your cart</h3>
          <form onSubmit={ (event) => {
                event.preventDefault()
                let name = document.getElementById("itemName").value;
                console.log(name)
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
                <label for="SHOW_ALL">All</label>
              </div>
              <div className='radio'>
                <input type="radio" id="show_on_sale" name="visibility" value="On Sale" onChange={(event) => {this.onRadioClick('SHOW_ON_SALE')}}/>
                <label for="show_on_sale">On Sale</label>
              </div>
              <div className='radio'>
                <input type="radio" id="show_not_on_sale" name="visibility" value="Not on Sale" onChange={(event) => {this.onRadioClick('SHOW_NOT_ON_SALE')}}/>
                <label for="show_not_on_sale">Not on Sale</label>
              </div>
          </div>
        
          <div className="column columnRight">
            <h5>Cart</h5>
            <TodoCart />
          </div>
        </div>
              
        </header>
        </div>
      </Provider>
    );
  }
}

export default App;
