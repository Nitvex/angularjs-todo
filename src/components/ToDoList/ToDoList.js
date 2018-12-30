export default class ToDoListController {
  constructor($scope) {
    this.$scope = $scope;
    this.items = [""];
    this.focused = false;
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

  deleteToDoList() {
    this.deleteList();
  }

  onBlur() {
    this.focused = false;
    this.onChange();
  }

  onFocus(){
    this.focused = true;
  }
}
