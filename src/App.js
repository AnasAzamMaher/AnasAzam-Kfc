import React, { useState } from "react";
import Header from './components/Header'
import MenuPage from "./pages/MenuPage";
import Footer from "./components/Footer";
import CartViewOffCanvas from "./components/CartViewOffCanvas";


function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (allitems) => {
        setCartItems([...cartItems, allitems]);
        
    }
    
   
    return (
        <>
            <CartViewOffCanvas setCartItems={setCartItems} cartItems={cartItems} />
            <Header cartCounter={cartItems.length}/>
            <MenuPage addToCart={addToCart} />
            <Footer />
        </>
    )
}

export default App;