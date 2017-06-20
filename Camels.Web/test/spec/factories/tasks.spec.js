describe('Factory: tasksService', function () {
  'use strict';

  var tasksService, $httpBackend;;


  beforeEach(module('core.services'));


  beforeEach(inject(function (_tasksService_, _$httpBackend_) {
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



