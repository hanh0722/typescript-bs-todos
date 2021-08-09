import React, {useContext} from 'react';
import styles from '../Todo.module.css';
import { TodoContext } from '../store/Todo-Context';
const Todo: React.FC<{id: string, text: string}>  = (props) =>{
    const TodoCtx = useContext(TodoContext);
    return(
        <li onClick={() => TodoCtx.removeTodoHandler(props.id)} className={styles.item}>{props.text}</li>
    )
}

export default Todo;