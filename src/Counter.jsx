import { useState } from "react";
const Counter =()=>{
   const [counter,setCounter] =  useState(()=>{
    console.log("Hello");
    return 10;  //It will call only once and state will be set only once
   });

   function incrementCounter(){
    setCounter(counter + 1);
   }

   function decrementCounter(){
    setCounter((prevstate)=>{
        return prevstate - 1;
    });

    setCounter((prevstate)=>{
        return prevstate - 1;
    });

   }


    return(
        <div className="col-12 col-md-4 offset-md-4 border  text-white">
            <span className="h2 pt-4 m-2 text-white-50">Fun Counter </span>
            <br />
            <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
            <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
            <span className="h4">
              Counter: &nbsp;
              <span className="text-success">{counter}</span>
            </span>
        </div>
    );
}
export default Counter;