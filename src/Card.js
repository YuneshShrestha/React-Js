import React,{useState} from "react";
import './card.css';
const Card = ({product,description,price})=>{
    let [count, setcount] = useState(0);
    let [total,setTotal] = useState(0);     

    function increment()
    {
        setcount(++count);
        setTotal(price*count);
    }
    function decrement()
    {
        if(count>0){
            setcount(--count);
            setTotal(price*count);
        }
        
    }
    function resetbtn()
    {
        setcount(0);
        setTotal(0);
    }
    return (
        // React fregment <></>
        <div className="my-container">
            <div className="card">
               <div>
                <p>Product: {product}</p>
                <p>Description: {description}</p>
                <p>Prize: {price + '/-'}</p>
                <h3>Total: {total}</h3>
               </div>
            </div>
            <div>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
                <button onClick={resetbtn}>Reset</button>
            </div>
        </div>
    );
};
export default Card;