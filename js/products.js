window.addEventListener('load',function(){
    loadData()
   
})
let data = []

async function loadData() {
    try{
        let response = await fetch('http://localhost:3000/products')
        let data =    await response.json();
        console.log(data);
        let sortt = document.getElementById('sortBY')
        sortt.addEventListener('change',function(){
          let form = document.querySelector('form')
          let formData = new FormData(form)
          let sortBy = formData.get('sortBy')
          console.log(sortBy);
          if(sortBy == 'desc'){
            function compare(a,b){
              var sumA = data.price
              var sumB = data.price
              if(sumA==sumB){
               return b.price-a.price
              }
              else{
                return sumB-sumA;
              }
            }
            
            var detail = data.sort(compare)
            console.log(detail);
            let output = "" ;
            for(i in data) {
            output +=  
                 
                       `<div class="card" style="width: 17rem;height: auto">
                            <p id="tag" style="m-2">${data[i].title}</p>
                                 <img src=${data[i].imageUrl} class="card-img-top" style="width: 14rem" alt="..."></img>   
                            <div class="card-body">
                                    <p class="card-text">${data[i].subTitle}</p>
                                    <p>${data[i].price}</p>
                                    <div id="btn">
                                        <button class="heart"><i class="fas fa-heart"></i></button>
                                        <button style="border-radius: 5px" class="add">ADD TO BAG</button>
                                    </div>
                            </div>
                       </div>`
                
         }
           
           document.querySelector("#show").innerHTML = output ;
          }
          else{
            function compare(a,b){
              var sumA = data.price
              var sumB = data.price
              if(sumA==sumB){
               return a.price-b.price
              }
              else{
                return sumA-sumB;
              }
            }
            
            var detail = data.sort(compare)
            console.log(detail);
            let output = "" ;
            for(i in data) {
            output +=  
                 
                       `<div class="card" style="width: 17rem;height: auto">
                            <p id="tag" style="m-2">${data[i].title}</p>
                                 <img src=${data[i].imageUrl} class="card-img-top" style="width: 14rem" alt="..."></img>   
                            <div class="card-body">
                                    <p class="card-text">${data[i].subTitle}</p>
                                    <p>${data[i].price}</p>
                                    <div id="btn">
                                        <button class="heart"><i class="fas fa-heart"></i></button>
                                        <button style="border-radius: 5px" class="add">ADD TO BAG</button>
                                    </div>
                            </div>
                       </div>`
                
         }
           
           document.querySelector("#show").innerHTML = output ;
          }
        })
        function compare(a,b){
          var sumA = data.price
          var sumB = data.price
          if(sumA==sumB){
           return b.price-a.price
          }
          else{
            return sumB-sumA;
          }
        }
        
        var detail = data.sort(compare)
        console.log(detail);
        let output = "" ;
        for(i in data) {
        output +=  
             
                   `<div class="card" style="width: 17rem;height: auto">
                        <p id="tag" style="m-2">${data[i].title}</p>
                             <img src=${data[i].imageUrl} class="card-img-top" style="width: 14rem" alt="..."></img>   
                        <div class="card-body">
                                <p class="card-text">${data[i].subTitle}</p>
                                <p>${data[i].price}</p>
                                <div id="btn">
                                    <button class="heart"><i class="fas fa-heart"></i></button>
                                    <button style="border-radius: 5px" class="add">ADD TO BAG</button>
                                </div>
                        </div>
                   </div>`
            
     }
       
       document.querySelector("#show").innerHTML = output ;
    }

    catch(err) {
             console.log(err)
    }
}

;

const whiteHeart = '\u2661';
const blackHeart = '\u2665';
const button = document.querySelector('.heart');
// button.addEventListener('click', toggle);

function toggle() {
  const like = button.textContent;
  if(like==whiteHeart) {
    button.textContent = blackHeart;
  } else {
    button.textContent = whiteHeart;
  }
}