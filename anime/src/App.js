import Menu from "./menu";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Home";
import Signup from "./signup";
import Login from "./login";
import Watchlist from "./Wishlist";
import Details from "./Details";



function App() {
  return (
    <Router>
    <div className="App">
      <Menu/>
      <div className="container-fluid container">
      <Route path="/" component={Home} exact/>
      <Route path="/signup" component={Signup} exact/>
      <Route path="/login" component={Login} exact/>
      <Route path="/watchlist" component={Watchlist} exact/>
      <Route path="/details" component={Details} exact/>


      </div>
    
    </div>
    </Router>
  );
}

export default App;
