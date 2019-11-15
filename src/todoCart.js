import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './todo'
import './todoCart.css';

function mapStateToProps(state) {
    return state;
}
class TodoCart extends Component {

    getFilteredListOfTodoComponents( items ) {
        let filteredItems = this.props.items.filter((item) => {
            if (this.props.visibility == 'SHOW_ALL') {
                return true;
            } else if (this.props.visibility == 'SHOW_NOT_ON_SALE' && item.onSale == false) {
                return true;
            } else if (this.props.visibility == 'SHOW_ON_SALE' && item.onSale == true) {
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
            <div className="todoCart">
                {this.getFilteredListOfTodoComponents()}
            </div>
        )
      }
}

export default connect(mapStateToProps)(TodoCart);