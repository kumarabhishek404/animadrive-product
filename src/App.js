import React, { useEffect, useRef } from 'react';
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

function App() {
  const scrollDoc = useRef(null)

  const handleScroll = () => {
    alert('alert')
    // window.scrollTo(0, 0)
    // const y = window.scrollY;
    // if (y == 400) {
    //   alert("alert")
    // }
    // const elem = scrollDoc.current;
    // elem.scrollBy(0, 0)
    // const x = elem.scrollLeft;
    // const y = elem.scrollTop;
    // console.log(x, y);
  }
  const x = window.scrollX;
  useEffect((x) => {
    window.addEventListener('scroll',
      alert('alert'))
  }, [x])

  return (
    <div className='App' onScroll={handleScroll} ref={scrollDoc}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/products' component={Product} />
          <Route path='/register' component={Register} />
          <Route path='/signin' component={Signin} />

          <Route path='/cart' component={Cart} />
          {/* <Route path='/acount' component={Orders} /> */}
          <Route path='/order' component={Order} />
          {/* <Route path='/offers' component={Orders} /> */}
          <Route path='/' component={Products} exact />
        </Switch>
        <button onClick={handleScroll}>Scroll</button>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
