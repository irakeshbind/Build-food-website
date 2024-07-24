import React from 'react'
import img1 from './images/gg1.jpg';
function Middle(props) {
return (
<>
<div className='card'>
<h1>{props.name}</h1>
</div>
<div className="mid-w" id='obj'>
<div className="imgtext">
<img src={img1} alt="" />
</div>

<div className="text1" >
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempore rem et ullam, expedita sed sapiente minus nam amet, unde ex. Quidem fugiat modi est magnam mollitia dolorum minus magni obcaecati! Quibusdam blanditiis voluptas ea at laborum perferendis consectetur temporibus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempore rem et ullam, expedita sed sapiente minus nam amet, unde ex. Quidem fugiat modi est magnam mollitia dolorum minus magni obcaecati! Quibusdam blanditiis voluptas ea at laborum perferendis consectetur temporibus.</p>
<button className='w-btn1'>learn more</button>
</div>
</div>
</>
)
}

export default Middle
