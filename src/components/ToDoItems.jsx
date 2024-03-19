import { useState } from "react";
function ToDoItems(props){
    const [isDone , setisDone]=useState(false);
    // function handleChange(){
    //     setisDone(prevValue =>{
    //    return !prevValue;
    //     })
    // }
 
    return (
        <div 
        onClick={() =>{
            props.onChecked(props.id)
        }
       }
        >
          <li >{props.text}</li>
        </div>
    )       
}

export default ToDoItems;

// function ToDoItems(props){
    // const [isDone , setisDone]=useState(false);
    //    function handleChange(){
    //        setisDone(prevValue =>{
    //       return !prevValue;
    //        })
    //    }
//         return (
//             <div onClick={handleChange}>
//               <li style={{textDecoration : isDone ? "line-through": 'none'}}>{props.text}</li>
//             </div>
//         )       
//     }