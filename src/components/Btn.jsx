import React from 'react'
import './Btn.css'
//import { useState } from 'react'

const AddCartBtn = (props) => {

  // const [cartAdd, setCartAdd] = useState(false)

  // const handleClick = () => {
  //   if( cartAdd == true ){
  //     setCartAdd(false)
  //   } else {
  //     setCartAdd(true)
  //   }
  // }

  return (
    <div className='btn-section'>
      <button className='show-button'>
        Ver más
      </button>
      <button className='cart-button' onClick={() => { alert([`Tu pizza ${props.name} se ha añadido al carrito`]) }}>
        Añadir
      </button>
    </div>
  )
}

export { AddCartBtn }