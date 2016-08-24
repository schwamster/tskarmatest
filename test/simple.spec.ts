///<reference path="../typings/index.d.ts"/>

import {subtract} from '../src/simple';

describe('subtract method', () => {
    it('subtracts 2 numbers', () => {
       expect(subtract(2, 5)).toBe(-3);
    });
});