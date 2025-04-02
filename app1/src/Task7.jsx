import React from 'react';

function List({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </>
    );
}

function TodoList() {
    const tasks = ['Report Completed'];
    return (
        <>
        <h3>TodoList</h3>
            {tasks.map((task, index) => (
                <p key={index}>
                    {task} <input type="checkbox" />
                </p>
            ))}
        </>
    );
}

function ProductList(){
   const products=[{
      name:'Mobile',price:200
   },{name:'Computer',price:1000},
{name:'CPU',price:7}];
   return (
      <>
      <h4>Filtered Products</h4>
          {products.filter((product)=>product.price>10).map((product, index) => (
              <p key={index}>
                  {product.name} ${product.price}
              </p>
          ))}
      </>
  );
}
function UserList(){
   const list=[{name:'Yokey',email:'yokeyabd01@gmail.com'},{name:'Rubesh',email:'rubeshkk28@gmail.com'}]
   return (
      <>
      <h4>UserList</h4>
      {list.map((product, index) => (
              <p key={index}>
                  Name:{product.name}  Email:{product.email}
              </p>
          ))}
      </>
   )
} 

function ShoppingCart(){
   const products=[{
      name:'Mobile',price:200
   },{name:'Computer',price:1500},
{name:'Cpu',price:5}];
   return (
      <>
      <h4>Shopping Cart</h4>
          {products.map((product, index) => (
              <p key={index}>
                  {product.name} ${product.price}
              </p>
          ))}
      </>)
}

export { List, TodoList ,ProductList,UserList,ShoppingCart};