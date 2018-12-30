import ToDoItemController from "./ToDoItem/ToDoItem";
import ToDoListController from "./ToDoList/ToDoList";
import ListOfToDoListController from "./ListOfToDoList/ListOfToDoList";

import "./ToDoItem/ToDoItem.css";
import "./ToDoList/ToDoList.css";
import "./ListOfToDoList/ListOfToDoList.css";

(function() {
  angular
    .module("Components", [])
    /* controllers */
    .controller("ListOfToDoListController", ListOfToDoListController)
    .component("toDoList", {
      bindings: {
        items: "=",
        name: "=",
        deleteList: "&"
      },
      template: require("Components/ToDoList/ToDoList.html"),
      controller: ToDoListController
    })
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
