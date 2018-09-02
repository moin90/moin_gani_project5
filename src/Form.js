import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (e) => {
        // console.log(e);
        console.table(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        // preventing the page from refreshing
        e.preventDefault();
        this.props.addToPack(this.state.inputValue);
        this.setState({
            inputValue: ''
        })
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} className="userInput__field" value={this.state.inputValue}/>
                <input type="submit" />
            </form>
        </div>


        )
    }
}

export default Form;