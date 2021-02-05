window.addEventListener('load',function(){
    loadData()
   
})
let data = []

async function loadData() {
    try{
        let response = await fetch('http://localhost:3000/facePrimer')
        let data =    await response.json();
        let sortt = document.getElementById('sortBY')
    sortt.addEventListener('change', function () {
      let form = document.querySelector('form')
      let formData = new FormData(form)
      let sortBy = formData.get('sortBy')
      console.log(sortBy);
      if (sortBy == 'desc') {
        function compare(a, b) {
          var sumA = data.price
          var sumB = data.price
          if (sumA == sumB) {
            return b.price - a.price
          }
          else {
            return sumB - sumA;
          }
        }

        var detail = data.sort(compare)
        displayData(data)
      }
      else {
        function compare(a, b) {
          var sumA = data.price
          var sumB = data.price
          if (sumA == sumB) {
            return a.price - b.price
          }
          else {
            return sumA - sumB;
          }
        }

        var detail = data.sort(compare)
        console.log(detail);
        displayData(data);
      }
    })
    function compare(a, b) {
      var sumA = data.price
      var sumB = data.price
      if (sumA == sumB) {
        return b.price - a.price
      }
      else {
        return sumB - sumA;
      }
    }

    var detail = data.sort(compare)
    console.log(detail);
    displayData(data);

  }

       
    catch(err) {
             console.log(err)
    }
}
  
 function displayData(data) {
       
  let output = "" ;
  for(i in data) {
  output +=  
       
          `<div class="product-card">
          <p id="tag" style="text-align: left; padding-left: 1rem;">${data[i].category}</p>
          <div class="product-pic">
              <img src=${data[i].imgUrl} alt="..."></img>
          </div>
          <div class="product-info">
              <p class="product-des">${data[i].des}</p>
              <p class="product-price">₹${data[i].price}</p>
          </div>
          <div id="btn" class="product-btn">
              <button class="heart" onclick="toggle()"><i class="fas fa-heart icon-cog"></i></button>
              <button class="add">ADD TO BAG</button>
          </div>
      </div>`
      
}
 
 document.querySelector(".product").innerHTML = output ;
}

 
;
    
    
const whiteHeart = '\u2661';
const blackHeart = '\u2665';
const button = document.querySelector('.heart');
button.addEventListener('click', toggle);

function toggle() {
  const like = button.textContent;
  if(like==whiteHeart) {
    button.textContent = blackHeart;
  } else {
    button.textContent = whiteHeart;
  }
}

function  showDetails(event) {
  let id = event.id 
  console.log(id)
  let params = new URLSearchParams()
  params.append('id',id)
  url = "kajalProduct.html"
  window.location.assign(url + "?" + params.toString())
  }
  function openForm() {
  document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
  document.getElementById("myForm").style.display = "none";
  }
  
  
  
  
  const wishlistAdd = async(event) => {
   
  let id = event.id
  
  // document.querySelector('.heart').style.color = "red"
  let url = `http://localhost:3000/kajal/${id}`
  // console.log(url)
  fetch(url) 
           .then(res => res.json())
           .then(data => save_to_wish(data.id,data.imgUrl,data.des,data.price))
           .catch(err=>console.log(err))           
  }
  function save_to_wish(itemId,itemImg,itemDesc,itemPrice) {
  console.log(itemDesc,itemId)
  let randomData = JSON.parse(localStorage.getItem("product_wish")) || [] ;
  let retrivedData = {itemId,itemImg,itemDesc,itemPrice}
  let prod = [...randomData,retrivedData]
  localStorage.setItem('product_wish',JSON.stringify(prod))
  }
  
  
  const addedToBag = async(event) => {
   
    let id = event.id
    
    
    let url = `http://localhost:3000/kajal/${id}`
    
    fetch(url) 
             .then(res => res.json())
             .then(data => save_to_cart(data.id,data.imgUrl,data.des,data.price))
             .catch(err=>console.log(err))           
    }
    function save_to_cart(itemId,itemImg,itemDesc,itemPrice) {
    console.log(itemDesc,itemId)
    let randomData = JSON.parse(localStorage.getItem("product_added")) || [] ;
    let retrivedData = {itemId,itemImg,itemDesc,itemPrice}
    let prod = [...randomData,retrivedData]
    localStorage.setItem('product_added',JSON.stringify(prod))
    }
  