import TodoItems from "./TodoItems";
import { useState } from "react";

function TodoList(){
    const [todos,setTodos] = useState([
        {id:1, description:'할 일 목록을 추가해봐라', isDone: false},
        {id: 2, description: '할 일 2', isDone: false},
        {id: 3, description: '할 일 3', isDone: false},
        {id: 4, description: '할 일 4', isDone: false},
        {id: 5, description: '할 일 5', isDone: false},
        {id: 6, description: '할 일 6', isDone: false},
        {id: 7, description: '할 일 7', isDone: false},
        {id: 8, description: '할 일 8', isDone: false},
        {id: 9, description: '할 일 9', isDone: false},
        {id: 10, description: '할 일 10', isDone: false},
        {id: 11, description: '할 일 11', isDone: false}



    ]);

    
    // value
    const [inputText, setInputText]=useState('');
    const [nextId, setNextId]= useState(12);

    //페이징 처리
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;


    //onChange
    const onChangeHandler = e =>{
        setInputText(e.target.value)
    }

    //onClick

    const onClickHandler = () => {
        const newTodos = [
            ...todos,
            { id: nextId, 
                description: inputText, 
                isDone: false 
            }
        ];

        //비워주기
        setInputText('');
        setNextId(nextId + 1);
        setTodos(newTodos);

        
    }

     // onKeyPress
    const onKeyDownHandler = e => {
        if (e.key === 'Enter') {
        onClickHandler();
        }
    };

    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

      // 페이지네이션 함수
    const paginate = pageNumber => setCurrentPage(pageNumber);



    return (
<>
    <h3>ToDo-List</h3>
    <div className="todo-list">
        <TodoItems todos={currentTodos} setTodos={setTodos} />
    </div>

    <div className="append-list">
        <input
            type="text"
            value={inputText}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
            placeholder="할 일을 입력하세요..." 
        />

        <button onClick={onClickHandler}>등록하기</button>
    </div>

    <div className="pagination">
        {[...Array(Math.ceil(todos.length / itemsPerPage)).keys()].map(
            number => (
                <button
                    key={number + 1}
                    onClick={() => paginate(number + 1)}
                >
                    {number + 1}
                </button>
            )
        )}
    </div>

            </>
    );
}
export default TodoList;