import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/pages/Home'
import Order from './Components/pages/Order'
import Product from './Components/pages/Product'
import Shop from './Components/pages/Shop'
import Colleboration from './Components/pages/Colleboration'
import JoinUs from './Components/pages/JoinUs'
import Cart from './Components/pages/Cart'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import Shop from './Components/pages/Shop'
// import CartNew from './Components/pages/Cart';
import MyOrders from './Components/pages/MyOrders';

import { Provider } from 'react-redux'
import store from './Redux/Store'
function App() {
  // const scrollDoc = useRef()
  const scrollNavbar = useRef()

  const [scrollState, setScrollState] = useState(true)
  // const [hidden, setHidden] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  // const [hideNavbar, setHideNavbar] = useState(true)

  const handleScrollToFirst = () => {
    window.scrollTo(0, 0)
  }


  const handleScroll = () => {
    setScrollState(scrollDoc.current.scrollTop)
  }
  


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Provider store={store}>
      <div className='App'>
        <div className={scrollState ? 'comeToStart' : 'comeToStart signDisplay'} onClick={handleScrollToFirst}>
          <ExpandLessIcon fontSize='large' />
        </div>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <div>
            <div ref={scrollNavbar} className="app_navbar">
              <Navbar />
            </div>
            <Switch>
              <Route path='/products' component={Product} />
              <Route path='/colleboration' component={Colleboration} />
              <Route path='/joinus' component={JoinUs} />

              <Route path='/cart' component={Cart} />
              {/* <Route path='/acount' component={Orders} /> */}
              <Route path='/order' component={Order} />
              <Route path='/acount' component={MyOrders} />
              {/* <Route path='/offers' component={Orders} /> */}
              <Route path='/shop' component={Shop} exact />
              <Route path='/' component={Home} exact />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/products' component={Product} />
          <Route path='/colleboration' component={Colleboration} />
          <Route path='/joinus' component={JoinUs} />

          <Route path='/cart' component={Cart} />
          {/* <Route path='/acount' component={Orders} /> */}
          <Route path='/order' component={Order} />
          <Route path='/acount' component={MyOrders} />
          {/* <Route path='/offers' component={Orders} /> */}
          <Route path='/shop' component={Shop} exact />
          <Route path='/' component={Home} exact />
          {/* <Route path='/login' component={ window.open("http://localhost:3000/google/auth", "_self")} exactt/>
          <Route path='/logout' component={ window.open("http://localhost:3000/auth/logout", "_self")} exactt/> */}
        </Switch>
        <Footer />
      </Router>

    </Provider>
  );
  
}


export default App;


// {
//   "product_name": "product_1",
//     "price": "23,000",
//       "shot_desc": "short_desc",
//         "brief_desc": "brief_desc",
//           "thumbnail": "thumbnail",
//             "img1": "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg",
//               "img2": "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg",
//                 "img3": "https://m.media-amazon.com/images/I/71wPwmxo2NL._AC_UY218_.jpg",
//                   "stock": "true",
// }