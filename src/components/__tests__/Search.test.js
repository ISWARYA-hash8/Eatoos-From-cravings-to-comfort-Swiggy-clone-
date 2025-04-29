// import { fireEvent, render,screen } from "@testing-library/react"
// import Body from "../Body"
// import MOCK_DATA from "../mocks/mockResListData.json"
// import { act } from "@testing-library/react"
// import { BrowserRouter } from "react-router-dom"
// import "@testing-library/jest-dom"

// global.fetch = jest.fn(() =>{
//     return Promise.resolve({
//         json : () =>{
//         return Promise.resolve(MOCK_DATA);
//     },

//     })
// })


// it ("Should render the body component with search button",async() =>{
//     await act(async() => render(
//     <BrowserRouter>
    
//     <Body/>
//     </BrowserRouter>
    

// ));
    
// const searchbtn = screen.getByRole("button" , { name : /search/i});


// const searchInput = screen.getByTestId()
// console.log(searchbtn);


// fireEvent.change(searchInput,{
//     target : {
//         value :"burger"
//     }
// });
// fireEvent.click(searchbtn);

// //screen should load 4 res cards 

// const cards = screen.getAllByTestId("resCard");
// expect(cards.length).toBe(5);    //fails kindly add search button functionality properly 
    
// })

