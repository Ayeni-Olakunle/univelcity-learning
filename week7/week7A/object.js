const person = {
    firstName: 'John',
    secondName: 'Tom',
    age: 21,
    department: 'science',
    bestFood: ["mango", "Tomato", "Orange", 23, 50, 100, { name: "Farm", item: "description", }, true, false,],
    fullName: function () {
        return this.firstName + ' ' + this.secondName
    }
}

console.log(person.fullName());


// GET Request Methods

function todolist() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
}

todolist()