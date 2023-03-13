import React from 'react';
import Footer from './../Footer.js'
import './../style/Poll.css'

export default function Poll () {
    return (
        <>
        <section className='poll-container'>
            <div className='poll-title-container'>
                <h3 className='poll-title'>Win a prize if you have the most correct/closest guesses about the baby!</h3>
            </div>
            <div className='iframe-container'>
            <iframe className="iframe" title="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfRy9FkVlq5VdMT7aKs73MvrBxOdSNY1Y3jsDCbqTgDqNzKKA/viewform?embedded=true" width="640" height="986" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </section>
        <footer>
            <Footer />
        </footer>
        </>
    )
}