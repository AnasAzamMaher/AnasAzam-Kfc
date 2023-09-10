import React from 'react'
import KfcCard from './KfcCard'

import '../App.css'

export default function Products({addToCart , items}) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4 center"> 
        {
          items.map(item => <KfcCard key={item.id} item={item}  addToCart={addToCart}/>)
        }
      </div>
    </>
  )
}
