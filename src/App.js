import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/pages/Home'
import Order from './Components/pages/Order'
import Product from './Components/pages/Product'
import Products from './Components/pages/Products'
import Register from './Components/pages/Register'
import Signin from './Components/pages/Signin'
import Cart from './Components/pages/Cart'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Shop from './Components/Cart/Shop'
import CartNew from './Components/Cart/Cart';

function App() {
  const scrollDoc = useRef()
  const [scrollState, setScrollState] = useState()

  const handleScrollToFirst = () => {
    scrollDoc.current.scrollTo(0, 0)
  }

  const handleScroll = () => {
    setScrollState(scrollDoc.current.scrollTop)
    // if (scrollDoc.scrollY > 10) {
    //   alert(window.pageYOffset, scrollDoc.scrollY);
    // }
  }


  // document.onscroll = () => {
  //   console.log("scrolling window")
  // }

  return (
    <div className='App' ref={scrollDoc} onScroll={handleScroll}>
      <div className={(scrollState >= 300) ? 'comeToStart' : 'comeToStart signDisplay'} onClick={handleScrollToFirst}>
        <ExpandLessIcon fontSize='large' />
      </div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/products' component={Product} />
          <Route path='/register' component={Register} />
          <Route path='/signin' component={Signin} />

          <Route path='/cart' component={CartNew} />
          {/* <Route path='/acount' component={Orders} /> */}
          <Route path='/order' component={Order} />
          {/* <Route path='/offers' component={Orders} /> */}
          <Route path='/' component={Shop} exact />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
