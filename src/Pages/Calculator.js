import React, {  useState } from "react";

 const Calculator=(props)=>{
    const [count , setCount]=useState(0);
    const [num,setNum]=useState(0);
    return(
        <>
        <h1>This is {props.heading}</h1>
        <p>{count}</p>
        <p>{num}</p>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <button onClick={()=>setNum(num-1)}>negative</button>
        </>
    )
}

export default Calculator;