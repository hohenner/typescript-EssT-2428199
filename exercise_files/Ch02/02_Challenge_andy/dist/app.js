var Status;
(function (Status) {
    Status["Done"] = "done";
    Status["InProgress"] = "in-progress";
    Status["Todo"] = "todo";
})(Status || (Status = {}));
let item1 = { id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11") };
let item2 = { id: 2, title: "Learn TypeScript", status: Status.InProgress };
let item3 = { id: 3, title: "Write the best app in the world", status: Status.Todo };
const todoItems = [item1, item2, item3];
// TODO: apply type to functions
function addTodoItem(todo) {
    const id = getNextId(todoItems);
    const newTodo = {
        id,
        title: todo,
        status: Status.Todo,
    };
    todoItems.push(newTodo);
    return newTodo;
}
//TODO: generic parameters
function getNextId(items) {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1;
}
const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");
console.log(JSON.stringify(newTodo));
