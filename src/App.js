import React, {useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from 
"react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import Orders from "./Orders";


const promise = loadStripe
("pk_test_51J3Oj8SGF67Tv8bmq6Q1eihbsimzCVcW8gJHJaxfQfqZG6Z9nQfvNpn68XFwLcbsx1nja8zaHqNhLokKoev3K3ET0012XlzLKS")

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // It only runs once when the app component loads....
    
    auth.onAuthStateChanged(authUser => {
      console.log('user is loged in ', authUser);

      if (authUser) {
        // the user was logged in successfully
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
    <div className="app">
     <Switch>
      <Route path="/orders">
        <Header />
        <Orders />
      </Route>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
        <Header />
          <Checkout />
        </Route>
        <Route path = "/payment">
          <Header />
          < Elements stripe = {promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
        <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
