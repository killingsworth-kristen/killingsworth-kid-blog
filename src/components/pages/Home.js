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
                    <a className='registry-link'href='https://www.amazon.com/baby-reg/katie-killingsworth-september-2023-mountvernon/1CVVULI4M5TUA' target="_blank">Click Here for Registry</a>
                </div>
                <footer>
                    <Footer />
                </footer>
            </section>

        </>
    )
}