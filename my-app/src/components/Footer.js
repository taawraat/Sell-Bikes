import React from 'react'
import './Footer.css';
import './css/all.css';


function footer() {
    return (
        <div class="mt-4">
            <section id="footer">
                <div class="socials">
                    <a href="/"><i class="fab fa-instagram"></i></a>
                    <a href="/"><i class="fab fa-snapchat"></i></a>
                    <a href="/"><i class="fab fa-twitter"></i></a>
                    <a href="/"><i class="fab fa-facebook"></i></a>
                </div>
                <ul class="links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Terms</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
                <p>&copy; Tawraat & Emon</p>
            </section>
        </div>
    )
}

export default footer
