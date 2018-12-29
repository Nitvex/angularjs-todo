export default class ToDoItemController {
  constructor($scope) {
    this.$scope = $scope;
    this.items = [1, 2, 3, 4, 5];
  }

  $onInit() {}

  add() {
    const last = this.items[this.items.length - 1] + 1;
    this.items.push(last);
  }
}
