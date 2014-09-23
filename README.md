jarson
======

Convert (serialize / deserialize) `request` / `tough-cookie` cookie jars to and from JSON.

```bash
npm install --save jarson
```

```javascript
'use strict';

var JarSON = require('jarson')
  , request = require('request')
  , jar = request.jar()
  ;

  request({
    url: 'https://example.com/login'
  , method: 'POST'
  , data: { username: 'bob', password: 'secret' }
  , jar: jar
  });

  // to save to disk, for example
  var str = JSON.stringify(JarSON.toJSON(jar));

  // to retrieve from disk
  var jar = JarSON.fromJSON(JSON.parse(str));

  request({
    url: 'https://example.com/me/profile'
  , method: 'GET'
  , jar: jar
  })
```

Hopefully this is just a temporary fix for these issues and the required fixes will be applied in the near future.

  * <https://github.com/mikeal/request/issues/1085>
  * <https://github.com/goinstant/tough-cookie/issues/24>
