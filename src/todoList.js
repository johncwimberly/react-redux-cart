import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './todo'
import './todoList.css';

function mapStateToProps(state) {
    return state;
}
class TodoList extends Component {

    getFilteredListOfTodoComponents( items ) {
        let filteredItems = this.props.items.filter((item) => {
            //TODO change on sale stuff to filters
            if (this.props.visibility === 'SHOW_ALL') {
                return true;
            } else if (this.props.visibility === 'SHOW_IN_PROGRESS' && item.completed === false) {
                return true;
            } else if (this.props.visibility === 'SHOW_COMPLETED' && item.completed === true) {
                return true;
            }

            return false;
        })

        return filteredItems.map((item, key) => {
            return <Todo key={key} todo={item} />
        })
    }

    render() {
        return (
            <div className="todoList">
                {this.getFilteredListOfTodoComponents()}
            </div>
        )
      }
}

export default connect(mapStateToProps)(TodoList);