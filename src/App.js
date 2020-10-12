import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import { Provider } from 'react-redux';
import store from './Redux/Store'
// import CartNew from './Components/Cart/Cart';



function App() {
  const scrollDoc = useRef()
  const [scrollState, setScrollState] = useState()

  const handleScrollToFirst = () => {
    window.scrollTo(0, 0)
    // scrollDoc.current.scrollTo(0, 0)
  }

  const handleScroll = () => {
    setScrollState(scrollDoc.current.scrollTop)
  }


  // document.onscroll = () => {
  //   console.log("scrolling window")
  // }

  return (
    <Provider store={store}>
      <div className='App' ref={scrollDoc} onScroll={handleScroll}>
        <div className='comeToStart' onClick={handleScrollToFirst}>
          <ExpandLessIcon fontSize='large' />
        </div>
        <Router>
          <Navbar />

          <Switch>
            <Route path='/products' component={Product} />
            <Route path='/register' component={Register} />
            <Route path='/signin' component={Signin} />

            <Route path='/cart' component={Cart} />
            <Route path='/joinus' component={Joinus} />
            <Route path='/colleboration' component={Colleboration} />
            <Route path='/order' component={Order} />
            <Route path='/shop' component={Shop} />
            {/* <Route path='/offers' component={Orders} /> */}
            <Route path='/' component={Home} exact />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
