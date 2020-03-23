import React from 'react';

import NavBar from '../Navbar'

import img1 from '../../../../assets/images/egusi.jpg'

import './index.scss';

const Header = () => (
    <>
        <section className='header'>
            <div className='bg' />
            <NavBar />
            <div className='main'>
                <div>
                    <h1>McDaniel's Delish Kitchen</h1>
                    <p className='slogan'>...We cater different,we do it awesome...</p>
                    <p>...Catering and cooking services...You are in charge,you simply tell us what to do and we do it</p>
                    <button>Contact Us</button>
                </div>
                <div>
                    <img src={img1} alt='egusi_soup' />
                </div>
            </div>
        </section>
    </>
)

export default Header