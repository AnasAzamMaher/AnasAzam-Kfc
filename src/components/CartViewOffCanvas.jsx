import React, { useEffect, useState } from 'react'
import '../App.css'


export default function CartViewOffCanvas({ cartItems, setCartItems }) {
    let [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cartItems.map((item) => {
            ans += item.amount * item.price;
        })
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cartItems.filter((item) => item.id !== id);
        setCartItems(arr);
    }

    useEffect(() => {
        handlePrice();
    })
    let [counter, setcounter] = useState(1);


    const handleIncrement = () => {
        setcounter(counter + 1);
    }
    const handleDecrement = () => {
        setcounter(counter - 1);
    }
    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartviewoffcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart Items</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    {
                        cartItems?.map((item) =>
                            <div className='cart-box' key={item.id}>
                                <div className='cart-img'>
                                    <img src={item.img} alt="cart-img" />
                                    <p>{item.title}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleIncrement()}>+</button>
                                    <button>{counter}</button>
                                    <button onClick={() => handleDecrement()}>-</button>
                                </div>
                                <div>
                                    <span>Rs.{item.price}</span>
                                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                                </div>
                            </div>
                        )

                    }
                    <div className='total'>
                        <h3>Total Price:  Rs.{price}</h3>

                    </div>
                </div>
            </div>
        </>
    )
}
