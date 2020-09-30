import './Navbar.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SvgIcon from '@material-ui/core/SvgIcon';
import PetIcon from '@material-ui/icons/Pets';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Navbar() {
    const [click, setClick] = useState(false)
    const [search, setSearch] = useState(false)
    const [signmenu, setSignmenu] = useState(false)

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
    const closeSearchHandler = () => {
        setSearch(!search)
        setClick(false)
    }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar_container'>
                    <Link to='/' className='navbar_logo' onClick={closeMenuHandler}>
                        <div><PetIcon className='petIcon' fontSize="large" /></div>
                    </Link>
                    <div className='search_Bar' onClick={closeSearchHandler}>
                        {search ? <CloseIcon fontSize='large' /> : <SearchIcon fontSize='large' />}
                    </div>
                    <div className='navbar_menu_icon' onClick={closeButtonHandler}>
                        {click ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
                    </div>
                    <div className={search ? 'navbar_search active' : 'navbar_search'}>
                        <form>
                            <input type='text' className='search' />
                        </form>
                    </div>
                    <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                        <div className='nav_menu_box'>

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
                                <div className='dropdown'>
                                    <Link className='navbar_links_item dropdown_btn' onClick={openSignInMenu}>
                                        SignIn
                                    <div className={signmenu ? 'dropdown_content_active' : 'dropdown_content'}>
                                            <div className='register_container'>
                                                <Link to='/signin' onClick={closeButtonHandler}>
                                                    <button>SignIn</button><ExpandMoreIcon className='dropdown_symbol' />
                                                </Link>
                                                <CloseIcon className='signmenu_close_btn' onClick={closeButtonHandler} />
                                                <div className='register_newuser'>
                                                    <h6>New customer?</h6>
                                                    <span>
                                                        <Link to='/register' onClick={closeButtonHandler}>
                                                            Start here.
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='dropdown_content_container'>
                                                <h3>Your Acount</h3>
                                                <Link to='/acount' className='dropdown_content_item' onClick={closeButtonHandler}>
                                                    Your Acount
                                        </Link>
                                                <Link to='/orders' className='dropdown_content_item' onClick={closeButtonHandler} >
                                                    Your Orders
                                        </Link>
                                                <Link to='/offers' className='dropdown_content_item' onClick={closeButtonHandler} >
                                                    Your Offers
                                        </Link>
                                            </div>
                                        </div>
                                    </Link>
                                    <ExpandMoreIcon className='dropdown_symbol' />
                                </div>
                            </li>
                        </div>
                        <div className='nav_menu_box'>
                            <Link to='/cart' className='navbar_links_item'>
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
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
