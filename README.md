Webpack 1, react-map-gl 3 git

To reproduce bug

```
yarn install
cd node_modules/react-map-gl/
yarn install
npm run build-es5
npm run postinstall
cd ../..
yarn start
```

Error message:

```
bootstrap a569c78…:555 Uncaught SyntaxError: Identifier 'Buffer' has already been declared
    at __webpack_require__ (bootstrap a569c78…:555)
    at fn (bootstrap a569c78…:86)
    at Object.<anonymous> (buffer_group.js:4)
    at __webpack_require__ (bootstrap a569c78…:555)
    at fn (bootstrap a569c78…:86)
    at Object.<anonymous> (bucket.js:4)
    at __webpack_require__ (bootstrap a569c78…:555)
    at fn (bootstrap a569c78…:86)
    at Object.<anonymous> (circle_bucket.js:3)
    at __webpack_require__ (bootstrap a569c78…:555)
```
