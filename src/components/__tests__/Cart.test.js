import RestaurantMenu from "../RestaurantMenu"
import "@testing-library/jest-dom";
import { render , screen , act, fireEvent } from "@testing-library/react"
import MOCK_DATA_NAME from "../mocks/mockResListData.json"
import appStore from "../../utils/appstore";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA_NAME)
        }
    })
})




it("Should load the Restaurant menu compoennt", async() =>{
    await act(async () => render(
    
    <Provider store = {appStore}>
    <RestaurantMenu/>
    </Provider>

));
      
    const accordionHeader = screen.getByText("Biriyani (2)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(2);  


const addBtn = screen.getAllByRole("button" , { name :"Add +"});


})