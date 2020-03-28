import React from 'react';
import './index.scss';
import Mercy from '../../../../assets/images/x.jpeg'
import Jane from '../../../../assets/images/ji.jpeg'
import Doe from '../../../../assets/images/jj.jpeg'
import John from '../../../../assets/images/lo.jpg'

const Team = () => (
    <>
        <section className='Main'>
            <h1>Our Team..</h1>
            <div>
            <img className='imge' src={Mercy} alt='Mercy' />
            <img className='imge' src={Jane} alt='Jane' />
            <img className='imge' src={Doe} alt='Doe' />
            <img className='imge' src={John} alt='John' />
            </div>
        </section>
    </>
)

export default Team;