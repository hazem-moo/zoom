import React, { useState, useEffect, useRef } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { NavLink as MyLink, Link } from 'react-router-dom'
import './MyNav.css'

const MyNav = () => {

    const searchRef = useRef()
    const [ isOpen, setIsOpen ] = useState( false );
    const [ isShow, setIsShow ] = useState( false )

    const toggle = _ => setIsOpen( !isOpen );
    const showSearch = _ => setIsShow( !isShow )

    return (
        <Navbar expand='md' light>
            <div className="container overlay" >
                <NavbarBrand to='/' exact tag={ Link } > zoom </NavbarBrand>
                <NavbarToggler onClick={ toggle } >
                    <i className={ `fas ${ isOpen ? "fa-times" : "fa-bars"}` } ></i>
                </NavbarToggler>
                <Collapse isOpen={ isOpen } navbar >
                    <Nav className='ms-auto'  navbar >
                        <NavItem>
                            <NavLink onClick={ toggle } to='/' exact tag={ MyLink } > home </NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink onClick={ toggle } to='/Destinations' tag={ MyLink } > destinations </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink onClick={ toggle } to='/Tours' tag={ MyLink } > tours </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink onClick={ toggle } to='/WhatWeOffer' tag={ MyLink } > what we offer </NavLink>
                        </NavItem>
    
                        <form className={` search mt-2 me-3 ${isShow ? 'd-inline' : "d-none" } `} ref={ searchRef }>
                            <input type="search" />
                            </form>
                        <i class="fas fa-search" onClick={ showSearch } ></i>   
                    </Nav>
                </Collapse> 
            </div>
        </Navbar>
    )
}

export default MyNav
