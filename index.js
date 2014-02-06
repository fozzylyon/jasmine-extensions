'use strict';

// Source: https://gist.github.com/prantlf/8631877
// Checks if the actual object is an instance of the expected type;
// the functional object `expected` can be any ancestor prototype.
//
// Example:
//     expects(new Backbone.Model()).toBeInstanceOf(Backbone.Model);
jasmine.Matchers.prototype.toBeInstanceOf = function(expected) {
  var actual  = this.actual;
  var notText = this.isNot ? ' not' : '';
  this.message = function() {
    return 'Expected ' + actual + notText + ' to be an instance of ' + expected;
  };
  return actual instanceof expected;
};