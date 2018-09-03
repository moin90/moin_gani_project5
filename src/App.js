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
      packTodos: [],
      buyTodos: [],
      visitTodos: []
    }
  }

  
  componentDidMount() {
    packingRef.on('value', (snapshot) => {
        let data = snapshot.val();
        if (data === null) {
          data = {};
        }
       this.setState({
        //  packTodos: snapshot.val(),
         packTodos: data
       })
    })

    buyingRef.on('value', (snapshot) => {
      let data = snapshot.val();
      if (data === null) {
        data={};
      }
      this.setState({
        buyTodos: data
      })
    })

    visitRef.on('value', (snapshot) => {
      let data = snapshot.val();
      if (data === null) {
        data={};
      }
      this.setState({
        visitTodos: data
      })
    })

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;

      // Get the signed-in user info.
      const user = result.user;
      // ...
    }).catch(function (error) {
      // Error handling goes in here.
      console.log(error)
    });

    

  };  
  

  addToPack = (todo) => {
      packingRef.push({item: todo, complete: false});
  };

  addToBuy = (todo) => {
    buyingRef.push({ item: todo, complete: false });
  };

  addToVisit = (todo) => {
    visitRef.push({ item: todo, complete: false });
  };

  togglePackComplete = (key) => {
    this.state.packTodos[key].complete === true ?
      packingRef.child(`${key}`).update({ complete: false }) :
      packingRef.child(`${key}`).update({ complete: true })
  }

  toggleBuyComplete = (key) => {
    this.state.buyTodos[key].complete === true ?
      buyingRef.child(`${key}`).update({ complete: false }) :
      buyingRef.child(`${key}`).update({ complete: true })
  }

  toggleVisitComplete = (key) => {
    this.state.visitTodos[key].complete === true ?
      visitRef.child(`${key}`).update({ complete: false }) :
      visitRef.child(`${key}`).update({ complete: true })
  }

  deleteTodo = (todoID) => {
    packingRef.child(`${todoID}`).remove();
    buyingRef.child(`${todoID}`).remove();
    visitRef.child(`${todoID}`).remove();
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1 className="animated slideInLeft">GetDo <i className="fas fa-plane"></i></h1>
          <h4 className="animated slideInLeft">Plan now. Explore later.</h4>
        </header>
        <Form addToPack={this.addToPack} addToBuy={this.addToBuy} addToVisit={this.addToVisit} />
        <TodoList packTodos={this.state.packTodos} buyTodos={this.state.buyTodos} visitTodos={this.state.visitTodos} deleteTodo={this.deleteTodo} togglePackComplete={this.togglePackComplete} toggleBuyComplete={this.toggleBuyComplete} toggleVisitComplete={this.toggleVisitComplete} />
      </div>
    );
  }
}

export default App;
