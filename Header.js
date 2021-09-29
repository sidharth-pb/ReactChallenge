import React from 'react';

function Header(props){
    const {counterCartItems} = props;
    return (
        <header  className="row block center">
            <div>
                < a href="#/">
                    <h1 style={{color:"teal"}}>
                        Fruits and  Vegetables
                    </h1>
                </a>
            </div>
            <div>
                <a href ="#/cart" style={{color:"black"}} >
                    Cart{' '}
                    {counterCartItems ?(
                        <button className='badge'>{counterCartItems}</button>
                    ) : (
                        ''
                    )}
                    </a>  <a href ="#/sign in" style={{color:"black"}}>Sign in</a>
            </div>
        </header>
    );
}


export default Header;