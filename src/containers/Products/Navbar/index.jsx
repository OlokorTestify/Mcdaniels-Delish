import React from 'react';

import { withRouter } from 'react-router-dom'

import Logo from '../../../assets/images/r.svg'

import './index.scss'
const Navbar = (props) => {



    const style = {
        backgroundColor: 'unset',
        boxShadow: 'unset',
        transition: '100ms ease',
        position: 'relative',
        zIndex: 99,
        right: 0,
        left: 0,
        top:'20px',
    };
    const navStyle = {
        marginBottom: '30px',
        marginTop: '0px',
        transition: 'all 0.5s',
        paddingTop: '0px'
    }

    return (
        <>
            <div className="nav_cont" style={style}>
                <nav className='nav2' style={navStyle}>
                    <div className='logo' onClick={() => {
                        props.history.push('/')
                    }} >
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='nav_items'>
                        <div className='nav_item'>
                            <a href='#Contact'>Contact Us</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default withRouter(Navbar)
