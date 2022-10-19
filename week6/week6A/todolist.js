// Introduction to Variables
// var aboutFriend = "The name of my friend is ";
// let friendName = "Tobi";
// const bestFriend = "Gloria";

// friendName = "Diamond";
// aboutFriend = "My best subject in school is ";

// console.log(aboutFriend + friendName)
// console.log(aboutFriend + bestFriend)


// Introduction to data type
// let num = 50;
// let surname = "Buhari";
// let old = false;
// let list = [1, 2, 3];
// let onthing
// let empty = null;
// let fullInfo = {
//     fullName: "John",
//     surname: "Love",
//     age: 18,
//     tall: true,
// }

// console.log(fullInfo);

// introduction to conditional statament
// let tall = true;

// if (tall) {
//     console.log("Tobi is a tall boy")
// } else {
//     console.log("Tobi is a short boy");
// }


// >
// <
// ==
// !=
// >=
// <=
// !

// &&
// ||
// let num = 50

// if (num > 20) {
//     console.log("Tobi is a rich boy")
// } else {
//     console.log("Tobi is a managing");
// }

// let name1 = "John";
// let name2 = "Smith";

// if (name1 == "Tom" || name2 != "Smith") {
//     console.log("Yes the condition is correct");
// } else {
//     console.log("No the condition is not correct");
// }

// let rain = "Rain"
// let sun = "Hot"
// let wind = "Cold"

// let day = sun

// if (day == rain && day != sun) {
//     console.log("Today is a very cold day");
// } else if (day == sun && day != wind) {
//     console.log("Today is a very hot day");
// } else if (day == wind && day != "clouds") {
//     console.log("Today is a cloudy day");
// } else {
//     console.log("Today is a normal day.");
// }


document.getElementById("submit").onclick = function (e) {
    e.preventDefault();
    let task = document.getElementById("whatTodo")
    if (task.value.length == "") {
        alert("Please add a task");
    } else {
        document.getElementById("tableBody").innerHTML += `
            <tr class="hold">
                <td class="mainText">${task.value}</td>
                <td>
                <label>
                <input type="checkbox" value="bananas">
                <span>Complete</span>
                </label>
                </td>
                <td id="delete">
                <button type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        `;
        let current_tasks = document.querySelectorAll("#delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        let current_edit = document.querySelectorAll(".mainText");
        for (var i = 0; i < current_edit.length; i++) {
            current_edit[i].onclick = function () {
                let frem = this.textContent;
                task.value = frem.trim();
                this.parentNode.remove();
            }
        }
        clear()
    }

}

function clear() {
    document.getElementById("whatTodo").value = "";
}