export default function autoFocus($timeout) {
  return {
    restrict: "A",
    link: ($scope, $element, $attrs) => {
      $attrs.$observe("autoFocus", function(newValue) {
        if (newValue === "true")
          $timeout(() => {
            $element[0].focus();
          });
      });
    }
  };
}
