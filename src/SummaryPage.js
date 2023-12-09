import React from 'react'

const SummaryPage = (props) => { //props==>data={setSatge}

  React.useEffect(function () {
    //Logic to read the data(quantity, name) from the localstorage

    let icecreameData = JSON.parse(localStorage.getItem("cart"))

    let totalQuantity = 0
    // console.log(icecreameData)
    for (let i in icecreameData) {
      var quantity = icecreameData[i][0]
      var name = icecreameData[i][1]
      console.log(name, quantity)

      totalQuantity = totalQuantity + quantity

      const myDiv = document.getElementById("div")
      myDiv.append(name + ":" + quantity)

     
    }
    const myTotal = document.getElementById("total")
    myTotal.innerText=""
    myTotal.append(totalQuantity)
  })

  function goToOrderPage()
  {
    props.data("orderpage")
  }

  return (
    <div>

      <div id='div'>
      </div>
      <div id='total' data-testid="total"></div>
      <div>
        <button className='btn btn-success ' onClick={goToOrderPage}>Continue</button>
      </div>

    </div>
  )
}

export default SummaryPage