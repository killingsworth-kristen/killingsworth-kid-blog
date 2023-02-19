import React from 'react';
import './../style/Poll.css'

export default function Poll () {
    return (
        <>
        <section className='poll-container'>
        <div className='iframe-container'>
            <iframe className="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSfRy9FkVlq5VdMT7aKs73MvrBxOdSNY1Y3jsDCbqTgDqNzKKA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>

        </section>
        </>
    )
}