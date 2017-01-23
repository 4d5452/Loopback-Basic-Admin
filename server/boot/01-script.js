'use strict';

// async method call
module.exports = function(app, cb) {
  let modelNames = Object.keys(app.models);
  let models = [];

  modelNames.forEach(function(m) {
    let modelName = app.models[m].modelName;
    if(models.indexOf(modelName) === -1){
      models.push(modelName);
    }
  });

  console.log('Models:', models);

  /*-----------------------*/

  // force async callback
  process.nextTick(cb); // Remove if you pass cb to async
}// end: exports