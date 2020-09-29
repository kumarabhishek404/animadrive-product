import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/pages/Home'
import Orders from './Components/pages/Orders'
import Product from './Components/pages/Product'
import Register from './Components/pages/Register'
import Signin from './Components/pages/Signin'
import Cart from './Components/pages/Cart'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/products' component={Product} />
          <Route path='/register' component={Register} />
          <Route path='/signin' component={Signin} />

          <Route path='/cart' component={Cart} />
          <Route path='/acount' component={Orders} />
          <Route path='/orders' component={Orders} />
          <Route path='/offers' component={Orders} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
