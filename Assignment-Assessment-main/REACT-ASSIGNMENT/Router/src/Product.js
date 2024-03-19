import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export default function product() {
    return (
        <div style={{ border: "2px solid black", margin: "1rem", color: "blue" }}>
            <h1>Product</h1>
            <Link to="/product/productList">SHOW ALL PRODUCT LIST</Link>
            <Outlet />
        </div>
    )
}
