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

listOfIds = []

for (const user of users) {
    listOfIds.push(user.id)
}

alert(objectToString)

// This while loop is in the wrong place, think I have to pass this over the entire script
// while (true) {
//     const currentUserId = parseInt(prompt(`Please enter your id no. 🙏`))

//     if (listOfIds.includes(currentUserId)) {
//         alert(`You are an approved user`)
//         break
//     }
//     else {
//         alert(`You are not an approved user`)
//     }

// }

// for (const id of listOfIds) {
//     if (currentUserId===id) {
//         alert("Welcome")
//     }
//     else {
//         alert("Please enter the correct id")
//     }
// }

const currentUser = users[currentUserId - 1]

alert(`Hello ` + currentUser.username)

const toDoListToggle = confirm(`Would you like to see your to do list?`)

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
        toDoString += `username: ` + currentUser.username + `, to do id: ` + item.id + `, title: ` + item.title + `, completed ` + syntaxUpdate + `\n\n`
    }
    else {
        const syntaxUpdate = "no"
        toDoString += `username: ` + currentUser.username + `, to do id: ` + item.id + `, title: ` + item.title + `, completed ` + syntaxUpdate + `\n\n`
    }
}

if (toDoListToggle===true) {
    alert(toDoString)
}

const addANewTodo = confirm(`Do you want to add a new item to your to do list?`)

// if above is true

if (addANewTodo===true) {
    const toDoInfo = prompt(`What do you need to do ?`)
    const toDoId = todos.push({
        userId: currentUser.id,
        id: todos.length + 1,
        title: toDoInfo,
        completed: false,
    })
}