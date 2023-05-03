import React from 'react'
import './Home.css'

const Home = (props) => {
    return (
        <section className='products_section'>
            <div className='products_section_title'>
                <h1 className='products_title'>¡Pizzería Mamma Mia!</h1>
                <p>¡Tenemos las mejortes pizzas a tu gusto!</p>
                <hr />
            </div>
            <div className='products_container'>
                {props.children}
            </div>
        </section>
    )
}

export { Home }