describe('Factory: tasksService', function () {
  'use strict';

  var myService = null;
  var responseData = null;
  var items = null;
  var $httpBackend;

  beforeEach(module('core.services'));


  beforeEach(inject(function(_tasksService_) {
    tasksService = _tasksService_;
    $httpBackend = _$httpBackend_;
  }));


  describe('when getting items', function () {
    it('should return data', function () {
      $httpBackend.expectGET(/\/editDetails/).respond('');
      tasksService.getItems();
      $httpBackend.flush();
    });
  });





});



