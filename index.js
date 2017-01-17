var Task = (function () {
    function Task(priority, title) {
        this.priority = priority;
        this.title = title;
    }
    Task.prototype.toString = function () {
        return "Priority: " + this.priority + ", Title: " + this.title;
    };
    return Task;
}());
var tasks = [];
document.getElementById('btn-add').addEventListener('click', function (e) {
    e.preventDefault();
    var task = new Task(Number(document.getElementById('task-priority')['value']), String(document.getElementById('task-title')['value']));
    tasks.push(task);
    var domString = '';
    tasks.forEach(function (t) {
        domString += "<li>" + t.toString() + "</li>";
    });
    document.getElementById('task-list').innerHTML = domString;
});
//# sourceMappingURL=index.js.map