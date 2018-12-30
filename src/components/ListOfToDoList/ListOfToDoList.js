export default class ToDoListController {
  constructor($scope) {
    this.$scope = $scope;
    this.lists = [
      {
        name: "Casual",
        items: ["Haircut", "Groceries"]
      },
      {
        name: "Job",
        items: ["Complete task", "Meeting"]
      },
      {
        name: "third",
        items: []
      }
    ];
  }

  $onInit() {}

  add() {
    this.lists.push({
        name:"Unnamed",
        items:[]
    });
  }

  deleteList(listsIndex) {
    this.lists.splice(listsIndex, 1);
  }
}
