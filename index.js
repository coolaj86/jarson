module.exports.toJSON = function (nativeJar) {
  var j = nativeJar._jar || nativeJar;
  delete nativeJar._jar;
  return j;
};

module.exports.fromJSON = function (jsonJar) {
  var tough = require('tough-cookie')
    , jar = new tough.CookieJar()
    ;

  Object.keys(jsonJar.store.idx).forEach(function (domain) {
    Object.keys(jsonJar.store.idx[domain]).forEach(function (path) {
      Object.keys(jsonJar.store.idx[domain][path]).forEach(function (cookie) {
        var c
          ;

        // yes, I must convert to a string first. Objects not accepted here
        c = tough.fromJSON(JSON.stringify(jsonJar.store.idx[domain][path][cookie]));

        jar.store.idx[domain] = jar.store.idx[domain] || {};
        jar.store.idx[domain][path] = jar.store.idx[domain][path] || {};
        jar.store.idx[domain][path][cookie] = c;
      });
    });
  });

  jar._jar = jar;
  return jar;
};
