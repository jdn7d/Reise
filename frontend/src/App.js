import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Trip from "./components/Trip"
import {getUser} from "./redux/actions"
import { setToken, clearToken, getToken } from './services/local-storage'
import { Redirect} from 'react-router-dom'
import './App.css'


function App() {

  const handleLogout = () => {
    clearToken()
  }


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
          
          <Route exact path="/trip">
            {/*redirectToLoginPreCheck("trip")*/}  
          </Route>

        </Switch>

        {getToken() ? <button oncClick={handleLogout}>Logout</button> : null}

      </div>
  
    </Router>
  );
}

export default App;
