'use strict';

function doLookup(entities, options, cb) {
  let lookupResults = [];
  entities.forEach((entityObj) => {
    var date = _getFormattedTime(entityObj.value);

    lookupResults.push({
      entity: entityObj,
      data: {
        summary: [date],
        details: [date]
      }
    });
  });

  cb(null, lookupResults);
}

function _getFormattedTime(unixTimeStamp) {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  return new Date(unixTimeStamp * 1000);
}

module.exports = {
  doLookup: doLookup
};
