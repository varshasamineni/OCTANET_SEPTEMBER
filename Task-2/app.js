// Selectors
let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// Event listener for input
input.addEventListener('keyup', () => {
    if (input.value.trim().length === 0) {
        addBtn.classList.remove('active');
    } else {
        addBtn.classList.add('active');
    }
});

// Event listener for add button
addBtn.addEventListener('click', () => {
    if (input.value.trim().length > 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <p>${input.value}</p>
            <div class="item-btn">
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        tasks.appendChild(newItem);
        input.value = '';
        addBtn.classList.remove('active');
    } else {
        alert('Please enter a task');
    }
});

tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})
tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
