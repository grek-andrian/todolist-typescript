interface Task {
    priority: number,
    title: string
}

let tasks = [];
document.getElementById('btn-add').addEventListener('click', e => {
    e.preventDefault();
    const priority = document.getElementById('task-priority')['value'];
    const title = document.getElementById('task-title')['value'];
    tasks.push({
        priority: priority,
        title: title
    });
    let domString = '';
    tasks.forEach(t => {
        domString += `<li>Priority: ${t.priority}, Title: ${t.title}, Completed: ${t.completed}</li>`;
    });
    document.getElementById('task-list').innerHTML = domString;
});
