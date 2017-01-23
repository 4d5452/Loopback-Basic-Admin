'use strict';

const app = require('../../server/server');

module.exports = function(Item) {

  /**
   * Testing method (foo) for model Item
   * @param {string} bar
   * @param {Function(Error, string)} callback
   */

  Item.foo = function(bar, cb) {
    let out = "" + bar;
    // TODO
    cb(null, out);
  };


  /*---------------set remote method------------*/

  Item.remoteMethod('foo', {
    accepts: [
      { arg: 'bar', type: 'string', required: true }
    ],
    returns: {arg: 'out', type: 'string'},
    http: {
      path: '/foo',
      verb: 'get'
    }
  });
};



