'use strict';

function doLookup(entities, options, cb) {
  let lookupResults = [];

  entities.forEach((entityObj) => {
    lookupResults.push({
      entity: entityObj,
      data: {
        summary: [], // summary is set via custom summary template
        details: {
          unixTime: entityObj.value // date is formatted via the template
        }
      }
    });
  });

  cb(null, lookupResults);
}

module.exports = {
  doLookup: doLookup
};
