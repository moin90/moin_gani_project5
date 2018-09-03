import React, { Component, Fragment } from 'react';

class TodoList extends Component {

    render() {
        return(
            <div className="todolist">
                <div className="todolistContent pack">
                    <h2>What to Pack</h2>
                    <ul className="fa-ul">
                        {Object.keys(this.props.packTodos).map((key) =>{
                            return (
                                <Fragment key={key}>
                                    <li className={this.props.packTodos[key].complete ? "strikethrough" : null} 
                                    onClick={() => this.props.togglePackComplete(key)} key={key}>{this.props.packTodos[key].item}<span className="fa-li"><i className="fas fa-suitcase"></i></span>
                                    </li>
                                    <button className="delete" onClick={() => this.props.deleteTodo(key)}>Delete</button>
                                </Fragment>
                            )   
                        })}
                        
                    </ul>
                </div>
                
                <div className="todolistContent buy">
                    <h2>Buy Before Trip</h2>
                    <ul className="fa-ul">
                        {Object.keys(this.props.buyTodos).map((key) => {
                            return (
                                <Fragment key={key}>
                                    <li className={this.props.buyTodos[key].complete ? "strikethrough" : null} onClick={() =>
                                    this.props.toggleBuyComplete(key)} key={key}>
                                    {this.props.buyTodos[key].item}<span className="fa-li"><i className="fas fa-dollar-sign"></i></span>
                                    </li>
                                    <button className="delete" onClick={() => this.props.deleteTodo(key)}>Delete</button>
                                </Fragment>
                            )
                        })}
                    </ul>
                </div>

                <div className="todolistContent visit">
                    <h2>Places to Visit</h2>
                    <ul className="fa-ul">
                        {Object.keys(this.props.visitTodos).map((key) => {
                            return (
                                <Fragment key={key}>
                                    <li className={this.props.visitTodos[key].complete ? "strikethrough" : null} onClick={() =>
                                        this.props.toggleVisitComplete(key)} key={key}>{this.props.visitTodos[key].item} <span className="fa-li"><i className="fas fa-car"></i></span>
                                    </li>
                                    <button className="delete" onClick={() => this.props.deleteTodo(key)}>Delete</button>
                                </Fragment>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoList;