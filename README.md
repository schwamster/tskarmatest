# Setting up tests with Typescript, Karma, Jasmine, Browserify in Visual Studio Code

this repository should help to get you started with getting a Testable Typescript Procject up and running in Visual Studio Code.
Follow the instructions in a blank project or just use the code in the repository to play with the project.

Requirements: 
- install Visual Studio Code (https://code.visualstudio.com/docs/setup/setup-overview);
- install node.js (https://nodejs.org), install the following package globally:
- npm install -g typescript
- npm install -g typings
- npm install -g karma-cli

then you can run:
- npm run start   (to see what the app does)
- npm run test    (to run the tests)

Or you follow the step by step guide and se the project up from scratch =>

#Step by step
## init typescript & npm
- npm init
- npm install -g typescript
- tsc --init

Open tsconfig.json and set sourceMap to true

## Add a file -> src/simple.ts

    export function subtract(a: number, b: number) : number {
        return a - b;
    }

## Add a file -> src/app.ts
    import {subtract} from './simple'

    class Startup{
        public static main(){
            var x = subtract(10,5);
            console.log(`10 - 5 = ${subtract(10,5)}`);
        };
    }

    Startup.main();


## add compile task (if using VSC)
- Ctrl+Shift+P -> Configure Task Runner  > Typescript tsconfig

- Build with Ctrl+Shift+B

- run with node ./src/app.js to test if it worked

- Hide js files if you want:  settings.json -> "**/*.js": { "when": "$(basename).ts"}
  add settings.json to .vscode -folder:

    {
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/.DS_Store": true,
        "**/*.js": { "when": "$(basename).ts"}
    }
}

## debuging
- Press F5 configure node (this will create launch.json)
set programm to "${workspaceRoot}/src/app.js" and sourceMap to true (debug support for ts)

## bonus show jsdoc
decorate the subtract function like this:
    [lang=js]
    /**this function will subtract b from a */
    export function subtract(a: number, b: number) : number {
        return a - b;
    }

now when you use the function e.g. in app.ts you will get that description displayed in the intellisense overlay

## typings
This is a typings manager so you can use "regular" js-packages with the typescript benefits
- npm install -g typings

## karma
A commonly used Testrunner is karma, Jasmine is a widly spread bdd-testframework for javascript.
Browserify and Tsify are used to transpile the Typscript to browser compatible javascript
The following will take care of installing and configuring karma/jasmin to work with typescript

### install karma and dependencies
- npm install jasmine --save-dev
- npm install karma --save-dev
- npm install karma-jasmine karma-chrome-launcher karma-browserify browserify watchify tsify --save-dev
- npm install -g karma-cli

### configure karma 

- karma init

    [lang=js]
    defaults plus: frameworks: browserify; files: ./test/*.ts; preprocessors on ts -> browserify ->     browserify: {
        debug: true,
        plugin:["tsify"],
        extensions: ['.ts']
        },


- typings install dt~jasmine --save --global

### Add test file test/simple.spec.ts
    [lang=js]
    ///<reference path="../typings/index.d.ts"/>
    ///<reference path="../src/simple.ts"/>

    describe('subtract method', () => {
        it('subtracts 2 numbers', () => {
            expect(subtract(2, 5)).toBe(-3);
        });
    });

### further links:
- Getting to know Karma: https://karma-runner.github.io/
- Getting to know Jasmine: https://github.com/jasmine/jasmine
- Getting to know Typescript: https://www.typescriptlang.org/
- Getting to know Visual Studio Code: https://code.visualstudio.com/docs

Please open issues if something is unclear. I will try to improve the documentation..