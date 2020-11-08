import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/pages/Home'
import Order from './Components/pages/Order'
import Product from './Components/pages/Product'
import Register from './Components/pages/Register'
import Signin from './Components/pages/Signin'
import Cart from './Components/pages/Cart'
import Joinus from './Components/pages/JoinUs';
import Colleboration from './Components/pages/Colleboration'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Shop from './Components/pages/Shop'

import MyOrder from './Components/pages/MyOrders'
import Contact from './Components/pages/Contact';
import Initiative from './Components/pages/Initiative'


import { useSelector } from 'react-redux';

function App() {
  const login = useSelector(state => state.login)
  const scrollNavbar = useRef()
  const scrollDoc = useRef()
  const [scrollState, setScrollState] = useState()
  const [dim, setDim] = useState(false)
  const [closeNavbar, setCloseNavbar] = useState(false)

  const handleScrollToFirst = () => {
    window.scrollTo(0, 0)
  }

  const handleScroll = () => {
    setScrollState(scrollDoc.current.scrollTop)
  }

  const handleDim = value => {
    setDim(true)
  }
  console.log(dim);
  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', () => {
      setDim(false)
      setCloseNavbar(true)
    })
    console.log('working')
    console.log(dim);

  }, [dim])


  return (
    <div className='App' ref={scrollDoc} onScroll={handleScroll}>
      <div className='comeToStart' onClick={handleScrollToFirst}>
        <ExpandLessIcon fontSize='large' />
      </div>
      <Router>
        <Navbar />
        <div className={dim ? 'dim' : ''}>
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/signin' component={Signin} />
            {/* <Route path='/order' component={Order} /> */}
            <Route path='/contact' component={Contact} />
            <Route path='/initiative' component={Initiative} />

            <Route path='/products' component={Product} />
            {/* <Route path='/cart' component={Cart} /> */}
            <Route path='/colleboration' component={Colleboration} />
            <Route path='/joinus' component={Joinus} />
            <Route path='/myorder' component={MyOrder} />

            <Route exact path="/cart" render={() => (
              !login ? (
                <Redirect to="/" />
              ) : (
                  <Cart />
                )
            )} />
            <Route path='/joinus' component={Joinus} />
            <Route path='/colleboration' component={Colleboration} />
            <Route exact path="/order" render={() => (
              !login ? (
                <Redirect to="/" />
              ) : (
                  <Order />
                )
            )} />
            <Route path='/shop' component={Shop} />
            <Route path='/' component={Home} exact />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
