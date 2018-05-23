//let request = require('request');
let async = require('async');

function doLookup(entities, options, cb){
    // store results in this array
    let lookupResults = [];
    async.each(entities, function(entity, next){
          var date = _getFormattedTime(entity.value);

          lookupResults.push({

                    entity: entity,

                    data: {
                       summary: [date],
                       details: [date]
                    }

                });
                next();
    }, function(err){
        cb(err, lookupResults);
    });
 }

 function _getFormattedTime(unixtimestamp)
 {
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(unixtimestamp*1000);
      return date;
 }

module.exports = {
    doLookup: doLookup
 };
