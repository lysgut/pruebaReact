import React from 'react'

const Card = ({data}) => {
    return (
        <>
            <div className="card">
                <h3>{data.title}</h3>
                <h1>US${data.price}</h1>
                <img src={data.image} alt="IMG   . . ." />
                <button><h3>Add to Cart</h3></button>
            </div>
        </>
    )
}

export default Card