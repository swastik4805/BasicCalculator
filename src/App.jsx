import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class Stack { 
  constructor() { 
      this.items = []; 
  }
  push(element){
    this.items.push(element);
  }
  pop(){
    if(this.items.length==0) return "underflow";
    return this.items.pop();
  }
  isEmpty(){
    if(this.items.length==0) return true;
    return false;
  }
  top(){
    return this.items[this.items.length-1];
  }
  size(){
    return this.items.length;
  }
} 

function App() {
  const [res, setRes] = useState(0)
  const [stackObject, setStackObject]=useState(new Stack());

  function putElementToStack(num){
    stackObject.push(num);
  }
  function clearAll(){
    setRes(0);
    while(stackObject.size()){
      stackObject.pop();
    }
  }

  function calculateRes(){
    if(stackObject.size()<2) return "invalid input";
    let num1=0;
    let arr1=[];
    while(typeof stackObject.top()=="number"){
      arr1.push(stackObject.top());
      stackObject.pop();
    }
    for(let i=arr1.length-1;i>=0;i--){
      num1=num1*10;
      num1=num1+arr1[i];
    }
    console.log(num1);

    let operator=stackObject.top(); stackObject.pop();

    let num2=0;
    let arr2=[];
    while(typeof stackObject.top()=="number"){
      arr2.push(stackObject.top());
      stackObject.pop();
    }
    for(let i=arr1.length-1;i>=0;i--){
      num2=num2*10;
      num2=num2+arr2[i];
    }
    console.log(num2);


    let res=0;
    if(operator=="+") res=num2+num1;
    else if(operator=="-") res=num2-num1;
    else if(operator=="*") res=num2*num1;
    else if(operator=="/") res=num2/num1;
    stackObject.push(res);
    setRes(res);
    return res;
  }

  return (
    <>
      Welcome to my calculator!
      <br></br>
      <button onClick={()=>putElementToStack(1)}>1</button>
      <button onClick={()=>putElementToStack(2)}>2</button>
      <button onClick={()=>putElementToStack(3)}>3</button>
      <button onClick={()=>putElementToStack("+")}>+</button>
      <br></br>
      <button onClick={()=>putElementToStack(4)}>4</button>
      <button onClick={()=>putElementToStack(5)}>5</button>
      <button onClick={()=>putElementToStack(6)}>6</button>
      <button onClick={()=>putElementToStack("-")}>-</button>
      <br></br>
      <button onClick={()=>putElementToStack(7)}>7</button>
      <button onClick={()=>putElementToStack(8)}>8</button>
      <button onClick={()=>putElementToStack(9)}>9</button>
      <button onClick={()=>putElementToStack("*")}>X</button>
      <br></br>
      <button onClick={()=>putElementToStack(0)}>0</button>
      <button onClick={()=>putElementToStack("/")}>/</button>

      <br></br>
      <button onClick={()=>calculateRes()} >Calculate</button>
      <button onClick={()=>clearAll()}>Clear</button>
      <br></br>
      <input type="text" value={res} readOnly />
    </>
  )
}

export default App
