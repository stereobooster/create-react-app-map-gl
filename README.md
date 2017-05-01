Webpack 2, react-map-gl 3 beta

To reproduce bug

```
yarn install
cd node_modules/react-map-gl/
npm run postinstall
cd ../..
yarn start
```

Error:

```
Uncaught Error: Module parse failed: /node_modules/react-map-gl/node_modules/mapbox-gl/js/util/util.js Unexpected token (15:35)
You may need an appropriate loader to handle this file type.
|  * @private
|  */
| exports.easeCubicInOut = function(t: number): number {
|     if (t <= 0) return 0;
|     if (t >= 1) return 1;
    at Object.validateFormat (bootstrap b9b7d1b…:708)
    at __webpack_require__ (bootstrap b9b7d1b…:659)
    at fn (bootstrap b9b7d1b…:83)
    at Object.<anonymous> (map.js:3)
    at __webpack_require__ (bootstrap b9b7d1b…:659)
    at fn (bootstrap b9b7d1b…:83)
    at Object.<anonymous> (mapbox-gl.js:11)
    at __webpack_require__ (bootstrap b9b7d1b…:659)
    at fn (bootstrap b9b7d1b…:83)
    at Object.defineProperty.value (static-map.js:65)
    at __webpack_require__ (bootstrap b9b7d1b…:659)
    at fn (bootstrap b9b7d1b…:83)
    at Object.defineProperty.value (interactive-map.js:15)
    at __webpack_require__ (bootstrap b9b7d1b…:659)
    at fn (bootstrap b9b7d1b…:83)
    at Object.defineProperty.value (index.js:7)
    at __webpack_require__ (bootstrap b9b7d1b…:659)
    at fn (bootstrap b9b7d1b…:83)
    at Object.<anonymous> (App.js:4)
    at __webpack_require__ (bootstrap b9b7d1b…:659)
    at fn (bootstrap b9b7d1b…:83)
    at Object.<anonymous> (index.js:3)
    at __webpack_require__ (bootstrap b9b7d1b…:659)
    at fn (bootstrap b9b7d1b…:83)
    at Object.<anonymous> (index.umd.js:89)
    at __webpack_require__ (bootstrap b9b7d1b…:659)
    at validateFormat (bootstrap b9b7d1b…:708)
    at bootstrap b9b7d1b…:708
```
