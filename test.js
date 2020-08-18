'use strict';

require('mocha');
const assert = require('assert');
const isComputerOn = require('./');

describe('isComputerOn', function() {
  it('should return true if the computer is on:', function() {
    assert(isComputerOn());
  });

  it('should never return if the computer is off', function() {
    assert.throws(() => isComputerOn(false), /computer is turned off/);
  });
});
