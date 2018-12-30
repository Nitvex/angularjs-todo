export default class ToDoItemController {
  constructor($scope) {
    this.$scope = $scope;
    this.focused = false;
  }

  $onInit() {
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
    this.onChange();
  }

  delete(){
      this.onDelete();
  }
}
