let url = "https://nykaa-database.herokuapp.com/lipstick"



let query = window.location.search

window.addEventListener('load',function(){
    let query = window.location.search

    if(query!== ""){
        loadData(query)
    }else {
        console.log("there is no such query")
    }
})

let loadData = async(kajal) => {
    let query = new URLSearchParams(kajal)
    let id = query.get('id')

    try {
        let url = `https://nykaa-database.herokuapp.com/lipstick?id=${id}`
        let res = await fetch(url)
        let data = await res.json()
          createKajalCard(data)
    }

    catch(err){
        console.log("error"+err)
    }
}

function createKajalCard(data){
    let output = ""

    for(i in data){
        output += `
                    <div class="kajalCard">
                             <div class="kajalCardLeft">
                                        
                                        <img src=${data[i].imgUrl} alt="..."></img>
                             </div>
                             <div class="kajalCardRight">
                                        <h4 class="desText">${data[i].des}</h4>
                                        <div class= productRating>
                                            <img class="ratingImg" src="./images/rating.png"></img><hr>
                                            <p>1649 Ratings & 12 Reviews </p><hr>
                                            <p>Q&As</p>
                                        </div>
                                        <h5>MRP:₹${data[i].price}</h5>
                                        <p>inclusive of all taxes</p>
                                        <form class="addToDelivery">
                                                <button id = "${data[i].id}" onclick = "addedToBag(this)">ADD TO BAG</button><hr>
                                                <div class="inputPincode">
                                                    <label for="pincode"><img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/location-512.png"></img>DELIVERY OPTIONS</label>
                                                    <input id="pincode" type="text" placeholder="Enter Pincode">
                                                    </input>
                                                    
                                                </div>
                                                <a href="#">CHECK</a>

                                        </form>
                                        <div class="authenticTags">
                                            <div><img class="genuine" src="https://www.nykaa.com/assets/desktop/images/product_description/genuine_product.png" width="27" ></img></div>
                                            <span>100% GENUINE PRODUCTS</span>
                                            <div><img src="./images/exchange.png" width="27" alt="easy returns icon"></div>
                                            <span>EASY RETURN POLICY</span>
                                            <div>SOLD BY :NYKAA</div>
                                        </div>
                                
                             </div>
                     </div>
                    `
    }

    document.getElementById("display").innerHTML = output
}





