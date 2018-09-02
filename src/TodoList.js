import React, { Component } from 'react';

class TodoList extends Component {

    render() {
        console.log(this.props);
        return(
            <div>
                <h2>Things to pack:</h2>
                <ul>
                    {Object.keys(this.props.todos).map((key) =>{
                        return <li className = {this.props.todos[key].complete ? "strikethrough" : null} onClick={() =>
                        this.props.toggleComplete(key)} key={key}>{this.props.todos[key].item}</li>
                    })}
                </ul>

                <h2>Things to Buy Before Trip:</h2>
                {Object.keys(this.props.todos).map((key) => {
                    return <li className={this.props.todos[key].complete ? "strikethrough" : null} onClick={() =>
                        this.props.toggleComplete(key)} key={key}>{this.props.todos[key].item}</li>
                })}
                <h2>Places to Visit on Trip:</h2>

                {Object.keys(this.props.todos).map((key) => {
                    return <li className={this.props.todos[key].complete ? "strikethrough" : null} onClick={() =>
                        this.props.toggleComplete(key)} key={key}>{this.props.todos[key].item}</li>
                })}
            </div>
        )
    }
}

export default TodoList;