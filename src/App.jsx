import './App.css'
import { Home } from './views/Home'
import { NavBar } from './components/NavBar'
import { Pizza } from './components/Pizza'
import data from './pizzas.json'

const App = () => {
    return (
        <>
            <NavBar />
            <Home>
                {data.map((product) => (
                    <Pizza
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        img={product.img}
                        ingredients={product.ingredients}
                    />
                ))}
            </Home>
        </>
    )
}

export default App