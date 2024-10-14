const todoItems = [
    'Make Dinner',
    'Wash Dishes',
    'Watch a movie',
    'Get to bed'
];

renderTodoItems();

function renderTodoItems() {
    let todoListHTML = '';

    for(let i = 0; i < todoItems.length; i++) {
        const value = todoItems[i];
        const todoHTMLEl = `<p>${value} 
        <button onclick="todoItems.splice(${i}, 1); renderTodoItems();">Delete</button>
        </p>`
        ;

        todoListHTML += todoHTMLEl;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

 
function addTodoItem () {
    const inputElement = document.querySelector('.js-input-element');
    let name = inputElement.value;
    
    todoItems.push(name);
    renderTodoItems();
    console.log(todoItems)

    inputElement.value = '';
}


function handleKeyDown(event) {
    if(event.key === 'Enter') {
        addTodoItem();
    }
}