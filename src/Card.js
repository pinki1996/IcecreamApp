import React from 'react'



const Card = (props) => { //    props =>info={setStage}


    //{"cart":{"1":"2","2":"5"}}

    const [icecreameData, setIcecreamData] = React.useState([])

    React.useEffect(function()
    {
        // logic to connect to the API
        fetch("http://localhost:3000/icecreameData")
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            setIcecreamData(result)
        })
        .catch(function(error)
        {
            console.log(error)
        })
    },[])


    function collectIt(event)
    {
        //Logic to track the quantity and also the name of item
        // console.log("hii")
        if(localStorage.getItem("cart") === null)
        {
            //there is no cart key created in the local satorage
            var cart = {}
        }
        else
        {
            cart = JSON.parse(localStorage.getItem("cart"))    
        }
        
        var myId = event.target.id
        // var myName = event.target.name
        

        if(cart[myId] == undefined)
        {
            //myId is not available inside the cart
            var quantity = 1
            var name = document.getElementById("name"+myId).innerText

            cart[myId] = [quantity,name]
        }
        else
        {
            quantity = cart[myId][0] + 1
            cart[myId][0] = quantity

       }

        localStorage.setItem("cart",[JSON.stringify(cart)])

        const myQuantity = cart[myId][0]
        const Quantity = document.getElementById('quantity')
        Quantity.innerHTML =""
        Quantity.append(myQuantity)
        
    }


    function goToSummaryPage()
    {
        //logic to go to summary page or to call <SummaryPage/>
        props.info("summarypage")
    }


    return (
        <div>
           

            {
                icecreameData.map(function (data) {
                    return <div key={data.id}>
                        <div className="card" style={{ width: "18rem" }}>
                            <h1>{data.id}</h1>
                            <img src={data.imageURL} data-testid="image" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title" id={"name" + data.id}>{data.name}</h5>
                                <p className="card-text">{data.description}</p>
                                <a href="#" className="btn btn-primary" data-testid="addbtn" onClick={collectIt} id={data.id} >ADD</a>
                            </div>
                        </div>
                    </div>
                })
            }
             <div id='quantity' data-testid="quantity"></div>
            <button className="btn btn-success" onClick={goToSummaryPage}>Continue</button>
        </div>
    )
}

export default Card