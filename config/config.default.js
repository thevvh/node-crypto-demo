/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1603279146046_1919';
  config.middleware = [];

  config.security = {
    csrf: false,
    ctoken: false,
  };

  config.privateKey = `
-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDBPolcEZT9RcoZ
OLlfOHpeT1HgAeuarPUziBhBcdVvJ3/B6aZMK/6VZpLbe64jdkffcx6A3DF7WmCh
vI1rPQ0XP+1sgOEUPXDZudxM4JOENQeoexw+Fb5eSPHGXC71J4Q4PIk7SngfUd5B
vczjCKx94CHMmZCj/Wah6UmxhjOb7ObJbTE+Ma/SgddDGvMgdobxwxG1csGXMY21
KalbgOMSjw+YIJv3ta3iVkmqc1BbSLBGhr/vliT9oMVg3w3BvAkWOC9s4gESL4d7
7HPNOyZwST7CIOj8XalrAOl0hMV5rMa5uBj1+sjaQtAnObhrKBX0U7apaAFaDiTh
d/2bafa3AgMBAAECggEBALz0OzetcXOd1BmJX6j9/plNEg/pkMjzqeczghQsDLjd
dIzVvGfq9Mp9O8glTYcbVvflBsSVikTFgItlZRqg3bYIKk3YTz2NPlWG6SS6y0OQ
3uYdSuZiOHzU8qQ06y2H8D9U4hL5pC9ry9mYj0jH6HJEwIfg+I+BbeOPyyEsyjYB
XmwkeV0TSqVYPdlfC3tBIzXR6+ODpXL3lcJ7BqRCKO1LjBLgPG0/Ks7yeT89ZPRQ
52SszKgEDZmAO8S05Oiv3MG8YjDrDAVhJUiGhwAdpctnznZIaz/un+1aoHwFPqa+
duaRzUbiTv6L1cc/YqfFATX28usw+iQMxjfio+YhP8ECgYEA/hnW3o7YX7xvw+Fl
FXv57JUog/yHEm16lp1Bi/c0ElMM4DmZYzKj4Oeebhip9IkvqDOwQMe2lLM7kvXH
jGqp8BKoLIW9Utm2kzgYGPCZYsyc44YBtjko2ueiVVpw/jbqyLLDIsZk8jX9KNk/
pjRV645mM3MoDOX37l9QDTdjHNECgYEAwrBDQ20ilYXP2ALkb0lmpS8dDTOGgYn4
o15PMbqFutF/5P2oucIz7Lz78hgBB9NSHps9BBom6/eIvQNTfGVow9AMSM7hpIb9
v9Zi8S/JaOdErHt+PxLG3jyyoahsiLFnT1W5o2a1VabLJSvGqEwXUCdmNdq+VObb
Jso4YgCInQcCgYAERs0N+9t6aQJ8inuYC/kd2TjQV9yyG7OXe1gSEfwHXux1jaKe
P8jwTRWmhrW9jt2FeDE8NeBFympzQ72zCEyJ5NZ9wVZ5YX6oJaaKLOp39jehwKyg
s3+Th5h81UPXk3cKH7AXEr26Mdxr5pQiqPjVORVRQlvnM6ujkGkZf9gkMQKBgQCi
ZDXm4vxK7g+c5WS3cuk8dVztKwJRwMz1L/As0aFEYAUm83IuZ8+58zTQDbemWF0S
DHjLmCjJAHM8/a5Af7HwSvREMtRB0RuNTXzAIxUD/IvqtyNp5vacXtK9Rugo6Jj8
ssuigURWCkc+XRJaRQXZJNP7rda+qMU5yMlY7YsGNwKBgQDs7YD3m3iWCLKTNAic
YgdvgasvpdgJjNLOaitENkWwJrO/vdxVJkp4zv0F5mNN+jZONHBc3HwwRykpfnie
2qTGdK1gV8auQ/WBzF8mfru6P9oONpyM3r6cXgJGBzK1hTNt3dcWzF9Y//G5NtLv
vFFWjV5emPuGpIT3dTorbW2ykQ==
-----END PRIVATE KEY-----
  `;

  config.publicKey = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwT6JXBGU/UXKGTi5Xzh6
Xk9R4AHrmqz1M4gYQXHVbyd/wemmTCv+lWaS23uuI3ZH33MegNwxe1pgobyNaz0N
Fz/tbIDhFD1w2bncTOCThDUHqHscPhW+Xkjxxlwu9SeEODyJO0p4H1HeQb3M4wis
feAhzJmQo/1moelJsYYzm+zmyW0xPjGv0oHXQxrzIHaG8cMRtXLBlzGNtSmpW4Dj
Eo8PmCCb97Wt4lZJqnNQW0iwRoa/75Yk/aDFYN8NwbwJFjgvbOIBEi+He+xzzTsm
cEk+wiDo/F2pawDpdITFeazGubgY9frI2kLQJzm4aygV9FO2qWgBWg4k4Xf9m2n2
twIDAQAB
-----END PUBLIC KEY-----
  `;

  const userConfig = {};

  return {
    ...config,
    ...userConfig,
  };
};
