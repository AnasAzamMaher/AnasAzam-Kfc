import React from 'react'
import '../App.css'

export default function Header({cartCounter}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="mx-auto">
                    <a className="navbar-brand" href="#">KFC</a>
                    <button type="button" class="custom-btn1 "><span className='title'>Deleievry</span></button>
                    <button type="button" class="custom-btn2 ms-2"><span className='title'>Pickup</span></button>
                    <button className="cart-btn" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#cartviewoffcanvasRight" 
                        aria-controls="offcanvasRight">Cart Items({cartCounter})</button>
                </div>
            </nav>

        </>
    )
}
