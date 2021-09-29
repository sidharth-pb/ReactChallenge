import React from 'react';

function Baskets(props){
    const {cartItems , onAdd}=props;
    const itemsPrice = cartItems.reduce((a,c) => a+c.price *c.qty,0);
    const taxprice =itemsPrice *.14;
    return <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>{cartItems.length ===0 && <div>Empty</div>}</div>
        {cartItems.map((item)=>(
            <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
                <button onClick={()=>onAdd(item)}>+</button>
            </div>
            <div  className="col-2 text-right">{item.qty} * {item.price.toFixed(2)}</div>
            </div>
        ))}
{cartItems.length !== 0 && (
    <>
    <hr></hr>
    <div className='row'> 
    <div className='col-2'> Items Price</div>
    <div className='col-1 text-right'>{itemsPrice.toFixed(2)}</div>
    </div>
    <div className='row'> 
    <div className='col-2'> Tax Price</div>
    <div className='col-1 text-right'>{itemsPrice.toFixed(2)}</div>
    </div>
    </>
)}
    </aside>
}


export default Baskets;