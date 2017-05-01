Webpack 2, react-map-gl 3 git

To reproduce bug

```
yarn install
cd node_modules/react-map-gl/
yarn install
npm run build-es5
npm run build-es6
npm run postinstall
cd ../..
yarn start
```

Error:

```
Uncaught TypeError: Cannot convert undefined or null to object
    at Function.keys (<anonymous>)
    at new module.exports (index.js:9)
    at Object.<anonymous> (web_worker.js:5)
```

`index.js:9` (`webpack:///./~/react-map-gl/~/webworkify/index.js`)

```js
var bundleFn = arguments[3];
var sources = arguments[4];
var cache = arguments[5];

var stringify = JSON.stringify;

module.exports = function (fn, options) {
    var wkey;
    var cacheKeys = Object.keys(cache);
```
