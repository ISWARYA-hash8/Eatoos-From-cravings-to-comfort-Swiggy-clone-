import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";




//describe("contact us page test case");
test("Should load the contact us component " ,() =>{
    render(<Contact/>);


    const heading = screen.getByRole("heading");
       
    expect(heading).toBeInTheDocument(); 



});

// test("Should load the button inside contact  component " ,() =>{
//     render(<Contact/>);


//     const button = screen.getByText("Submit");
       
//     expect(button).toBeInTheDocument(); 



// });

// test("Should load the button inside contact  component " ,() =>{
//     render(<Contact/>);


//     const Iname = screen.getByRole("name");
       
//     expect(Iname).toBeInTheDocument(); 



// });

// you can use test or it 
it("Should load 2 input boxes on the contact component " , () =>{
    render(<Contact/>);    //render
    const inputBoxes = screen.getAllByRole("textbox");   //query

    console.log(inputBoxes)
    expect(inputBoxes.length).toBe(2);   //Assertion
});

