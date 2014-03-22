define(["angular"], function (angular) {
    "use strict";

    var module = angular.module('angular-acl', ['ng','LocalStorageModule']);

    function Acl() {

        function isAllowed(role) {
            function checkPermissions($q,$localStorage) {
                var defer = $q.defer();
                var $storage = $localStorage.get('UserStorage');
                if ($storage.Role !== role) {
                    defer.reject('401 Unauthorized');
                } else {
                    defer.resolve('200 OK');
                }

                return defer.promise;
            }

            checkPermissions.$inject = ['$q','localStorageService'];
            return checkPermissions;
        }
        this.isAllowed = isAllowed;
        this.$get = function () {
            var svc = {};
            svc.isAllowed = isAllowed;
            return svc;
        };

        this.isAllowed = isAllowed;

        this.$get = function () {
            var svc = {};
            svc.isAllowed = isAllowed;
            return svc;
        };


    }
    module.provider('$acl', Acl);

});
