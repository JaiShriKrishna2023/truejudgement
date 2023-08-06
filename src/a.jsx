import React, {useState} from 'react';

const TodoList=()=>{
  const [inputValue, setInputValue]=useState('');
const [todos, setTodos]=useState([]);



  const handleAddList=()=>{
if(inputValue.trim() !==''){
  setTodos([...todos, inputValue]);
setInputValue('');

}
  
  

const handleInputChange=(event)=>{
setInputValue(event.target.value);

}

const handleDelete=(index)=>{
  const updatedTodo=todos.filter((item,i)=>i !==index)
setTodos(updatedTodo)

}



return(<div>
<h2>to do</h2>
<input type='text' value={inputValue} onChange={handleInputChange}/>
<button onClick={handleAddList}>Add</button>

<ul>

  {todos.map((todo, index)=>(
    <li key={index}>
    {todo}
    <button onClick={()=>handleDelete(index)}>delete</button>
    </li>
  )
  )}
</ul>

</div>)


}

export default TodoList;