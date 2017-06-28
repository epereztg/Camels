describe('Factory: envService', function () {
  'use strict';

  var envService, $httpBackend;;  

  beforeEach(module('core.services'));


  beforeEach(inject(function (_envService_, _$httpBackend_) {
    envService = _envService_;
    $httpBackend = _$httpBackend_;
  }));


  describe('when getting items', function () {
    it('should return data', function () {
      //$httpBackend.expectGET(url).respond('');
      $httpBackend.expectGET(/\/configuration/).respond('');
      envService.get();
      $httpBackend.flush();
    });
  });


  //describe('when getting task detail', function () {
  //  it('should return data', function () {
     
  //    $httpBackend.expectGET(url).respond('');
  //    envService.get();
  //    $httpBackend.flush();
  //  });
  //});





});



