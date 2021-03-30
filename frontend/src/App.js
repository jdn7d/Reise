import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
    
        <Switch>
          <Route exact path="/" render={() => <Home/>} />
        </Switch>
      </div>
  
    </Router>
  );
}

export default App;
