# About

I built an [online HTML5 platform game](https://hjgame2020.herokuapp.com/) with my son together for his  1st grade school STEM project. 
The source code of the game was originally created by [Marijn Kaverbeke](https://marijnhaverbeke.nl/) as an [online tutorial ](https://eloquentjavascript.net/16_game.html ) and I've modified the codes to include new features such as touch device support, sound playing and custom styles.

## Getting started

### Use Git

```bash
mkdir hjgame2020
cd $_     # Note: "$_" is last argument of previous command
git init  # Note: branch "master" is created
git remote add hjgame2020 git@github.com:hedgerwang/hjgame2020.git
git pull hjgame2020 master
git remote remove hjgame2020
```
## How to build an application?

- development

  ```bash
  npm run build
  ```

- production

  ```bash
  npm run build:production
  ```

_Open build/index.html in browser._

## How to develop an application?

```bash
npm run watch
```

_Open build/index.html in browser._

## Remove generated directory

If you would like to remove `build/` directory (created by Webpack):

```bash
npm run clear
```

If you would like to remove `node_modules/` and remove `build/`

```bash
npm run clear:all
```

## Count LOC (Lines of Code)

If you would like to know how many lines of code you write:

```bash
npm run count
```

## Analysis of bundle file weight

If you would like to check how much a bundle file weight:

```bash
npm run build
npm run audit
```

## License

The MIT License
