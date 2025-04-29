import { render , fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appstore from "../../utils/appstore";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// test("Should render the Header cpmponent with a login button",() =>{
//     render(
//     <BrowserRouter>
//     <Provider store ={appstore}>
//          <Header />
//     </Provider>
//     </BrowserRouter>
    
//    );

//    const loginButton = screen.getByRole("button",{name : "Login"});
//    expect(loginButton).toBeInTheDocument();

// });


it ("SHould render Header component with a Cart item" , () =>{
    render(
        <BrowserRouter>
    <Provider store = {appstore} >
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();
})




it ("Should render Header component with a Cart item" , () =>{
    render(
        <BrowserRouter>
    <Provider store = {appstore} >
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton  = screen.getByText("Login");


    fireEvent.click(loginButton);
    const logoutButton  = screen.getByText("Logout");

    expect(logoutButton).toBeInTheDocument();
})

