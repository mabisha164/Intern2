import React from 'react'


const Flowers=(props) =>{
    console.log(props);
  return (
  <>
  <div className='cards'>
        <h2>Rose</h2>
        <img src= {require('./images/licensed-image.jpeg')}alt="rose"/>
        <p>The flowers of most species have five petals, with the exception of Rosa omeiensis and Rosa sericea, which usually have only four. Each petal is divided into two distinct lobes and is usually white or pink, though in a few species yellow or red. Beneath the petals are five sepals (or in the case of some Rosa omeiensis and Rosa sericea, four). These may be long enough to be visible when viewed from above and appear as green points alternating with the rounded petals. There are multiple superior ovaries that develop into achenes.[5] Roses are insect-pollinated in nature.</p>
        
        <button>Read more</button>
        <hr/>
      </div>
  </>
  )
}

export default Flowers
