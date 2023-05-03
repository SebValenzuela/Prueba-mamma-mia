import React from 'react'
import './Pizza.css'
import { AddCartBtn } from './Btn'

const Pizza = (props) => {
  return (
    <div className='product'>
        <img className='product_img' src={props.img} alt='pizza'/>
        <h2 className='product_name'>{props.name}</h2>
        <hr />
        <div className='product_details'>
          <p className='product_ingredient_title'>Ingredientes:</p>
        <ul className='product_igredients'>
          {props.ingredients.map(ingredient =>
            <li key={ingredient} className='product_list_ingredient'>{ingredient}</li>
          )}

        </ul>
          <hr/>
          <p className='product_price'>Precio: ${props.price}</p>
        </div>
        <AddCartBtn name={props.name}/>
    </div>
  )
}

export {Pizza}