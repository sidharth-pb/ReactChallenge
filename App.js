import data from './data';
import './App.css';
import Header from './components/Header';
import Baskets from './components/Baskets';
import Main from './components/Main';
import {useState} from 'react';
function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd =(product) => {
    const exist = cartItems.find((x) =>x.id=== product.id);
    if(exist) {
      setCartItems(cartItems.map((x)=> x.id === product.id ? {...exist , qty: exist.qty+1}:x));
    }
    else{
      setCartItems([...cartItems ,{...product ,qty:1}]);
    }
  };
  const onRemove =(product) => {
    const exist = cartItems.find((x) => x.id===product.id);
    if(exist.qty ===1){
      setCartItems(cartItems.filter((x)=> x.id !== product.id));
    }
    else{
      setCartItems(cartItems.map((x)=> x.id === product.id ? {...exist , qty: exist.qty-1}:x));
    }
  };
  return (
    <div>
      <Header countCartItems={cartItems.length}/>
      <div className="row">
      <Main products={products}/>
      <Baskets  onAdd={onAdd}cartItems={cartItems}   />
      </div>
    </div>
  );
}

export default App;
