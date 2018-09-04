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
                    <button type="submit" className="add hvr-grow-shadow">+ Packing List <i className="fas fa-suitcase-rolling"></i></button>
                </div>
                <div className="inputs">
                    <input type="text" onChange={this.handleBuyChange} value={this.state.buyValue} placeholder="What to buy?" />
                    <button type="submit" className="add hvr-grow-shadow">+ Cart <i className="fas fa-shopping-cart"></i></button>
                </div>
                <div className="inputs">
                    <input type="text" onChange={this.handleVisitChange} value={this.state.visitValue} placeholder="Where to visit?"/>
                    <button type="submit" className=" add hvr-grow-shadow">+ Visit List <i className="fas fa-globe-americas"></i></button>
                </div>
            </form>
        </div>
        )
    }
}   

export default Form;