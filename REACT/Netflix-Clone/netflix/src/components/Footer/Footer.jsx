import React from 'react'
import "./Footer.css"
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-icons'>
            <img src={facebook_icon} alt="" />
            <img src={youtube_icon} alt="" />
            <img src={instagram_icon} alt="" />
            <img src={twitter_icon} alt="" />
        </div>
        <ul>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Center</li>
            <li>Invester Relations </li>
            <li>Jobs</li>
            <li>Terms Of Use</li>
            <li>Privacy</li>
            <li>Legal Notice</li>
            <li>Cookie Preferences</li>
            <li>Corporate Informatio</li>
            <li>Contact Us</li>
        </ul>
        <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>

    </div>
  )
}

export default Footer