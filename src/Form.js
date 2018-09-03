import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            packValue: '',
            buyValue: '',
            visitValue: ''
        }
    }

    handlePackChange = (e) => {
        // console.log(e);
        console.table(e.target.value);
        this.setState({
            packValue: e.target.value
        })
    }

    handleBuyChange = (e) => {
        this.setState({
            buyValue: e.target.value
        })
    }

    handleVisitChange = (e) => {
        this.setState({
            visitValue: e.target.value
        })
    }


    handleSubmit = (e) => {
        // preventing the page from refreshing
        e.preventDefault();

        this.state.packValue!==''? this.props.addToPack(this.state.packValue): null;
        this.state.buyValue!==''? this.props.addToBuy(this.state.buyValue): null;
        this.state.visitValue!==''? this.props.addToVisit(this.state.visitValue): null;

        this.setState({
            packValue: '',
            buyValue: '',
            visitValue: ''
        })
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div className="inputs">
                    <input type="text" onChange={this.handlePackChange} value={this.state.packValue} placeholder="What to pack?"/>
                        <input type="submit" value="Add to Packing List" className="hvr-grow-shadow" />
                </div>
                <div className="inputs">
                    <input type="text" onChange={this.handleBuyChange} value={this.state.buyValue} placeholder="What to buy?" />
                        <input type="submit" value="Add to Shopping List" className="hvr-grow-shadow" />
                </div>
                <div className="inputs">
                    <input type="text" onChange={this.handleVisitChange} value={this.state.visitValue} placeholder="Where to visit?"/>
                        <input type="submit" value="Add to Visit List" className="hvr-grow-shadow"/>
                </div>
            </form>
        </div>
        )
    }
}   

export default Form;