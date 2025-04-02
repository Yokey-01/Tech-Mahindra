import { useState } from "react";

export default function Tate(){
    const tate=new Date().toLocaleDateString();
    return(
        <h2>{ tate }</h2>
    )
}

function Quotes(){
  const quote=[
      "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are."
]
const [item,setItem]=useState('');
const quoteChange=()=>{
  setItem(quote[Math.floor(Math.random()*quote.length)]);
}
return (
  <>
      <p>{item}</p>
      <button onClick={quoteChange}>Change Quote</button>
  </>
)
}

function MathResult() {
const num1 = 17;
const num2 = 18;
const result = num1 + num2;

return <p>{num1} + {num2} = {result}</p>;
}

function WordCount() {
const paragraph = "React is a JavaScript library for building user interfaces.";
const wordCount = paragraph.split(" ").length;

return (
  <>
    <p>{paragraph}</p>
    <p>Word Count: {wordCount}</p>
  </>
);
}


function MultiplyNumbers() {
const num1 = 3;
const num2 = 7;
const product = num1 * num2;

return <p>{num1} x {num2} = {product}</p>;
}

export { Quotes}
export {MathResult}
export {WordCount}
export {MultiplyNumbers}