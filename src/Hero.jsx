import React from 'react'
import img2 from './images/img2.jpeg';
function Hero() {
return (
<div className='hero-img' >
    <div className="content" id="obj">
        <h1>Evaluate Your Inner<br/> foodie with Every<br/> Bite.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Aliquid, veritatis doloribus molestias mollitia <br/>laudantium molestiae fugit laborum possimus. Id, a!</p>
        <button className='button-w'>learning</button>
        </div>
<img src={img2} alt="" />

</div>
)
}

export default Hero
