import React, {useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function App() {
  const [{ user } ,dispatch] = useStateValue();
   useEffect(() => {
   const unsubscribe =  auth.onAuthStateChanged((authUser) =>{
            if(authUser) {
             dispatch({
               type: "SET_USER",
               user: null,
             })
            }
            else{
            dispatch({
              type: "SET_USER",
              user:authUser,
     })
    }
  })

  return () =>{
     unsubscribe();
  }
}, [])
console.log('User is>>',user);
  return (
    <Router>
    <div className="app">
   <Switch>
     <Route path="/checkout">
        < Header />
        <Checkout />
   
     </Route>
     <Route path="/login">
     <Login />
     </Route>
     <Route path="/">
     < Header />
     <Home/>
     </Route>
   </Switch>
    </div>
    </Router>
  );
}

export default App;
{/*localhost.com */}
{/*localhost.com/checkout */}
{/*localhost.com/login */}