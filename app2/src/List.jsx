    import { useState } from "react";
    export default function List(){
        function handleDelete(index){
            setItems(items.filter((item,i) => i !==index));
        }
        const[items,setItems]=useState(['Apple','orange','Mango','Grapes','Peach'])
        return(
            <>
                <ol>
                    {items.map((item,index) => {
                        return(
                        <div key={index}>
                        <li>{item}
                        <button type="button" onClick={() => handleDelete(index)}>Delete</button></li>
                        </div>
                        );
                    }
                )
                }
                
                </ol>
            
            </>
        );
    }