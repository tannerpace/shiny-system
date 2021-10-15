import React from 'react'

export default function Contact() {
    return (

        <section id="contact" class="contact-section">
            <div class="contact-section-header">
                <h2>Get in touch to chat about a project!</h2>
                <p className='chat'>Please leave me a voice mail</p>
                <p className='chat'>Say hi!</p>

            </div>
            <div class="contact-links">

                <a id="profile-link" href="https://github.com/tannerpace" target="_blank" class="btn contact-details" rel="noreferrer"><i
                    class="fab fa-github"></i> GitHub</a>

                <a href="mailto:tannerpace@gmail.com" class="btn contact-details"><i class="fas fa-at"></i> Send an
                    email</a>
                <a href="tel:8435139583" class="btn contact-details"><i class="fas fa-mobile-alt"></i> Call me</a>
            </div>
        </section>

    )
}

