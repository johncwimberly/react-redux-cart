import React, { Component } from 'react';
import { connect } from 'react-redux';
import './todo.css';
import deleteIcon from './trash-alt-solid.svg'

function mapStateToProps(state) {
    return state;
}

class Todo extends Component {

    applyStrikeThrough(style) {
        return (
            <div className={style} id={this.props.todo.id} >
                <input type="checkbox" 
                checked={this.props.todo.completed}
                onChange= {(event) => {this.onCheckboxClick(this.props.todo.id, event.target.checked)}}/>
                <span>{this.props.todo.name}</span>
                <img onClick={this.onDeleteClick} className='delete-icon' src={deleteIcon} alt="logo" />
            </div>
        );
    }

    onCheckboxClick(id, isClicked) {        
        this.props.dispatch({type: 'UPDATE', id: id, completed: isClicked})
    }

    onDeleteClick = event => {
        event.preventDefault();
        this.props.dispatch({type: 'DELETE', id: this.props.todo.id})
    }

    render() {
        return (
            <li>
                {(this.props.todo.completed) ? this.applyStrikeThrough('todo-strike') : this.applyStrikeThrough('todo')}
            </li>
        );
    }
}

export default connect(mapStateToProps)(Todo);
