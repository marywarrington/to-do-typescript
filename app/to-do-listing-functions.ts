/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions:String[] = [];
    for(task of taskCollection) {
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var describeTasksForPersonWithPriority = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions:String[] = [];
    for(task of taskCollection) {
      if(task.assignedTo === assignee && task.priority === "high") {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}
