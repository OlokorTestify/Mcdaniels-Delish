import React from 'react'

import Header from './components/Header'
import What from './components/What'
import Why from './components/Why'
import Services from './components/Services/index'
import Team from './components/Team/index'
import Gallery from './components/Gallery'
import Contact from './components/Contact'



const Landing = () => {

    return (
        <>
            <Header />
            <What />
            <Why />
            <Services />
            <Team />
            <Gallery />
            <Contact />
        </>
    )
}

export default Landing