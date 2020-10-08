import './Navbar.css'
import React, { useState, useRef } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Route, Redirect } from 'react-router-dom';
// import SvgIcon from '@material-ui/core/SvgIcon';
import PetIcon from '@material-ui/icons/Pets';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Navbar() {
    const [click, setClick] = useState(false)
    const [search, setSearch] = useState(false)
    const [signmenu, setSignmenu] = useState(false)
    const [authenticate, setAuthenticate] = useState(true)
    const [windowScroll, setWindowScroll] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState()
    const [currentScrollPos, setCurrentScrollPos] = useState()
    const scrollNavbar = useRef()

    const openSignInMenu = (e) => {
        setSignmenu(!signmenu)
    }

    const closeButtonHandler = () => {
        setClick(!click)
        setSearch(false)
    }
    const closeMenuHandler = () => {
        setClick(false)
    }
    const handleSearchAnimation = () => {
        setSearch(!search)
        setClick(false)
    }
    const handleLogOut = () => {
        setClick(false)
        setAuthenticate(false)
    }

    // window.onscroll = () => {
    //     setPrevScrollPos(window.pageYOffset)
    //     if (prevScrollPos > 100) {
    //         console.log(prevScrollPos);
    //         scrollNavbar.current.style.top = '-80px';
    //     }
    //     else {
    //         scrollNavbar.current.style.top = '0px';
    //     }
    //     // alert("scrolling navbar")
    //     // setCurrentScrollPos(window.pageYOffset)
    //     // if (prevScrollPos > currentScrollPos) {
    //     //     scrollNavbar.current.style.top = '0';
    //     // }
    //     // else {
    //     //     scrollNavbar.current.style.top = '-40px';
    //     // }
    //     // prevScrollPos = currentScrollPos

    // }

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     var currentScrollpos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollpos) {
    //         scrollNavbar.current.style.top = "0";
    //     }
    //     else {
    //         scrollNavbar.current.style.top = "-80px"
    //     }
    //     prevScrollpos = currentScrollpos
    // }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar_container'>
                    <Link to='/' className='navbar_logo' onClick={closeMenuHandler}>
                        <div><PetIcon className='petIcon' fontSize="large" /></div>
                    </Link>
                    {/* <div className='search_Bar' onClick={closeSearchHandler}>
                        {search ? <CloseIcon fontSize='large' /> : <SearchIcon fontSize='large' />}
                    </div> */}
                    <div className='navbar_menu_icon' onClick={closeButtonHandler}>
                        {click ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
                    </div>
                    <div className={search ? 'search_box active' : 'search_box'}>
                        <div className={search ? 'active_navbar_search_input' : 'navbar_search_input'}>
                            <form>
                                <input type='text' className='search' placeholder='Explore products...' />
                            </form>
                        </div>
                        <div className='search_bar_icon' onClick={handleSearchAnimation}>
                            <SearchIcon fontSize='large' />
                        </div>
                    </div>
                    <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                        <div className='nav_menu_box'>
                            {/* <div className='search_Bar' onClick={closeSearchHandler}>
                                {search ? <CloseIcon fontSize='large' /> : <SearchIcon fontSize='large' />}
                            </div> */}
                            <li className='nav_item'>
                                <Link to='/' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Home
                            </Link>
                            </li>
                            <li className='nav_item'>
                                <Link to='/products' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Products
                            </Link>
                            </li>
                            <li className='nav_item'>
                                <Link to='/joinus' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Join Us
                            </Link>
                            </li>
                            <li className='nav_item'>
                                <Link to='/colleboration' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Colleboration
                            </Link>
                            </li>
                            <li className='nav_item'>
                                <div className='dropdown'>
                                    <Link className='navbar_links_item dropdown_btn' onClick={openSignInMenu}>
                                        {(authenticate) ? <PersonOutlineIcon /> : 'SignUp'}
                                        <div className={(signmenu && authenticate) ? 'dropdown_content_active' : 'dropdown_content'}>

                                            <div className='dropdown_content_container'>
                                                {/* <h3>Your Acount</h3> */}
                                                {/* <Link to='/acount' className='dropdown_content_item' onClick={closeButtonHandler}>
                                                    Your Acount
                                        </Link> */}
                                                <Link to='/acount' className='dropdown_content_item' onClick={closeButtonHandler} >
                                                    Your Orders
                                        </Link>
                                                {/* <Link to='/acount' className='dropdown_content_item' onClick={closeButtonHandler} >
                                                    Your Offers
                                        </Link> */}
                                            </div>
                                            <hr />
                                            <div className='register_container'>
                                                <Link to='/signin' onClick={handleLogOut}>
                                                    <Route exact path='/signin'>
                                                        {!authenticate ? <Redirect to='/' /> : null}
                                                    </Route>
                                                    <button>LogOut</button>
                                                </Link>
                                                <CloseIcon className='signmenu_close_btn' />
                                                {/* <div className='register_newuser'>
                                                    <h6>New customer?</h6>
                                                    <span>
                                                        <Link to='/register' onClick={closeButtonHandler}>
                                                            Start here.
                                                        </Link>
                                                    </span>
                                                </div> */}
                                            </div>
                                        </div>
                                    </Link>
                                    {/* <ExpandMoreIcon className='dropdown_symbol' /> */}
                                </div>
                            </li>
                            <div className='nav_menu_boxer'>
                                <Link to='/cart' className='navbar_links_item cart_image'>
                                    <ShoppingCartIcon fontSize='large' />
                                </Link>
                                {/* <li className='nav_item'>
                                <Link to='/register' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Register
                            </Link>
                            </li>
                            <li className='nav_item signIn'>
                                <Link to='/signin' className='navbar_links_item' onClick={closeMenuHandler}>
                                    SignIn
                            </Link>
                            </li> */}
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
