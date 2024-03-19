import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductList() {
    return (
        <div >
            <ul>
                <li><Link to="/product/1">open</Link></li>
                <li><Link to="/product/2">open</Link></li>
                <li><Link to="/product/3">open</Link></li>
                <li><Link to="/product/4">open</Link></li>
            </ul>
        </div >
    )
}
