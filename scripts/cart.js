window.addEventListener('load', execute)

let display = document.querySelector('.added_items')
let bill_amt = document.getElementById('bill_amt')
let total_amt = document.getElementById('total_amt')


function execute(e){
    e.preventDefault()
    getPurchaseData()
}

let checkout = document.getElementById('checkout')
let modalBg = document.querySelector(".modal-bg");
let modalBg2 = document.querySelector(".modal-bg2");
let modalClose = document.querySelector(".modal-close");

// Delivery date
let date = document.getElementById('deliveryDate')
let targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 10)
date.textContent = targetDate.toDateString()

// pay button 
let pay = document.getElementById('modal-btn')
pay.addEventListener('click', ()=>{
    modalBg2.classList.add("bg-active");
    setTimeout(showPage, 2000)
})
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("thank").style.display = "block";
    localStorage.clear()
}

// close button redirect to home page
let goTohome = document.getElementById('close')
goTohome.addEventListener('click', ()=>{
    window.location =  "" //"H&F.html"
})
// Modal box
checkout.addEventListener('click', ()=>{
    modalBg.classList.add("bg-active");
})

modalClose.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
  });
// added  product

// let data =[ {
//     id: 2,
//     title: "SMUDGE ME NOT LIP DUO",
//     mrp: 999,
//     price: 599,
//     discount: 30,
//     img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-lip-duo-01-brazen-raisin-burgundy-13200661643347.progressive.jpg?v=1577305698      "
//   },
//   {
//     id: 3,
//     title: "SMUDGE ME NOT MINIS SET- BLACK",
//     mrp: 589,
//     price: 459,
//     discount: 18,
//     img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-minis-set-black-14964843151443.progressive.jpg?v=1611061746"
//   }
// ]
  localStorage.setItem( "cart-products",JSON.stringify(data))

function getPurchaseData(){
    let added = localStorage.getItem("cart-products")
    let added_prod = JSON.parse(added)
    // console.log(added_prod)
    showPurchaseData(added_prod)
    addprice(added_prod)
}

function showPurchaseData(data){
    // console.log(data)
    display.innerHTML = ""
    // let table = document.createElement('table')
    // let thead = document.createElement('thead')
    // let tr1 = document.createElement('tr')
    // let th1 = document.createElement('th')
    // let th2 = document.createElement('th')
    // th2.textContent = 'PRODUCT'
    // let th3 = document.createElement('th')
    // th3.textContent = 'PRICE'
    // let th4 = document.createElement('th')
    // th4.textContent = 'QUANTITY'
    // let th5 = document.createElement('th')
    // th5.textContent= 'TOTAL'
    // tr1.append(th1, th2, th3, th4, th5)
    // let tr2 = document.createElement('tr')
    // let td6 = document.createElement('td')
    // td6.setAttribute('colspan', '6')
    // let div = document.createElement('div')
    // div.setAttribute('class', 'line2')
    // td6.append(div)
    // tr2.append(td6)
    // thead.append(tr1, tr2)
    // table.append(thead)
    
    // let tbody = document.createElement('tbody')

    

   
    let html = ""
    for(i in data){
        html += ` <div>
                        <div class=cartImg>
                             <img src="${data[i].img}" alt="image">
                        </div>
                        <div>${data[i].des}</div>
                        <button class="delete" onclick=delet(${data[i].id})>X</button>
                        <hr>
                         <div>
                                <div class="quantity">
                                        <button class="minus" onclick="minus(${data[i].id})">-</button>
                                        <input type="text" data-id=input${data[i].id} class="quan" id="${data[i].id}" price="${data[i].price}" value=1 onchange="multiply(this)">
                                        <button class="plus" onclick="plus(${data[i].id})">+</button>
                                        </div>
                                </div>
                                <div>₹${data[i].price}</div>
                         </div>
                        
                        
                </div>
                <div>
                        <div colspan="6"><div class="line2"></div></div>
                </div>`
    }
    document.getElementById('display').innerHTML = html
    
}
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
