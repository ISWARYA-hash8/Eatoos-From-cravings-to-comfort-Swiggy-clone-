import RestaurantCard from "../RestaurantCard"
import { render,screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/rescardMockdata.json";
import "@testing-library/jest-dom"

it ("Should render Restaurant Card component with props data",() =>{
    render (<RestaurantCard resData ={ 
        MOCK_DATA

    } />)


   const name =  screen.getByText("Thena Catering Tiffin Centre") 
    expect(name).toBeInTheDocument();
    
})