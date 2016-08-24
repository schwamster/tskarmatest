# Setting up tests with Typescript, Karma, Jasmine, Browserify

## init typescript & npm
npm init
npm install -g typescript
tsc --init

sourceMap true!

## Add a file -> src/simple.ts

export function subtract(a: number, b: number) : number {
    return a - b;
}


## add compile task (if using VSC)
Ctrl+Shift+P -> Configure Task Runner  > Typescript tsconfig

Build with Ctrl+Shift+B

run with node app.js

Hide js files if you want:  settings.json -> "**/*.js": { "when": "$(basename).ts"}

## debuging
Press F5 configure node -> important app.js, node and sourceMap true

## bonus show jsdoc

## typings
npm install -g typings

## karma
### install karma and dependencies
npm install jasmine --save-dev
npm install karma --save-dev
npm install karma-jasmine karma-chrome-launcher karma-browserify browserify watchify tsify --save-dev
npm install -g karma-cli

### configure karma 

karma init

    [lang=js]
    defaults plus: frameworks: browserify; files: ./test/*.ts; preprocessors on ts -> browserify ->     browserify: {
        debug: true,
        plugin:["tsify"],
        extensions: ['.ts']
        },


typings install dt~jasmine --save --global

### Add test file test/simple.spec.ts
    [lang=js]
    ///<reference path="../typings/index.d.ts"/>
    ///<reference path="../src/simple.ts"/>

    describe('subtract method', () => {
        it('subtracts 2 numbers', () => {
            expect(subtract(2, 5)).toBe(-3);
        });
    });

### learn syntax here
Getting to know Jasmine: https://github.com/jasmine/jasmine



