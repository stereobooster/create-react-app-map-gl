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
TypeError: Cannot convert undefined or null to object
▼ 38 stack frames were expanded.
new module.exports
http://localhost:3000/static/js/bundle.js:89620:28
(anonymous function)
http://localhost:3000/static/js/bundle.js:83903:46
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
Object.module.exports.name
http://localhost:3000/static/js/bundle.js:84654:19
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
Object.simplexFont.
http://localhost:3000/static/js/bundle.js:72874:20
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
(anonymous function)
http://localhost:3000/static/js/bundle.js:34731:23
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
(anonymous function)
http://localhost:3000/static/js/bundle.js:81596:15
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
(anonymous function)
http://localhost:3000/static/js/bundle.js:18010:16
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
(anonymous function)
http://localhost:3000/static/js/bundle.js:27800:14
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
Object.emptyObject
http://localhost:3000/static/js/bundle.js:20581:70
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
(anonymous function)
http://localhost:3000/static/js/bundle.js:59443:86
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
(anonymous function)
http://localhost:3000/static/js/bundle.js:43029:14
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
(anonymous function)
http://localhost:3000/static/js/bundle.js:40769:12
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
fn
http://localhost:3000/static/js/bundle.js:84:20
(anonymous function)
http://localhost:3000/static/js/bundle.js:98894:18
__webpack_require__
http://localhost:3000/static/js/bundle.js:660:30
(anonymous function)
http://localhost:3000/static/js/bundle.js:709:39
(anonymous function)
http://localhost:3000/static/js/bundle.js:712:10
```
