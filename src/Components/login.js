// import { Link,Route, Redirect  } from "react-router-dom";
// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import CloseIcon from '@material-ui/icons/Close';
// // import { Link, Route, Redirect } from 'react-router-dom';


// export default class Header extends Component {
//   static propTypes = {
//     authenticateddd: PropTypes.bool.isRequired
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       click: false,
//       search: false
//     };
//   }

//   closeButtonHandler = () => {
//         this.setState.click=!(this.state.click)
//         this.setState.search=false
//     }

//   render() {
// //       let auth=window.authenticated
// //    this.setState({ authenticated: auth})
//     return (
//         <div>
//       {/* <ul className="menu">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {authenticateddd ? (
//           <li onClick={this._handleLogoutClick}>Logout</li>
//         ) : (
//           <li onClick={this._handleSignInClick}>Login</li>
//         )}
//       </ul> */}
//       <Link className='navbar_links_item dropdown_btn' >
//       {(window.authenticated) ? <PersonOutlineIcon /> : <li onClick={this._handleSignInClick}>Sign in</li>}
//       <div className={(window.authenticated) ? 'dropdown_content_active' : 'dropdown_content'}>

//           <div className='dropdown_content_container'>
//               <Link to='/acount' className='dropdown_content_item' onClick={this.closeButtonHandler}>
//                   Your Orders
//       </Link>
//           </div>
//           <hr />
//           <div className='register_container'>
//               <Link to='/signin' >
//                   <Route exact path='/signin'>
//                       {!window.authenticated ? <Redirect to='/' /> : null}
//                   </Route>
//                   <button onClick={this._handleSignInClick}>LogOut</button>
//               </Link>
//               <CloseIcon className='signmenu_close_btn' />
//           </div>
//       </div>
//   </Link>
//   </div>
//     );
//   }

//   _handleSignInClick = () => {
//     // authenticatedd using via passport api in the backend
//     // Open Twitter login page
//     // Upon successful login, a cookie session will be stored in the client
//     window.open("http://localhost:3000/google/auth", "_self");
//   };

//   _handleLogoutClick = () => {
//     // Logout using Twitter passport api
//     // Set authenticateddd state to false in the HomePage
//     window.open("http://localhost:3000/logout", "_self");
//     this.props.handleNotauthenticateddd();
//   };
// }
