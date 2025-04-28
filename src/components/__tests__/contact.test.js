import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

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


