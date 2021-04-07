import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import TripsContainer from "./components/TripsContainer"
import Trips from "./components/Trips"
import AddTrip from "./components/AddTrip"
import './App.css'


function App() {

  // const handleLogout = () => {
  //   clearToken()
  // }


  // const redirectToLoginPreCheck = (route = "/") => {
  //   if (user !== "") {
  //     switch (route) {
  //       case "trips":
  //         return <Trip route={route} />
        
  //       default:
  //         return <Home />
  //     }
  //   } else {
  //     return <Redirect to="/login" />
  //   }
  // } 

  return (
    <Router>
      <div className="App">
    
        <Switch>
          <Route exact path="/" render={() => <Home/>} />
          <Route exact path="/login" render={routerProps => <Login/>} />
          <Route exact path="/tripscontainer" render={() => <TripsContainer/>} />
        
          <Route exact path="/trips" render={() => <Trips/>} />
          <Route exact path="/addtrip" render={() => <AddTrip/>} />
     

        </Switch>

        {/* {getToken() ? <button oncClick={handleLogout}>Logout</button> : null} */}

      </div>
  
    </Router>
  );
}

export default App;
