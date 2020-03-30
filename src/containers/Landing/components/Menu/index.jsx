import React from 'react';

import soup from '../../../../assets/images/soup.jpeg'

import './index.scss'

const Menu = () => {

    return (
        <>
            <section className='menu_section'>
                <img src={soup} alt='bg' className='bg' />
                <div className='info_menu'>
                    <h1>Our Menu</h1>
                    <p>Lorem ipsum dolor jrijgfr rgrljgorrgrgig rgrigirgj ngr grgi
                    iewop gkwbnk grgrg gyyo wugt rthot ;mmbhgjhih knbb lb hig....</p>
                </div>
                <div className='info_btn'>
                    <button>Menu</button>
                </div>
            </section>
        </>
    )
}

export default Menu