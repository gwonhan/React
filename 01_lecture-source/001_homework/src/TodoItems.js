
function TodoItems({todos, setTodos}){

    const removeTodo =(id) => {
        const removedList = todos.filter(todo => todo.id !== id)

        setTodos(removedList);
    }

    const onChangeHandler = e=>{
        const changeIsDoneList = todos.map(
            todo => {
                if(todo.id === parseInt(e.target.id)){
                    todo.isDone = e.target.checked;
                    }

            return todo;
        }
    )
    setTodos(changeIsDoneList);
}

return (
    <>
        {todos.map(todo => (
            <p key={todo.id}>
                <input type="checkbox" id={todo.id} checked={todo.isDone} onChange={onChangeHandler} />
                <label htmlFor={todo.id} style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                    {todo.description}
                </label>
                <button onClick={() => removeTodo(todo.id)}>x</button>
            </p>
        ))}
    </>
);
}
export default TodoItems;