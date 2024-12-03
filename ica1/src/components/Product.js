import '../assets/CSS/layout.css';
import {flowers} from './FlowerDB';
import {useState} from 'react';


export default function Product(){
   
 const[inputValue,setInputValue]=useState();

    const handlechange = (e) =>{
        setInputValue(e.target.value)
    }
    
    return(
        flowers.map(flower=>
        <div className="grid-item">

            <div class="card">
                <img  src={require("../assets/image/" + flower.img)}  />

                <div class="card-body">
                    <h5 class="card-title">{flower.name} Price:{flower.price}</h5>

                    <div class="quantity-container">

                        <label for="quantity">Quantity:</label>

                        <input type="number" id="quantity" name="quantity" value={inputValue} onChange={handlechange}/>

                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
        )
    );
}