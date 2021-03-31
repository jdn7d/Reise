import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
//import Trips from "./components/trip"
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
    
        <Switch>
          <Route exact path="/" render={() => <Home/>} />

          <Route exact path="/login" render={() => <Login/>} />

        </Switch>
      </div>
  
    </Router>
  );
}

export default App;
