var tasks = [];
document.getElementById('btn-add').addEventListener('click', function (e) {
    e.preventDefault();
    var priority = document.getElementById('task-priority')['value'];
    var title = document.getElementById('task-title')['value'];
    tasks.push({
        priority: priority,
        title: title
    });
    var domString = '';
    tasks.forEach(function (t) {
        domString += "<li>Priority: " + t.priority + ", Title: " + t.title + ", Completed: " + t.completed + "</li>";
    });
    document.getElementById('task-list').innerHTML = domString;
});
