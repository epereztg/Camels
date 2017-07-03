//(function () {

//    'use strict';

//    function ToasterService(toaster) {

//        var toastShownTime = 6000;

//        var show = function (type, msg) {
//          msg = "SHOW";//$translate.instant(msg);
//            toaster.pop(type, null, msg, toastShownTime);
//        };

//        var showError = function (locale) {
//            show('error', locale || 'Toaster_Error');
//        };

//        var showSuccess = function (locale) {
//            show('success', locale || 'Toaster_Ok');
//        };

//        var showWarning = function (locale) {
//            show('warning', locale || 'Toaster_Warning');
//        };

//        return {
//            showError: showError,
//            showSuccess: showSuccess,
//            showWarning: showWarning
//        };
//    }

//    ToasterService.$inject = ['toaster'];

//  angular.module('core.services')
//        .factory('toasterService', ToasterService);

//})();