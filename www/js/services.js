angular.module('myApp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Healthconds', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var healthconds = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' },
    { id: 4, name: 'Ash Ketchum' },
    { id: 5, name: 'Ash Ketchum' },
    { id: 6, name: 'Ash Ketchum' },
    { id: 7, name: 'Ash Ketchum' },
    { id: 8, name: 'Ash Ketchum' },
    { id: 9, name: 'Ash Ketchum' },
    { id: 10, name: 'Ash Ketchum' },
    { id: 11, name: 'Ash Ketchum' },
    { id: 12, name: 'Ash Ketchum' },
    { id: 13, name: 'Ash Ketchum' },
    { id: 14, name: 'Ash Ketchum' },
    { id: 15, name: 'Ash Ketchum' },
    { id: 16, name: 'Ash Ketchum' },
    { id: 17, name: 'Ash Ketchum' },
    { id: 18, name: 'Ash Ketchum' },
    { id: 19, name: 'Ash Ketchum' },
    { id: 20, name: 'Ash Ketchum' },
    { id: 21, name: 'Ash Ketchum' },
    { id: 22, name: 'Ash Ketchum' },
    { id: 23, name: 'Ash Ketchum' },
    { id: 24, name: 'Ash Ketchum' },
    { id: 25, name: 'Ash Ketchum' },
    { id: 26, name: 'Ash Ketchum' },
    { id: 27, name: 'Ash Ketchum' },
    { id: 28, name: 'Ash Ketchum' },
    { id: 29, name: 'Ash Ketchum' },
    { id: 30, name: 'Ash Ketchum' },
    { id: 31, name: 'Ash Ketchum' },
    { id: 32, name: 'Ash Ketchum' },
    { id: 33, name: 'Ash Ketchum' },
    { id: 34, name: 'Ash Ketchum' },
    { id: 35, name: 'Ash Ketchum' },
    { id: 36, name: 'Ash Ketchum' },
    { id: 37, name: 'Ash Ketchum' },
    { id: 38, name: 'Ash Ketchum' },
    { id: 39, name: 'Ash Ketchum' },
    { id: 40, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return healthconds;
    },
    get: function(healthcondId) {
      // Simple index lookup
      return healthconds[healthcondId];
    }
  }
});
