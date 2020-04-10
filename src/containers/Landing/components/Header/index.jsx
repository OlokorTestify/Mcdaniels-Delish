import React from 'react';
import { Link } from 'react-router-dom'

import NavBar from '../Navbar'

import img1 from '../../../../assets/images/egusi.jpg'

import './index.scss';

const Header = (props) => (
    <>
        <section className='header'>
            <div className='bg' />
            <NavBar />
            <div className='main'>
                <div>
                    <h1>McDaniels Delish Kitchen</h1>
                    <p className='slogan'>...We cater different,we do it awesome...</p>
                    <p>...Catering and cooking services...You are in charge,you simply tell us what to do and we do it</p>
                    <div className='btn_container'>
                        <button> <a href='#Contact'>Contact us</a> </button>
                        <button><Link to='/menu'>Menu list</Link> </button>
                    </div>
                </div>
                <div>
                    <img src='https://i.ytimg.com/vi/E59Hc3FfL3w/maxresdefault.jpg' alt='egusi_soup' />
                </div>
            </div>
        </section>
    </>
);

export default Header