app.directive("content", function() {
    return {
        restrict: "E",
        templateUrl: 'js/directives/content.html',
        scope: {
            value: "=",
        },
    };
});