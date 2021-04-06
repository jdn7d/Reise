import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"

//import Trips from "./components/trip"
import './App.css'
import {clearToken, getToken} from './services/local-storage'

function App() {

  const handleLogout = () => {
    clearToken()
  }

  return (
    <Router>
      <div className="App">
    
        <Switch>
          <Route exact path="/" render={() => <Home/>} />
          <Route exact path="/login" render={routerProps => <Login {...routerProps} />} />
          <Route exact path="/profile" render={() => <Profile/>} />

        </Switch>

        {getToken() ? <button oncClick={handleLogout}>Logout</button> : null}

      </div>
  
    </Router>
  );
}

export default App;
