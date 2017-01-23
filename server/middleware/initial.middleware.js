'use strict';

module.exports = (options) => {
  return function ini (req, res, next){
     const app = req.app;
     next();
  }
}// end: exports
