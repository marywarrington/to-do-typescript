/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
var type;

$(document).ready(function(){
  $('#taskInfo').hide();
  $('#type').change(function(event){
    $('#taskInfo').hide();
    event.preventDefault();
    var type = $('#type').val();
    if (type === "HomeTask"){
      $('#taskInfo').show();
      $('.assignedTo').show();
      $('.priority').show();
      $('.dueDate').hide();
    } else if (type === "HobbyTask") {
      $('#taskInfo').show();
      $('.dueDate').hide();
      $('.assignedTo').hide();
      $('.priority').hide();
    } else if (type === "WorkTask") {
      $('#taskInfo').show();
      $('.dueDate').show();
      $('.assignedTo').show();
      $('.priority').show();
    } else
    alert('Please choose a type');
  });

  $('#taskInfo').submit(function(event) {
    event.preventDefault();
    var tasks = [];
    var people = ToDoList.people;
    var type = $('#type').val();

    var description = $('#description').val();
    var priority = $('#priority').val();
    var assignedTo = $('#assignedTo').val();
    var dueDate = $('#dueDate').val();
    if (type === "HomeTask") {
      tasks.push(new ToDoList.HomeTask(description, priority, people[assignedTo]));
    } else if (type === "WorkTask") {
      tasks.push(new ToDoList.WorkTask(dueDate, description, priority, people[assignedTo]));
    } else if (type === "HobbyTask") {
      tasks.push(new ToDoList.HobbyTask(description));
    }

    console.log(tasks);

    var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
    for(var task of thorTasks){
      $("#thorTasks").append("<li>" + task + "</li>");
    };

    var dianeTasks = ToDoList.describeTasksForPerson(people.diane, tasks);
    for(var task of dianeTasks){
      $("#dianeTasks").append("<li>" + task + "</li>");
    };

    var lokiTasks = ToDoList.describeTasksForPerson(people.loki, tasks);
    for(var task of lokiTasks){
      $("#lokiTasks").append("<li>" + task + "</li>");
    };

    var unassignedTasks = ToDoList.describeTasksForPerson(undefined, tasks);
    for(var task of unassignedTasks){
      $("#unassignedTasks").append("<li>" + task + "</li>");
    };

    var PriorityThorTasks = ToDoList.describeTasksForPersonWithPriority(people.thor, tasks);
    for(var task of PriorityThorTasks){
      $("#PriorityThorTasks").append("<li>" + task + "</li>");
    };


  });

// var people = ToDoList.people;
//
// var tasks = [];
// tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
// tasks.push(new ToDoList.HobbyTask("Bake a pie."));
//
// var today = new Date();
// var tomorrow = new Date();
// tomorrow.setDate(today.getDate() + 1);
// var nextDay = new Date();
// nextDay.setDate(today.getDate() + 2);
//
// tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
//
//
//   var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
//   for(var task of thorTasks){
//     $("#thorTasks").append("<li>" + task + "</li>");
//   }


});
