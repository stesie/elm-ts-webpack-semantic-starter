# elm-ts-webpack-semantic-starter


### About:
A simple Webpack setup for writing [Elm](http://elm-lang.org/) apps:

* Dev server with live reloading
* TypeScript loader
* Semantic UI + LESS
* Bundling and minification for deployment
* Basic app scaffold, using `Browser.document`


### Install:
Clone this repo into a new project folder, e.g. `my-elm-project`:
```
git clone https://github.com/stesie/elm-ts-webpack-semantic-starter my-elm-project
cd my-elm-project
```

Re-initialize the project folder as your own repo:
```
rm -rf .git         # on Windows: rmdir .git /s /q
git init
git add .
git commit -m 'first commit'
```

Install all dependencies:
```
yarn
```


### Serve locally:
```
yarn watch
```
* Access app at `http://localhost:8080/`
* Get coding! The entry point file is `src/Main.elm`
* Browser will refresh automatically on any file changes..


### Build & bundle for prod:
```
yarn build
```

* Files are saved into the `/dist` folder
* To check it, open `dist/index.html`
