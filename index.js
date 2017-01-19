var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function DOMElement(value) {
    return function (target, propertyKey, descriptor) {
        var oldMethod = target[propertyKey];
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return "<" + value + ">" + oldMethod.apply(this, args) + "</" + value + ">";
        };
        return descriptor;
    };
}
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
__decorate([
    DOMElement('li'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Task.prototype, "toString", null);
var HighPriorityTask = (function (_super) {
    __extends(HighPriorityTask, _super);
    function HighPriorityTask() {
        return _super.apply(this, arguments) || this;
    }
    HighPriorityTask.prototype.toString = function () {
        return _super.prototype.toString.call(this);
    };
    return HighPriorityTask;
}(Task));
__decorate([
    DOMElement('strong'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], HighPriorityTask.prototype, "toString", null);
var TaskFactory = (function () {
    function TaskFactory() {
    }
    TaskFactory.getTask = function (priority, title) {
        if (priority === 1) {
            return new HighPriorityTask(priority, title);
        }
        else {
            return new Task(priority, title);
        }
    };
    return TaskFactory;
}());
var tasks = [];
$('#btn-add').click(function (e) {
    e.preventDefault();
    var task = TaskFactory.getTask(Number($('#task-priority').val()), $('#task-title').val());
    tasks.push(task);
    var domString = '';
    tasks.forEach(function (t) { return domString += t; });
    $('#task-list').html(domString);
});
