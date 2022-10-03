import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className='container Midsec'>
       <div className='ownerInfo'>
        <img src='./images/cropped.png' alt='...' className='ownerImg'/>
        <h2 className='cateHeading'>Pradeep Vishwakarma</h2>
        <p className='cateText'>Founder of OM SECURITY SYSTEM.</p>

       </div>
        <div className='categoreis'>
            <div className='cate'>
                <h2 className='cateHeading' >Automation</h2>
                <p className='cateText'>Auto Sliding Door, Auto Swing Door, Auto Sliding Gate, Boom Barrier,
                  Industrial Doors.</p>
            </div>
            <div className='cate'>
                 <h2 className='cateHeading'>Hygiene</h2>
                 <p className='cateText'>Air Curtain, Auto Shoe Shine m/c, Fly Killer, Aerosol Dispenser, PVC Strip
                  Curtain, Auto/Manual Soap Dispenser.</p>
            </div>
            <div className='cate'>
                  <h2 className='cateHeading'>Security</h2>
                  <p className='cateText'>CCTV/Speed Dome, Biometric Access System, Video Door Phone, Fire Alarm
                  System, IP Camera System, Multi Apt. PA System, Door Interlocking, Telepone Intercom System, GPS
                  Tracking System .</p>
            </div>
        </div>
    </div>
  )
}

export default About