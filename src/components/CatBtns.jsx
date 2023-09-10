import React from 'react'
import { categories } from '../data/categories'
import '../App.css'

export default function CatBtns({onCatSelection, selectedCatId}) {
    return (
        <>
            {
                categories.map(cat => <button 
                type='button' 
                className={`m-1 btn 
                ${cat.id === selectedCatId ? `btn-info` : `btn-primary`} `}
                 key={cat.id}
                 onClick={() => onCatSelection(cat.id)}
                 >
                    {cat.title}
                </button>)
            }
        </>
    )
}
