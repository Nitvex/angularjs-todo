import ToDoItemController from "./ToDoItem/ToDoItem";
import ToDoListController from "./ToDoList/ToDoList";

import "./ToDoItem/ToDoItem.css";
import "./ToDoList/ToDoList.css";

(function() {
  angular
    .module("Components", [])
    /* controllers */
    .controller("ToDoListController", ToDoListController)
    .component("toDoItem", {
      bindings: {
        item: "=",
        onDelete: "&",
        onChange: "&"
      },
      template: require("Components/ToDoItem/ToDoItem.html"),
      controller: ToDoItemController
    });
})();
