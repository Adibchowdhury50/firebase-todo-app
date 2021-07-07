
import './todo.css';
import { useState } from 'react';

export default function Todo() {
    const [todos,setTodos]= useState([]);
    const [input,setInput] = useState('');
    const handletodo=(event) =>{
        event.preventDefault();

        console.log("hello");
        input?setTodos([...todos,input]):alert("you can not add empty value");
        ;
        setInput('');
    }
    const handleDelete=(id)=>{
        todos.splice(id,1);
        setTodos([...todos]);
    }
    return (
        <div className="todo">
            <div className="todo__container">
                <h1 className="todo__title">ToDo App</h1>
               <form action="" className="todo__form">
               <input value={input} type="text" className="todo__input" placeholder="Input Here" onChange={(event)=>setInput(event.target.value)} />
                <button className="todo__btn" onClick={handletodo}>Add ToDo</button>
               </form>
                
                

            </div>
            <div className="todo__data">
                <ul>
                    {todos.map((todo,index) => <li key={index}>{todo} <button className="todo__delete" onClick={()=>handleDelete(index)}>DELETE</button> </li> )}
                    
                    
                </ul>

            </div>
            
        </div>
    )
}
