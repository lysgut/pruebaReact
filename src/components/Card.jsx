import React from 'react'

const Card = ({data}) => {
    return (
        <>
            <div className="card">
      <h3>{data.title}</h3>
      <img src="{data.image}" alt="IMAGEN" />
    </div>
        </>
    )
}

export default Card