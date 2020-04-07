import React from 'react';

import Navbar from './Navbar'
import Contact from '../Landing/components/Contact'
import bg from '../../assets/images/bg.jpg'

import imgf from '../../assets/images/soup.jpeg'
import './index.scss'

const items = [ {
    id: 1,
    title: "Vegetable Soup",
    range: '5,000 - 15,000 (NGN)',
    date: "14 Feb,2020"
  },
  {
    id: 2,
    title: "Ogbono Soup",
    range: '5,000 - 15,000 (NGN)',
    date: "14 Feb,2020"
  },
  {
    id: 3,
    title: "Egusi soup",
    range: '5,000 - 15,000 (NGN)',
    date: "14 Feb,2020"
  },
  {
    id: 4,
    title: "Name Soup",
    range: '5,000 - 15,000 (NGN)',
    date: "14 Feb,2020"
  },
  {
    id: 5,
    title: "Name Soup",
    range: '5,000 - 15,000 (NGN)',
    date: "14 Feb,2020"
  },
  {
    id: 6,
    title: "Name Soup",
    range: '5,000 - 15,000 (NGN)',
    date: "14 Feb,2020"
  },
  {
    id: 7,
    title: "Name Soup",
    range: '5,000 - 15,000 (NGN)',
    date: "14 Feb,2020"
  },
  {
    id: 8,
    title: "Name Soup",
    range: '5,000 - 15,000 (NGN)',
    date: "14 Feb,2020"
  },
  {
    id: 9,
    title: "Name Soup",
    range: '5,000 - 15,000 (NGN)',
    date: "14 Feb,2020"
  }
]


const Products = () =>{

    return(
        <>
        <section className='menu_page'>
        <img src={bg} alt='bg' className='bg' />
           <Navbar/>
           <div>
               <h1>Our Menu</h1>
           </div>
        </section>
        <section className='menu_content'>
        <span className='sparkle a'></span>
        <span className='sparkle b'></span>
        <span className='sparkle c'></span>
        <span className='sparkle d'></span>
        <span className='sparkle e'></span>
        <span className='sparkle f'></span>
        <span className='sparkle g'></span>
        <span className='sparkle h'></span>
        <span className='sparkle i'></span>
        <span className='sparkle j'></span>
        <span className='sparkle k'></span>
        <span className='sparkle l'></span>
        <div className='circle a1'/>
        <div className='circle b1'/>
   

            <ul>
                <li>Our Standard Large Pot comes with 18 pieces of meat, Dryfish, Stockfish, and Kpomo</li>
                <li>Our Standard Medium Pot comes with 14 pieces of meat, Dryfish, Stockfish, and Kpomo</li>
                <li>Our Standard Small Pot comes with 10 pieces of meat, Dryfish,  Stockfish, and Kpomo</li>
            </ul>

            <div className='card_container'>
            {items.map((item) => (
              <div className="blog_card" key={item.id}>
                <div className="img_container">
                  <img src={imgf} alt={"blog_pic"} />
                </div>
                <div className="post">
                  <h3 className="title">{item.title}</h3>
                  <p className="author">
                    {item.range}
                  </p>
                  <p className="details">Lorem Ipsum</p>
                </div>
              </div>
            ))}

            </div>
        </section>
        <Contact/>
        </>
    )
}


export  default Products