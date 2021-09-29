import React from 'react';

 function Product(props) {
    const {product,onAdd} = props;
    return (
        <div>
            <img className ="small" src={product.image} alt={product.name}></img>
            <h3>Item       :{product.name}</h3><br></br>
            <div>Rs        :{product.price}</div><br></br>
            <div>Available :{product.available}</div><br></br>
            <div>Category  :{product.category}</div><br></br>
            <div>Vendor    :{product.vendor}</div>
            <div>
                <button onClick={()=>onAdd(product)} className= "button">Add Cart</button>
            </div>
        </div>
    )
}

export default Product;
