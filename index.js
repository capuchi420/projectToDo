window.addEventListener('load', () => {
    if(document.cookie){
        postTasks();
    }
})

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input').value;
    document.cookie += `task=${input}; expires=Thu 17 Jan 9999`;
    e.target.querySelector('input').value = "";

    postTasks();
});

const postTasks = () => {
    const tasks = document.cookie.slice(5, document.cookie.length);
    const task = tasks.split('=');
    const content = document.querySelector('div.tasks');
    task.forEach(el => {
        content.innerHTML += `<div class="task">
                                <p>${el}</p>
                                <div class="options">
                                    <button class="done" onClick=done(this)>Done</button>
                                    <button class="del">Delete</button>
                                </div>
                            </div>
                            <hr>`;
    });
}

const done = (e) => {
    const task = e.closest('div.task').querySelector('p');
    if(task.classList == 'done'){
        task.classList.remove('done');
        e.innerText = "Done";
    }else{
        task.classList.add('done');
        e.innerText = "Undone";
    }
}

const del = (e) => {
    const remove = e.closest('div.task').querySelector('p');
    const tasks = document.cookie.slice(5, document.cookie.length).filter(el => el !== remove);
    console.log(tasks)
    //postTasks();
}