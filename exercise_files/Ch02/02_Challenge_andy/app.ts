// TODO: create interface to describe this variable
// TODO: add ENUM to strongly type values
interface Item {
    id: number;
    title: string;
    status: Status;
    completedOn?: Date;
}
enum Status  {
    Done = "done",
    InProgress = "in-progress",
    Todo = "todo"
}

let item1: Item = { id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11")}
let item2: Item = { id: 2, title: "Learn TypeScript", status: Status.InProgress }
let item3: Item = { id: 3, title: "Write the best app in the world", status: Status.Todo }
const todoItems: Item[] = [ item1, item2, item3 ]

// TODO: apply type to functions
function addTodoItem(todo:string):Item {
    const id = getNextId(todoItems)

    const newTodo: Item = {
        id,
        title: todo,
        status: Status.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}
//TODO: generic parameters
function getNextId<T extends {id: number}>(items:T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))