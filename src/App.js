import './App.css';
import productsData from "./products"
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);
  const addItems = (product) => {
    setCart([...cart,product])
  }
  const deleteItems = (id) => {
    const newCart = [...cart];
    newCart.splice(id, 1);
    setCart(newCart);
  }
  console.log(cart)
  return (
    <div className="App">
      <div>
      {
        productsData.map((product)=>(
          <div className='product' key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={()=>{addItems(product)}} >Add to cart</button>
          </div>
        ))
      }
      </div>
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <>
            <li key={index}>{item.name} - ${item.price}</li>
            <p>Quantity:</p>
            <button onClick={()=>{deleteItems(index)}} >Delete from cart</button>
            </>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

export default App;
