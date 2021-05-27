import './App.css';
import {
  BrowserRouter as Router,
  Route ,
  Switch
} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import Products from "./pages/Products"
import Customers from "./pages/Customers"
import Error from "./pages/Error"


function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/customers">
          <Customers />
        </Route>
        
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/settings">
          {/* <Settings /> */}
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
