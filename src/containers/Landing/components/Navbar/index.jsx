import React, { useState } from 'react';


import useWindowScrollPosition from '@rehooks/window-scroll-position'

import Logo from '../../../../assets/images/r.svg'

import './index.scss'
const Navbar = (props) => {


    const [change, setChange] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const changePosition = 985

    const position = useWindowScrollPosition()

    if (position.y > changePosition && !change) {
        setChange(true);
    }

    if (position.y <= changePosition && change) {
        setChange(false);
    }


    const style = {
        backgroundColor: change ? 'white' : 'unset',
        boxShadow: change ? '0px 2px 13px -4px rgba(0,0,0,0.15)' : 'unset',
        transition: '100ms ease',
        position: change ? 'fixed' : 'relative',
        zIndex: 99,
        right: 0,
        left: 0,
        top: '20px',
    };
    const navStyle = {
        marginBottom: change ? '15px' : '30px',
        marginTop: change ? '15px' : '0px',
        transition: 'all 0.5s',
        paddingTop: change ? 0 : '0px'
    }

    return (
        <>
            <div className="nav_container" style={style}>
                <nav className='nav' style={navStyle}>
                    <div className='logo' onClick={() => {
                        console.log('clicked')
                    }} >
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='nav_items'>
                        <div className='nav_item'>
                            <a href='/'>About Us</a>

                        </div>
                        <div className='nav_item'>
                            <a href='/blog'>Why Us</a>
                        </div>
                        <div className='nav_item'>
                            <a href='#contact_form'>Contact Us</a>
                        </div>
                    </div>
                    {/* <div className="hamburger" onClick={() => setIsActive(!isActive)}>
                        <img src={Hamburger} alt="menu_icon" />
                    </div> */}
                </nav>
                {/* <SideNav isActive={isActive} onClose={() => setIsActive(!isActive)} /> */}
            </div>
        </>
    )
}

export default Navbar
