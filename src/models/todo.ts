// to describe props of object, we create class
// it can be type, interface and class

class TodosObj {
    // we describe our expression in here
    // if class has different properties, and normally will be different properties, we don't have to do that with constructor
    id: string;
    text: string;
    // to receive value, we have to use constructor
    constructor(todoText: string){
        this.text = todoText;
        this.id = new Date().toISOString()
    }
}
export default TodosObj;