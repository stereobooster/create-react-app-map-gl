To reproduce bug

```
yarn install
yarn start
```

Error:

```
Uncaught TypeError: Cannot convert undefined or null to object
    at Function.keys (<anonymous>)
    at new module.exports (index.js:9)
    at Object.<anonymous> (web_worker.js:5)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.module.exports.name (worker_pool.js:4)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.simplexFont.  (global_worker_pool.js:2)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.<anonymous> (style.js:23)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.<anonymous> (map.js:8)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.<anonymous> (mapbox-gl.js:11)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.defineProperty.value (map.react.js:47)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.defineProperty.value (index.js:3)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.<anonymous> (index.js:22)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.<anonymous> (App.js:4)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.<anonymous> (index.js:3)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at fn (bootstrap a8ee623…:83)
    at Object.<anonymous> (min-document (ignored):1)
    at __webpack_require__ (bootstrap a8ee623…:659)
    at bootstrap a8ee623…:708
    at bootstrap a8ee623…:708
```
