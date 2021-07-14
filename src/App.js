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
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Reviews from './pages/Reviews'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact><Header />
        <Sidebar /><Dashboard /></Route>
        <Route path="/customers" exact><Header />
        <Sidebar /><Customers /></Route>
        <Route path="/orders" exact ><Header />
        <Sidebar /><Orders/></Route>
        <Route path="/products" exact><Header />
        <Sidebar /><Products/></Route>
        <Route path="/Reviews" exact><Header />
        <Sidebar /><Reviews/></Route>
        <Route path="*"><Header />
        <Sidebar /><Error/></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
