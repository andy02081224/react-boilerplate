# react-boilerplate

My personal react project starter. Feel free to use it if you find it helpful.

## Install
```bash
git clone https://github.com/andy02081224/react-boilerplate.git
npm install
```

## Inside Stuff
- [x] Webpack
- [x] Babel
- [X] React Hot Loader
- [x] SCSS
- [x] ESLint
- [ ] Mocha


## Tasks
`npm start`: Start webpack dev server with hot module replacement

`npm run build`: Build production version

`npm run lint`: Lint JS files

## Structures
All front-end code resides in app directory as described below.
```
app/
 |__ index.html
 |__ img/
 |__ js/
 |    |__ app.js 
 |    |__ components/
 |         |__ Component1/
 |         |__ Component2/
 |__ styles/
      |__ helpers/
      |__ vendors/
      |__ base/
      |__ layout/
      |__ components/
      |__ pages/
```

`app.js` inside js directory is the entry point of webpack. All React components are inside js/components directory.

The styles folder structure follows the decent [7-1 pattern](https://sass-guidelin.es/#architecture) proposed by Hugo Giraudel.
