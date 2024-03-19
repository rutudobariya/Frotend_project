import React from 'react'

export default function List() {

    const Carlist = ["kia", "Alto", "BMW", "Thar", "Punch"]

    return (
        <div>
            {Carlist.map((item, index) => {
                return <h1>Car Name:{item},Index:{index}</h1>
            })}
        </div>
    )
}
