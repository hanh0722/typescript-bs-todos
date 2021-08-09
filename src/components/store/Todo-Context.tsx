import {createContext, useState} from 'react';
import TodosObj from '../../models/todo';
type TodoCtx = {
    todos: Array<TodosObj>,
    addToDoHandler: (text: string) => void,
    removeTodoHandler: (id: string) => void
}
export const TodoContext = createContext<TodoCtx>({
    todos: [],
    addToDoHandler: (text: string) => {}, 
    removeTodoHandler: (id: string) => {}
})

const TodoContextProvider: React.FC = (props) =>{
    const [todos, setTodos] = useState<Array<TodosObj>>([]);
  // we have type never in here it means that we only can use empty array, to ignore this, we have to define the function
    const addToDoHandler = (todo: string | undefined) => {
        if (!todo) {
        return;
        }
        const newTodo = new TodosObj(todo);
        setTodos((prevState) => {
        return [...prevState, newTodo];
        });
    };
    const removeTodoHandler = (id: string) =>{
        const filterTodo = todos.filter(items =>{
        return items.id !== id;
        })
        setTodos(filterTodo);
    }
    return <TodoContext.Provider value={{
        todos: todos,
        removeTodoHandler: removeTodoHandler,
        addToDoHandler: addToDoHandler
    }}>
        {props.children}
    </TodoContext.Provider>
}

export default TodoContextProvider;