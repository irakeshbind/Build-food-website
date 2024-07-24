import React from 'react'
import img20 from './images/img20.jpg';
function CustomerReview(props) {
return (
<>
<div className="card-heading">
<h1>{props.name}</h1>
</div>


<div className="review-con" id="obj">
<div className="review">
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla dolor esse, minus id consequatur exercitationem. Eligendi libero atque, dolorem veritatis sed accusamus reiciendis illum voluptates iste fugiat. Debitis, repellat!
</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla dolor esse, minus id consequatur exercitationem. Eligendi libero atque, dolorem veritatis sed accusamus reiciendis illum voluptates iste fugiat. Debitis, repellat!
</p>

<div className='flex-w'>
<div className="review-img">
<img src={img20} alt="" />
</div>
<div className='flex-f'>
<h5>Dorimon</h5>
</div>
</div>
</div>


<div className="review">
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla dolor esse, minus id consequatur exercitationem. Eligendi libero atque, dolorem veritatis sed accusamus reiciendis illum voluptates iste fugiat. Debitis, repellat!
</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla dolor esse, minus id consequatur exercitationem. Eligendi libero atque, dolorem veritatis sed accusamus reiciendis illum voluptates iste fugiat. Debitis, repellat!
</p>
<div className='flex-w'>
<div className="review-img">
<img src={img20} alt="" />
</div>
<div className='flex-f'>
<h5>Dorimon</h5>
</div>
</div>
</div>

<div className="review">
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla dolor esse, minus id consequatur exercitationem. Eligendi libero atque, dolorem veritatis sed accusamus reiciendis illum voluptates iste fugiat. Debitis, repellat!
</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nulla dolor esse, minus id consequatur exercitationem. Eligendi libero atque, dolorem veritatis sed accusamus reiciendis illum voluptates iste fugiat. Debitis, repellat!
</p>

<div className='flex-w'>
<div className="review-img">
<img src={img20} alt="" />
</div>
<div className='flex-f'>
<h5>Dorimon</h5>
</div>
</div>
</div>

</div>

</>
)
}

export default CustomerReview
