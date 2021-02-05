window.addEventListener('load', showWishedData)
function showWishedData() {
    let data = JSON.parse(localStorage.getItem('product_wish'))
    let output = ""
    output += `<div class=wishHead><p>My Wishlist</p></div>`
    for(i in data){
        console.log(data[i].itemId)
       // displayWish(data[i].itemImg,data[i].itemDesc,data[i].itemPrice,data[i].itemId)

        
        output += ` 
                         
                                   <div class= "wishCard">
                                         <button class="wishDel" id="${data[i].id}" onclick="deleteWish(this)">X</button>
                                         <img class="wishImg" src=${data[i].itemImg}></img>
                                         <p>${data[i].itemDesc}</p>
                                         <h3>₹${data[i].itemPrice}</h3>
                                         <button class="moveToBag" id="${data[i].itemId}" onclick="moveToBag(this)">MOVE TO BAG</button>
                                   </div>
                     
                     `
      }
      
      document.getElementById('displayWish').innerHTML = output
    
}


// function deleteWish(event) {
//     id = event.id
//     console.log(id)
//     localStorage.remove('product_wish')
// }

// let display = document.getElementById('displayWish')

// let temp = JSON.parse(localStorage.getItem('product_wish'))
// localStorage.setItem('temp', JSON.stringify(temp))

// function deleteWish(did){
//     let added = localStorage.getItem("temp")
//     let data = JSON.parse(added)
//     let cart_remained = data.filter(el => {
//         return (el.id !== did)
//     })
    
//     localStorage.setItem('temp', JSON.stringify(cart_remained))
   
   
    
   
   
   
// }

//     let final = JSON.parse(localStorage.getItem('temp'))

//     if(JSON.stringify(final) !== JSON.stringify([])){
//         showWishedData(final)
//     } else {
//         remove()
//     }
    
// // }

//     function remove (){
//         document.querySelector('#displayWish').style.display = 'block'
//         display.style.display = 'none'
//         localStorage.removeItem('cart-products')
//         localStorage.removeItem('temp')
      
//     }




function deleteWish(itemId, e) {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
    for (var i = 0; i < data.length; i++) {
        if (data[i].itemId == itemId) {
            // DO NOT CHANGE THE 1 HERE
            data.splice(i, 1);
        }
    }
}