Webpack 1, react-map-gl 3 beta

To reproduce bug

```
yarn install
yarn start
```

Error message:

```
Uncaught Error: Cannot find module "../util/util"
    at webpackMissingModule (map.js:3)
    at Object.<anonymous> (map.js:3)
    at __webpack_require__ (bootstrap dbe7190…:555)
    at fn (bootstrap dbe7190…:86)
    at Object.<anonymous> (mapbox-gl.js:11)
    at __webpack_require__ (bootstrap dbe7190…:555)
    at fn (bootstrap dbe7190…:86)
    at Object.<anonymous> (static-map.js:65)
    at __webpack_require__ (bootstrap dbe7190…:555)
    at fn (bootstrap dbe7190…:86)
Error in ./~/react-map-gl/~/mapbox-gl/js/util/util.js
Module parse failed: node_modules/react-map-gl/node_modules/mapbox-gl/js/util/util.js Unexpected token (15:35)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (15:35)
 @ ./~/react-map-gl/~/mapbox-gl/js/mapbox-gl.js 26:16-38

```
