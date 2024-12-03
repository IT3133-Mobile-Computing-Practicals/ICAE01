
import '../assets/CSS/layout.css';
import Cart from './Cart';
import Product from './Product';
import {useState} from 'react';

export default function Products(){

    const[output,setoutput]=useState("");

    

   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        <Product setoutput={setoutput}/>
                    }
                </div>

            </div>
            <div className="item3">
                {
                    <Cart output={output}/>
                }
            </div>
        </>
    );

}