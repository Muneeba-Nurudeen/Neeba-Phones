import React from 'react'
import phone1 from "../pics/smartphone-1.jpg"
import phone2 from "../pictures/smartphone-2.jpg"
import phone3 from "../pictures/smart phone-3.jpg"

function Products() {
  return (
    <div>
    <div className='firstrow'>

<div className='card'>
<h2>Tecno</h2>
<img src={phone1} alt="no images seen" />
<p>Ghc995</p>
<button>Buy Me</button>
</div>

<div className='card'>
<h2>Infinix</h2>
<img src={phone2} alt="no images seen" />
<p>Ghc845</p>
<button>View Phones</button>
</div>


<div className='card'>
<h2>Samsung</h2>
<img src={phone3} alt="no images seen" />
<p>Ghc1345</p>
<button>View Phones</button>
</div>

</div>
<div className='first row headphones'></div>
<div className='pendrives'></div>
<div className='pendrives'></div>

</div>

  )
}

export default Products