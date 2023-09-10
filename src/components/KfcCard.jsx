import React from 'react'
import '../App.css'
import swal from "sweetalert2"

export default function KfcCard({ item, addToCart }) {

  const sweetalert = () => {
    swal.fire({
      title: "Item added to cart",
      icon: "success"
    });
  }

  return (
    <div className='col'>
      <div className="card w-100 mx-auto" style={{ width: "18rem" }}>
        <img src={item.img} className="card-img-top" alt="ItemCard" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.desc}</p>
          <a className='price-btn'>{item.price}</a>
          <a className="btn btn-primary" onClick={() => { addToCart(item);   sweetalert() }}>Add to Cart</a>
        </div>
      </div>
    </div>
  )
}
