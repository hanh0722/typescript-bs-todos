import React, {useRef, useContext} from 'react';
import styles from '../FormTodo.module.css';
import { TodoContext } from '../store/Todo-Context';
// to define a function with props we use function form
// we pass parameter inside if we have
// and return the type of function
// because we only run the function => type should be void
const FormTodo: React.FC = (props) =>{
    const TodoCtx = useContext(TodoContext);
    const inputRef = useRef<HTMLInputElement>(null);
    // event is object, React has a package for us, it's .FormEvent, mouse event is MouseEvent
    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const valueInput = inputRef.current!.value
        // the ? in here meaning that if it's not connected by ref and get the value => valueInput will be null
        // if we're sure we get value, we can use ! but normally will be ? for safety
        if(valueInput?.trim().length === 0){
            return;
        }
        
        TodoCtx.addToDoHandler(valueInput);
    }
    // we will receive one error about typescript because ref can use for any element
    // ref want to know more about our ref, inputref, div ref or something like this => use generic types
    // in here, because it's input, so it will be HTMLInputElement 
    // we still have an error because we need an initial value in here
    // first time with ref, we have no connection, so it'll be null
    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={inputRef}></input>
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default FormTodo;