import React from 'react';
import { Link } from 'react-router-dom'

import soup from '../../../../assets/images/soup.jpeg'

import './index.scss'

const Menu = () => {

    return (
        <>
            <section className='menu_section'>
                <img src={soup} alt='bg' className='bg' />
                <div className='info_menu'>
                    <h1>Our Menu</h1>
                    <p>Our menu list consists of delicacies from different tribes in Nigeria. We handle the food preparation, setup and clean up.</p>
                </div>
                <div className='info_btn'>
                    <button><Link to='/menu'>Menu</Link> </button>
                </div>
            </section>
        </>
    )
}

export default Menu