import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import Form from './Form'
import TodoList from './TodoList';

const packingRef = firebase.database().ref('/packing');
const buyingRef = firebase.database().ref('/buying');
const visitRef = firebase.database().ref('/visit');

class App extends Component {


  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    packingRef.on('value', (snapshot) => {
       console.log(snapshot.val());
       this.setState({
         todos: snapshot.val(),
       })
    })

    buyingRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      this.setState({
        todos: snapshot.val(),
      })
    })

    visitRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      this.setState({
        todos: snapshot.val(),
      })
    })

  };  
  
  toggleComplete = (key) => {
    // console.log('clicked');
    console.log(key);
    this.state.todos[key].complete === true ?
    packingRef.child(`${key}`).update({ complete: false }) :
    packingRef.child(`${key}`).update({ complete: true })
  }

  addToPack = (todo) => {
      console.log(todo);
      packingRef.push({item: todo, complete: false});
  };

  addToBuy = (todo) => {
    console.log(todo);
    buyingRef.push({ item: todo, complete: false });
  };

  addToVisit = (todo) => {
    console.log(todo);
    buyingRef.push({ item: todo, complete: false });
  };



  
  

  render() {
    console.log('app render called');
    return (
      <div className="App">
        <header>
          <h1>GetDo <i className="fas fa-plane"></i></h1>
        </header>
        <Form addToPack={this.addToPack} />
        <TodoList todos = {this.state.todos} toggleComplete ={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
