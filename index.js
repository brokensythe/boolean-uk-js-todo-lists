/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", users);

console.log("todos: ", todos);

let objectToString = ``

for (const user of users) {
    objectToString += `id: ` + user.id + `, username: ` + user.name + `, resides in: ` + user.address.city + `\n\n`
}

// listOfIds = []

// for (const user of users) {
//     listOfIds.push(String(user.id))
// }

alert(objectToString)

const currentUserId = parseInt(prompt(`Please enter your id no. 🙏`))

// for (const id of listOfIds) {
//     if (currentUserId===id) {
//         alert("Welcome")
//     }
//     else {
//         alert("Please enter the correct id")
//     }
// }

const currentUser = users[currentUserId - 1]

const toDoList = []

for (const todo of todos) {
    if (currentUserId===todo.userId) {
        toDoList.push(todo)
    }
}

let toDoString = ``

for (const item of toDoList) {
    if (item.completed===true) {
        const syntaxUpdate = "yes"
        toDoString += `username: ` + currentUser.username + `, todo id: ` + item.id + `, title: ` + item.title + `, completed ` + syntaxUpdate + `\n\n`
    }
    else {
        const syntaxUpdate = "no"
        toDoString += `username: ` + currentUser.username + `, todo id: ` + item.id + `, title: ` + item.title + `, completed ` + syntaxUpdate + `\n\n`
    }
}

alert(toDoString)