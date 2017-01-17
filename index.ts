class Task {
    private priority: number;
    private title: string;
    constructor(priority: number, title: string) {
        this.priority = priority;
        this.title = title;
    }
    toString(): string {
        return `Priority: ${this.priority}, Title: ${this.title}`;
    }
}

let tasks: Task[] = [];
document.getElementById('btn-add').addEventListener('click', e => {
    e.preventDefault();
    const task = new Task(Number(document.getElementById('task-priority')['value']),
                          String(document.getElementById('task-title')['value']));
    tasks.push(task);
    let domString = '';
    tasks.forEach(t => {
        domString += `<li>${t.toString()}</li>`;
    });
    document.getElementById('task-list').innerHTML = domString;
});
