import React, {useContext} from 'react';
import Todo from './Todo';
import styles from '../FormTodo.module.css';
import { TodoContext } from '../store/Todo-Context';
// when we use props, TS wants us to define type for it but props is really specific of object, it contains our own props and also children
// so to make it reusable and easy to control without defining the type, we use genetic <T>
// and react has something we can use is React.FC
// FC meanings it's Functional Component
// if props in here is not important, it means it has or not, it's not important, we add ? before the name of definition props
// Example: const Todos: React.FC<{items?: Array<string>}> = (props)
//  because we're using class with object, contains 2 property, so we can change Array to the obj we djd jn class
const Todos = () =>{
    // in here, todo array is not only string array, it should contain more like id, title, content, ... and should be object
    // and we have to define our own props in <> after React.FC
    const TodoCtx = useContext(TodoContext);
    return(
        <ul className={styles.todos}>
            {TodoCtx.todos.map(item =>{
                return <Todo text={item.text} key={item.id} id={item.id}/>
            })}
        </ul>
    )
}

export default Todos;
