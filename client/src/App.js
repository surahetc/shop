import Login from './components/Login'
import Products from './components/Products'
import Header from './components/Header'
import {Route,Switch} from 'react-router-dom'
import Register from './components/Register'
import './App.css';


function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route exact path="/products" component={Products}></Route>
      </Switch>
    </div>
    
  );
}

export default App;
