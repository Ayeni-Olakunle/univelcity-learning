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