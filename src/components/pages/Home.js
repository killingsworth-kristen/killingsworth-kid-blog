import React from 'react';
import Footer from './../Footer.js'
import './../style/Home.css'



export default function Home () {
    return (
        <>
            <section className='home-container'>
                <div className='home-title'>
                    <h1 className='baby-h1'>We are Having a Baby!</h1>
                </div>
                <div className='home-images-container'>
                    <img src='./../assets/img/Katie-family.png' alt='family of two with two dogs' id='family' className='home-images'/>
                    <img src='./../assets/img/Katie-Sonogram.png' alt='sonogram' id='sonogram' className='home-images'/>
                </div>
                <div className='home-registries'>
                    <h3>Registries coming soon!</h3>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}