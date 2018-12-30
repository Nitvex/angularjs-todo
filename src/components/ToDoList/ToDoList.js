export default class ToDoListController {
  constructor($scope) {
    this.$scope = $scope;
    this.items = [""];
  }

  $onInit() {}

  add() {
    this.items.push("");
  }

  delete(itemIndex) {
    this.items.splice(itemIndex, 1);
  }

  change(itemIndex, value) {
    this.items[itemIndex] = value;
  }
}
