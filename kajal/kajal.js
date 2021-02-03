window.addEventListener('load',function(){
    loadData()
   
})
let data = []

async function loadData() {
    try{
        let response = await fetch('http://localhost:3000/kajal')
        let data =    await response.json();
        let output = "" ;
        for(i in data) {
        output +=  
             
                   `<div class="card" style="width: 17rem;height: 27rem">
                        <p id="tag" style="m-2">${data[i].category}</p>
                             <img src=${data[i].imgUrl} class="card-img-top" style="width: 14rem" alt="..."></img>   
                        <div class="card-body">
                                <p class="card-text">${data[i].des}</p>
                                <p>${data[i].price}</p>
                                <div id="btn">
                                    <button class="heart"><i class="fas fa-heart"></i></button>
                                    <button class="add">ADD TO BAG</button>
                                </div>
                        </div>
                   </div>`
            
     }
       
       document.querySelector(".product").innerHTML = output ;
    }

    catch(err) {
             console.log(err)
    }
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

