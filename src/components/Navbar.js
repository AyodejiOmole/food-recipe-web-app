import React from 'react';

const Navbar = ( { handleChange } ) => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <p>food</p>
            <h1>RECIPES.</h1>
        </div>
        <input type="text" className='input-box' placeholder='Input Meal...' onChange={handleChange}/>
    </div>
  )
}

export default Navbar;