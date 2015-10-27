app.directive("edit", function() {
    return {
        restrict: "E",
        templateUrl: 'js/directives/edit.html',
        scope: {
            value: "=",
        },
    };
});