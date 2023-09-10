import React, { useState } from 'react'
import Products from '../components/Products'
import Pagination from '../components/Pagination'
import '../App.css'
import CatBtns from '../components/CatBtns'
import { allitems } from '../data/item'

export default function MenuPage({ addToCart }) {

    const [selectedCatId, setSelectedCatId] = useState(null);
    const [prdoucts, setProducts] = useState(allitems)

    const onCatSelection = (catId) => {
        setSelectedCatId(catId)
        const filteredItems = allitems.filter(p => p.categoryId === catId)
        setProducts(filteredItems)
    }

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = allitems.slice(firstIndex, lastIndex);
    const npage = Math.ceil(allitems.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    return (
        <div className='container'>
            <CatBtns onCatSelection={onCatSelection} selectedCatId={selectedCatId} />
            <Products addToCart={addToCart} items={prdoucts}  />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                numbers={numbers} npage={npage} />
        </div>
    )
}
