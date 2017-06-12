'use strict';

describe('Factory: TasksService', function() {
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
var TasksService;
//Tasksservice
it('can get an instance', inject(function(TasksService) {

  expect(TasksService).toBeDefined();
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
e).toBeDefined();
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
