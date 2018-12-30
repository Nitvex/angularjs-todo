import "angular";
import "@uirouter/angularjs";
import "./components/index";
import "./directives/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

angular.module("Libraries", ["ui.router"]);
const app = angular.module("App", ["Libraries", "Components", "Directives"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.when("", "/");
  $locationProvider.hashPrefix("");

  const states = [
    {
      name: "home",
      url: "/",
      controller: "ToDoListController",
      controllerAs: "$ctrl",
      template: require("Components/ToDoList/ToDoList.html")
    }
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
});
