import { render, screen, logRoles, getAllByTestId , waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import Card from './Card';
import SummaryPage from './SummaryPage';
import OrderPage from './OrderPage';

//test Suite
describe("Testing Card component",function()
{
  test("Checking the count of the image",async function()
  {
    //logic to check the count of the image
    render(<App/>)
    // const myImages = await screen.findAllByTestId("image")

    const myImages = await waitFor(function()
    {
       return screen.getAllByTestId("image")
    })

   
    // myImages = [1st, 2nd, 3rd...]
    expect(myImages.length).toEqual(2)
  })

  test("Checking the whether of the image is proper or not",async function()
  {
    //logic to check the count of the image
    render(<App/>)
    const myImages = await screen.findAllByTestId("image")
    // myImages =[1st image details, 2nd image details]
   expect(myImages[0].getAttribute("src")).toEqual("https://restaurantclicks.com/wp-content/uploads/2023/02/Best-Chocolate-Ice-Cream-1024x576.jpg")
   expect(myImages[1].getAttribute("src")).toEqual("https://www.biggerbolderbaking.com/wp-content/uploads/2018/05/Vanilla-2-Ingredient-Ice-cream2-scaled.jpg")

  }) 

  test("Checking whether the inital qunaity is 0 or not", async function()
  {
    render(<SummaryPage/>)

    const myDiv2 = await screen.findByTestId("total")

    expect(myDiv2.innerHTML).toEqual("0")
  })
  
  test("checking the order count or the quantity", async function()
  {
    render(<Card/>)
    const myAddbtn = await screen.findAllByTestId("addbtn")
    // myAddbtn = [1st btn, 2nd btn]
    userEvent.click(myAddbtn[1 ])
    const Quan = await screen.findByTestId("quantity")
    expect(Quan.innerHTML).toEqual("1")
    
  }) 

  test("Checking the order id", function()
  {
    render(<OrderPage/>)

    const myOrderId = screen.queryByTestId("id")

    expect(myOrderId.innerHTML).toEqual("400")
  })

  test("Checking the order id", function()
  {
    const View = render(<OrderPage/>)

    // logRoles(View.container)
    screen.getAllByRole("heading")
  })
  
})