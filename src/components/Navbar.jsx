import React from 'react'
    

const Navbar = ({count, increment, decrement}) => {
    return (
        <>
        <nav className='navbar'>
            <h1>Contador : </h1>
            <span>{count}</span>
      <button onClick={decrement} disabled={count === 0}>-</button>
      <button onClick={increment} disabled={count === 100}>+</button>
        </nav>
        </>
    )

};

export default Navbar