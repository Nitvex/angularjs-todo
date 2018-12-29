import ToDoItemController from "./ToDoItem/ToDoItem";
import ToDoListController from "./ToDoList/ToDoList";

(function() {
  angular
    .module("Components", [])
    /* controllers */
    .controller("ToDoListController", ToDoListController)
    .component("toDoItem", {
      bindings: {
        item: "<"
      },
      template: require("Components/ToDoItem/ToDoItem.html"),
        controller: ToDoItemController
    });
})();
