(function () {
    var app = angular.module('news');
    app.directive("sliderHome", function () {
        return {
            restrict: 'AE',
            templateUrl: "../../includes/slider.html",
            controller: ['$scope', '$element', '$timeout', '$http', function ($scope, $element, $timeout, $http) {
                var item = this;
                item.sliders = [];
                $http.get('../../data/slider.json').success(function (data) {
                    item.sliders = data;
                });
            }],
            controllerAs: "sliderlist"
        };
    });
    app.directive("youtube", function () {
        return {
            restrict: 'AE',
            templateUrl: "../../views/youtube.html",
            controller: ['$scope', '$element', '$timeout', '$http', function ($scope, $element, $timeout, $http) {
                var item = this;
                item.videos = [];
                $http.get('../../data/videos.json').success(function (data) {
                    item.videos = data;
                });
            }],
            controllerAs: "videoslist"
        };
    });
    app.directive("vimeo", function () {
        return {
            restrict: 'AE',
            templateUrl: "../../views/vimeo.html",
            controller: ['$scope', '$element', '$timeout', '$http', function ($scope, $element, $timeout, $http) {
                var item = this;
                item.videos = [];
                $http.get('../../data/videos.json').success(function (data) {
                    item.videos = data;
                });
            }],
            controllerAs: "vimeoslist"
        };
    });
    app.directive("natural", function () {
        return {
            restrict: 'AE',
            templateUrl: "../../views/natural.html",
            controller: ['$scope', '$element', '$timeout', '$http', function ($scope, $element, $timeout, $http) {
                var item = this;
                item.data = [];
                $http.get('../../data/natural.json').success(function (data) {
                    item.data = data;
                });
            }],
            controllerAs: "naturallist"
        };
    });

    app.directive("homePage", function () {
        return {
            restrict: 'E',
            templateUrl: "../../views/homepage.html"
        };
    });


})();

