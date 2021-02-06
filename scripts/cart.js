window.addEventListener('load', execute)

let display = document.querySelector('.added_items')
let bill_amt = document.getElementById('bill_amt')
let total_amt = document.getElementById('total_amt')


function execute(e){
    e.preventDefault()
    getPurchaseData()
}

// let checkout = document.getElementById('checkout')
// let modalBg = document.querySelector(".modal-bg");
// let modalBg2 = document.querySelector(".modal-bg2");
// let modalClose = document.querySelector(".modal-close");

// // Delivery date
let date = document.getElementById('deliveryDate')
let targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 10)
date.textContent = targetDate.toDateString()

// pay button 
// let pay = document.getElementById('modal-btn')
// pay.addEventListener('click', ()=>{
//     modalBg2.classList.add("bg-active");
//     setTimeout(showPage, 2000)
// })
// function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("thank").style.display = "block";
//     localStorage.clear()
// }

// // close button redirect to home page
// let goTohome = document.getElementById('close')
// goTohome.addEventListener('click', ()=>{
//     window.location =  "" //"H&F.html"
// })
// // Modal box
// checkout.addEventListener('click', ()=>{
//     modalBg.classList.add("bg-active");
// })

// modalClose.addEventListener("click", function () {
//     modalBg.classList.remove("bg-active");
//   });


 // added  product



window.addEventListener('load', showAddedData)
function showAddedData() {
    let data = JSON.parse(localStorage.getItem('product_added'))
    let output = ""
    
    for(i in data){
        console.log(data[i].itemId)
       

        
        output += ` 
                         
                                   <div class= "addedItemCard">
                                         <div class="addedItemDetails">
                                             <div class="proImgBox"><img class="proImg" src=${data[i].itemImg}></img></div>
                                             <p>${data[i].itemDesc}</p>
                                             <button class="proDel" id="${data[i].id}" onclick="deleteAdded(this)"><i class="far fa-trash-alt"></i></button>
                                         </div>
                                         
                                         <div>
                                                <div class="quantity">
                                                                    <button class="minus" onclick="minus(${data[i].id})">-</button>
                                                                    <input type="text" data-id=input${data[i].id} class="quan" id="${data[i].id}" price="${data[i].price}" value=1 onchange="multiply(this)">
                                                                    <button class="plus" onclick="plus(${data[i].id})">+</button>
                                                                   
                                                </div>
                                                <div class="price">₹${data[i].itemPrice}</div> 
                                         </div>
                                         
                                         
                                   </div>
                     
                     `
      }
      
      document.getElementById('display').innerHTML = output
    
}













  localStorage.setItem( "cart-products",JSON.stringify(data))

function getPurchaseData(){
    let added = localStorage.getItem("cart-products")
    let added_prod = JSON.parse(added)
    // console.log(added_prod)
    showAddedData(added_prod)
    addprice(added_prod)
}



   
//     let html = ""
//     for(i in data){
//         html += ` <div>
//                         <div class=cartImg>
//                              <img src="${data[i].img}" alt="image">
//                         </div>
//                         <div>${data[i].des}</div>
//                         <button class="delete" onclick=delet(${data[i].id})>X</button>
//                         <hr>
//                          <div>
//                                 <div class="quantity">
//                                         <button class="minus" onclick="minus(${data[i].id})">-</button>
//                                         <input type="text" data-id=input${data[i].id} class="quan" id="${data[i].id}" price="${data[i].price}" value=1 onchange="multiply(this)">
//                                         <button class="plus" onclick="plus(${data[i].id})">+</button>
//                                         </div>
//                                 </div>
//                                 <div>₹${data[i].price}</div>
//                          </div>
                        
                        
//                 </div>
//                 <div>
//                         <div colspan="6"><div class="line2"></div></div>
//                 </div>`
//     }
//     document.getElementById('display').innerHTML = html
    
// }


// Handling no of quantity


function minus(pid){
    let added = localStorage.getItem("cart-products")
    let data = JSON.parse(added)
    for(i in data){
        if (data[i].id === pid){
            let total = document.querySelector(`[data-id=total${data[i].id}]`)
            total.textContent = Number(total.textContent)  - Number(data[i].price)
            if(total.textContent < 1){
                total.textContent = 0
            }

            let input = document.querySelector(`[data-id=input${data[i].id}]`)
            let val = input.value
            input.value = Number(val) - 1
            if(val < 1){
                input.value = 0
            }
        }
    }
    cartTotal()
}


function plus(pid){
    let added = localStorage.getItem("cart-products")
    let data = JSON.parse(added)
    for(i in data){
        if (data[i].id === pid){
            let total = document.querySelector(`[data-id=total${data[i].id}]`)
            total.textContent = Number(total.textContent) + Number(data[i].price)

            let input = document.querySelector(`[data-id=input${data[i].id}]`)
            let val = input.value
            input.value = Number(val) + 1
        }
    }
    cartTotal()
}


let offer = document.querySelector('.offer')
let freeShip = document.querySelector('.free_ship')
function cartTotal(){
    let added = localStorage.getItem("cart-products")
    let data = JSON.parse(added)
    let tot = 0
    for(i in data){
        let total = document.querySelector(`[data-id=total${data[i].id}]`).textContent
        tot += Number(total)        
    }
    bill_amt.textContent = tot.toFixed(2) 
    total_amt.textContent = (Number(tot) + (Number(tot) * 0.18)).toFixed(2)
    if(bill_amt.textContent > 1999){
        offer.style.display = "none"
        freeShip.style.display = "block"
    } else if (bill_amt.textContent < 1999){
        offer.style.display = "block"
        freeShip.style.display = "none"
    }
}

function addprice(data){
    let total = 0;
    let bill = 0;
    for(i in data){
        let total_prod_price = document.querySelector(`[data-id=total${data[i].id}]`).textContent
        bill += Number(total_prod_price) 
        total = Number(bill) + (Number(bill) * 0.18)
    }
    bill_amt.textContent =bill
    total_amt.textContent = total
}

function delet(did){
    let added = localStorage.getItem("cart-products")
    let data = JSON.parse(added)
    for(i in data){
        if(data[i].id == did){
            console.log(data[i])
            // localStorage.removeItem("cart-products");
        }
    }
}
