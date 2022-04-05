import React from 'react'
import phones from "../pics/smartphone-1.jpg"
import headphones from "../pics/headphone-3.jpg"
import pendrives from "../pics/pendrive-1.jpg"
import phonecases from "../pics/phonecase-3.jpg"
import { Link } from 'react-router-dom'


function Home() {
  return (
  <div className='products'> 
<div className='firstrow'>

<div className='card'>
<h2>Smartphones Available</h2>
<img src={phones} alt="no images seen" />
<p>Do you need quality and affordable phones? Neeba Phones And Accessories is here for you. Buy the latest phones and accessories from us.</p>
<button><Link to="/products">View Phones</Link></button>
</div>


<div className='card'>
<h2>Headphones Available</h2>
<img src={headphones} alt="no images seen" />
<p>Do you need quality and affordable phones? Neeba Phones And Accessories is here for you. Buy the latest phones and accessories from us.</p>
<button><Link to="/products">View Headphones</Link></button>
</div>
</div>
<div className='second-row'>

<div className='card'>
<h2>Pendrives Available</h2>
<img src={pendrives} alt="no images seen" />
<p>Do you need quality and affordable phones? Neeba Phones And Accessories is here for you. Buy the latest phones and accessories from us.</p>
<button><Link to="/products">View Pendrives</Link></button>

</div>

<div className='card'>
<h2>Phone Cases Available</h2>
<img src={phonecases} alt="no images seen" />
<p>Do you need quality and affordable phones? Neeba Phones And Accessories is here for you. Buy the latest phones and accessories from us.</p>
<button><Link to="/products">View Phone Cases</Link></button>
</div>


</div>

    </div>
  )
}

export default Home