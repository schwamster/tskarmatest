///<reference path="../typings/index.d.ts"/>

import {subtract} from './simple'

class Startup{
    public static main(){
        var x = subtract(10,5);
        console.log(`10 - 5 = ${subtract(10,5)}`);
    };
}

Startup.main();