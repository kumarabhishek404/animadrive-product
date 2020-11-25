import './Navbar.css'
import { logAction } from '../Redux';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Redirect } from 'react-router-dom';
// import SvgIcon from '@material-ui/core/SvgIcon';
import PetIcon from '@material-ui/icons/Pets';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Axios from 'axios';

function Navbar(props) {

    const [click, setClick] = useState(false)
    const [search, setSearch] = useState(false)
    const [signmenu, setSignmenu] = useState(false)
    const [formmenu, setFormmenu] = useState(false)
    const login = useSelector(state => state.login)
    const message = useSelector(state => state.message)


    const openSignInMenu = () => {
        setSignmenu(!signmenu)
    }

    const openFormMenu = (e) => {
        setFormmenu(true)
        setSignmenu(false)
    }

    const closeFormMenu = (e) => {
        setFormmenu(false)
        setSignmenu(false)
    }

    const closeButtonHandler = () => {
        setClick(!click)
        setSearch(false)
    }
    const closeMenuHandler = () => {
        window.scrollTo(0, 0)
        setClick(false)
        setSignmenu(false)
        setFormmenu(false)
    }
    const handleSearchAnimation = () => {
        setSearch(!search)
        setClick(false)
    }
    const handleLogIN = () => {
        window.open("http://52.66.234.240:4000/google/auth", "_self");
        setFormmenu(false)
    }

    const handleLogOUT = () => {
        window.open("http://52.66.234.240:4000/logout", "_self");
        props.logAction(false)
        setSignmenu(false)
        setFormmenu(false)
    }

    useEffect(() => {
        Axios.get("http://52.66.234.240:4000/authSuccess", { withCredentials: true })
            .then(response => {
                console.log(response.status)
                if (response.status === 200) {
                    Axios.defaults.headers.common['Authorization'] = response.data.token;
                    props.logAction(response.data)
                }
                else {
                    alert('alert')
                    props.logAction(false)

                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [])



    return (
        <>
            <nav className='navbar'>
                <div className='navbar_container'>
                    <Link to='/' className='navbar_logo' onClick={closeMenuHandler}>
                        <div className='logo_image'>
                            <img src='/Images/logo2.png' />
                        </div>
                    </Link>
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
                            <div className='crossCancel'>
                                <CloseIcon fontSize='large' style={{ color: "white", fontSize: "70" }} onClick={closeMenuHandler} />
                            </div>
                            <li className='nav_item'>
                                <Link to='/' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Home
                            </Link>
                            </li>
                            <li className='nav_item'>
                                <Link to='/shop' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Shop
                            </Link>
                            </li>
                            <li className='nav_item'>
                                <Link to='/contact' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Contact
                            </Link>
                            </li>
                            <li className='nav_item'>
                                <Link to='/initiative' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Initiative
                            </Link>
                            </li>
                            {/* <li className='nav_item'>
                                <Link to='/joinus' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Join Us
                            </Link>
                            </li>
                            <li className='nav_item'>
                                <Link to='/colleboration' className='navbar_links_item' onClick={closeMenuHandler}>
                                    Colleboration
                            </Link>
                            </li> */}
                            <li className='nav_item'>
                                <div className='dropdown'>
                                    <div className='navbar_links_item dropdown_btn'>
                                        <div onClick={openFormMenu}>
                                            Join
                                            <div className={(formmenu) ? 'dropdown_content_active' : 'dropdown_content'}>
                                                <div className='dropdown_content_container'>
                                                    <Link to='/joinus' className='dropdown_content_item' onClick={closeButtonHandler} >
                                                        Join as Team
                                        </Link>
                                                    <Link to='/colleboration' className='dropdown_content_item' onClick={closeButtonHandler} >
                                                        Colleboration
                                        </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={login ? 'nav_item' : 'nav_item hidden'}>
                                <div className='navbar_links_item' onClick={handleLogOUT}>
                                    LogOut
                                </div>
                            </li>
                            <li className='nav_item'>
                                <div className='dropdown'>
                                    <div className='navbar_links_item dropdown_btn' onClick={handleLogIN}>
                                        <div onClick={openSignInMenu}>
                                            {(login) ? 'Profile' : 'SignUp'}
                                            <div className={(signmenu) ? 'dropdown_content_active' : 'dropdown_content'}>
                                                <div className='dropdown_content_container'>
                                                    <Link to='/myorder' className='dropdown_content_item' onClick={closeButtonHandler} >
                                                        Your Orders
                                        </Link>
                                                </div>
                                                <div className='register_container'>
                                                    <CloseIcon className='signmenu_close_btn' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <ExpandMoreIcon className='dropdown_symbol' /> */}
                                </div>
                            </li>
                            <li className='nav_item'>
                                <div className='nav_menu_boxer'>
                                    <Link to='/cart' className='navbar_links_item cart_image' onClick={closeMenuHandler}>
                                        <ShoppingCartIcon fontSize='large' style={{ fontSize: 60 }} />
                                    </Link>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

// export default Navbar
export default connect(null, { logAction })(Navbar);