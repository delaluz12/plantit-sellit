import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './landingSlide.css';
// import { Paper, Button } from '@mui/material'

function LandingSlide(props) {

    const SlideImages = [
        {
          url: '../assets/pt2.png',
          caption: 'Sell your produce'
        },
        {
          url: '../assets/pt1.png',
          caption: 'Trade propagations'
        },
        {
          url: '../assets/pt3.png',
          caption: 'Find community'
        },
      ]; 

    return (
        <div>
            <Carousel 
            next={ () => {/* Do stuff */} }
            prev={ () => {/* Do other stuff */} }>
            {SlideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>
                  <p className="names">
                    {slideImage.caption}
                  </p>  
                </span>
              </div>
            </div>
          ))} 
        </Carousel>

        </div>
    )
}

export default LandingSlide