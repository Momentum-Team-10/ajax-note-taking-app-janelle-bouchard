/* globals fetch, moment */
// This is a linter that defines fetch and moment for the sake of visualstudio

console.log('Hello, World!')

// Identify the api url and define it as a variable:
const url = 'http://localhost:3000'


// Objective: Note-taking app that displays a list of all current notes
// Goal capabilities: Create/edit/delete notes 
// Page Composition: Header, form -> input box, create button, edit button/icon, delete button/icon, notes list w/ attributes
// Note Composition: Title, text, date/time created, date/time of most recently updated

// Define the root div
let root = document.getElementById('root')

// create a form in the html doc, give it the id of "notes-form", style it, and then append it to the root div
let form = document.createElement('form')
form.id = 'notes-form'
// form.classList.add(
//     "form",
//     "form-content"
// )
root.appendChild(form)

// create a div w/ input box and create button
let newNoteDiv = document.createElement('div')
let noteText = document.createElement('input')
let addButton = document.createElement('button')
addButton.innerText = "Add Note!"

newNoteDiv.appendChild(noteText)
newNoteDiv.appendChild(addButton)
form.appendChild(newNoteDiv)


// // create an element for the page and give it the id of "todo-list"
let notesList = document.getElementById('notes-list')


// // create an event listener on the form to listen for clicking the submit button to add a new todo item
// // use "preventdefault" so that it doesn't refresh the page
// // use if statements to separate the two actions: delete and edit, based on which icon is clicked
// form.addEventListener('submit', (e) => {
//     if (e.target.classList.contains)

// console.log(noteText)

// // reset the form after the todo item has been added so that it clears and you can add another
// form.reset
// })




// // This holds the get request for the todos that already exist in the database
// function listTodos() {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             //always a good practice to consolelog the data in the second respose, so you know what the data looks like/what form it takes (the shape of it)
//             console.log(data)
//             // loop through each object of the array and pass the object
//             for (let item of data) {
//                 renderTodoItem(item)
//             }
//         })
// }

// // renders the list item for the to do
// function renderTodoItem(todoObj) {
//     // create an li and give it an id based of the id of each object
//     const li = document.createElement('li')
//     li.id = todoObj.id
//     li.classList.add(
//         // These strings are TACHYONS class names
//         'lh-copy',
//         'pv3',
//         'ba',
//         'bl-0',
//         'bt-0',
//         'br-0',
//         'b--dotted',
//         'b--black-3'
//     )
//     // function that takes the li and the todoObj and adding the li's to the todoObj
    
//     renderTodoText(li, todoObj)
//     todoList.appendChild(li)
// }

// // takes the li and the todoObj, and create the style, etc. of the body of the todo object
// // this uses icons from fontawesome that we will add eventListeners to, in order to edit and delete todos
// function renderTodoText(li, todoObj) {
//     li.innerHTML = `
//     <span class="dib w-60">${todoObj.body}</span>
//     <i class="ml2 dark-red fas fa-times delete"></i><i class="ml3 fas fa-edit edit"></i>
//     `
// }

// //create a function that takes the todo text and CREATES a NEW todo item
// // add the method (since it's not a get request)
// // headers is where you tell the database what format the data will be in, but also where you enter your authorization key/token (that you receive from the backend) which "logs you in".  This is a string of letters and numbers that represents specific 
// // Example:         
// // headers: { 'Content-Type': 'application/json', Authorization: 'AUTH_TOKEN_STRING' },
// // The "body" key is where you tell the database the data that needs to be sent to the database
// // Usually the backend creates the "created at" data, but we need to do so here
// // When you do a post request, you want a status code of 201: created
// function createTodo(todoText){
// fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             title: renderTodoText,
//             body: renderTodoText,
//             created_at: moment().format()
//         })
//     })
//     .then(res => res.json())
//     .then(data => renderTodoItem(data))
//     //this returns ONE object out of the todo items
// }

// // have the url add the todo item id you want to delete, so add a forward slash and a template literal to populate the url string properly
// // the fetch removes the data from the database, and the promise removes it from the ui
// // this function will be used within the event listener (click event) for the delete icon
// // you will probably see a 404 error in the console once you delete an item, which is good and signifies that you have effectively deleted the item
// function deleteTodo(todoEl) {
// fetch(url + '/ '+ `${todoEl.id}`, {
//     method: 'DELETE'
//     }).then(() => todoEl.parentElement.remove())
// }

// // Create a function to edit using put (because we're updating the entire entry)
// // use const to grab the input value in the ui to edit it
// // grab the specific url again
// // add a new key to track when the object was updated
// // data in this case, will be a single object (the single todo list item)
// // With this function, we first need to enter the editted version of the text into the input, and THEN click on the edit button on one of the existing notes to replace it with the new text/data
// // You want to receive a 200 type status to confirm that it works!
// function updateTodo(todoEl) {
//     const todoText = document.getElementById('todo-text').value
//     fetch(url + '/ '+ `${todoEl.parentElement.id}`, {


// }


// // call the function to list todo items
// listTodos()

// // If there is an updated at key, show me, otherwise don't show me
// // this is a shorthand "if" statement called a ternary operator:
// // `${todoObj.updated_at ? todoObj.updated_at : null}`
