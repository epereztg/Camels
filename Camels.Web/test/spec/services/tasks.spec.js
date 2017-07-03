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
      //$httpBackend.expectGET(/\/editDetails/).respond('');
      $httpBackend.expectGET(/..\/configuration/).respond('');
      //tasksService.getItems("editDetails");
      //$httpBackend.flush();
    });
  });


  describe('when getting task detail', function () {
    it('should return data', function () {
      $httpBackend.expectGET(/..\/configuration/).respond('');
      //tasksService.getItem("editDetails", 1);
      //$httpBackend.flush();
    });
  });





});
