'use strict';

describe('Factory: tasksService', function() {
  var myService = null;
  var responseData = null;
  var items = null;
  var $httpBackend;

  beforeEach(module('core.services'));

  // beforeEach(inject(function($injector) {
  //     // Set up the mock http service responses
  //     $httpBackend = $injector.get('$httpBackend');
  //
  //   }

  beforeEach(inject(function(_TasksService_) {
    myService = _TasksService_;
    $httpBackend = $injector.get('$httpBackend');
  }));
  //});
  //Example
  var tasksService;
 
  it('can get an instance', inject(function(tasksService) {

    expect(tasksService).toBeDefined();
  }));

  it('should return 12 items', function() {

    myService.getList()
      .then(function(items) {
        responseData = items;
      });
    console.log(items);
    expect(responseData.length).toBe(12);


  });

});
////e).toBeDefined();
//}));

it('should return 12 items', function() {

  myService.getList()
    .then(function(items) {
      responseData = items;
    });
  console.log(items);
  expect(responseData.length).toBe(12);


});

//});
