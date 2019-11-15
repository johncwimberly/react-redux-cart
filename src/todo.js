import React, { Component } from 'react';
import { connect } from 'react-redux';
import './todo.css';
import deleteIcon from './trash-alt-solid.svg'

function mapStateToProps(state) {
    return state;
}

class Todo extends Component {

    constructor(props) {
        super(props);
    }

    applyStrikeThrough() {
        if(this.props.todo.onSale){
            document.getElementById(this.props.todo.id).style.textDecoration = 'line-through';
        } else {
            document.getElementById(this.props.todo.id).style.textDecoration = 'none';
        }
    }

    componentDidUpdate() {
        this.applyStrikeThrough();
    }

    componentDidMount() {
        this.applyStrikeThrough();
    }

    onCheckboxClick(id, isClicked) {
            // text-decoration: line-through;
        
        this.props.dispatch({type: 'UPDATE', id: id, onSale: isClicked})
    }

    onDeleteClick = event => {
        event.preventDefault();
        console.log("Clicked delete!")
        this.props.dispatch({type: 'DELETE', id: this.props.todo.id})
    }

  render() {
    return (
        <li>
            <div className="todo" id={this.props.todo.id}>
                <input type="checkbox" 
                checked={this.props.todo.onSale}
                onChange= {(event) => {     
                    console.log("checking event", event.target.checked);
                    
                    this.onCheckboxClick(this.props.todo.id, event.target.checked)}
                }/>
                <span>{this.props.todo.name}</span>
                <img onClick={this.onDeleteClick} className='delete-icon' src={deleteIcon} alt="logo" />
            </div>
        </li>
    );
  }
}

export default connect(mapStateToProps)(Todo);
