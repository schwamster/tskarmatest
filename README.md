# tskarmatest

### init typescript & npm
npm init
npm install -g typescript
tsc --init

sourceMap true!

###Add a file -> src/simple.ts

export function subtract(a: number, b: number) : number {
    return a - b;
}


### add compile task
Ctrl+Shift+P -> Configure Task Runner  > Typescript tsconfig

Build with Ctrl+Shift+B

run with node app.js

Hide js files if you want:  settings.json -> "**/*.js": { "when": "$(basename).ts"}

##debuging
Press F5 configure node -> important app.js, node and sourceMap true

###bonus show jsdoc

### typings
npm install -g typings


### karma
npm install jasmine --save-dev
npm install karma --save-dev
npm install karma-jasmine karma-chrome-launcher karma-browserify browserify watchify tsify --save-dev
npm install -g karma-cli

### configure karma 

karma init

defaults plus: frameworks: browserify; files: ./test/*.ts; preprocessors on ts -> browserify ->     browserify: {
      debug: true,
      plugin:["tsify"],
      extensions: ['.ts']
    },


typings install dt~jasmine --save --global

###add test file test/simple.spec.ts
///<reference path="../typings/index.d.ts"/>
///<reference path="../src/simple.ts"/>

describe('subtract method', () => {
    it('subtracts 2 numbers', () => {
        expect(subtract(2, 5)).toBe(-3);
    });
});


Getting to know Jasmine: https://github.com/jasmine/jasmine



