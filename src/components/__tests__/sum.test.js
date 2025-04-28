import {sum} from "../sum";
import { multiple } from "../multiple";
test("sum function should calculate the sum of the two function",() =>{
    const result =  sum(3,4);


    expect (result).toBe(7);   ///Assertion
})

test("testing the multiplication function",() =>{
     const re = multiple(3,4);
     expect (re).toBe(12);
})