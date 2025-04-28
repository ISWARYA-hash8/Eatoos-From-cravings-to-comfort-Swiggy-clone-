import {render,screen} from "@testing-library/react";
import Contact from "../Contact";

test("Should load the contact us component " ,() =>{
    render(<Contact/>);


    const heading = screen.getByRole("heading");
       
    expect(heading).toBeInTheDocument();



})