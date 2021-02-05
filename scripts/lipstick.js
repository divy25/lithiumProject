window.addEventListener('load', function () {
  loadData()

})
let data = []

async function loadData() {
  try {
    let response = await fetch('http://localhost:3000/lipstick')
    let data = await response.json();
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
      

    catch (err) {
        console.log(err)
      }
    }

;

    function displayData(data) {
      let output = "";
      for (i in data) {
        output +=

          `<div class="product-card">
                   <p id="tag" style="text-align: left; padding-left: 1rem;">${data[i].category}</p>
                   <div class="product-pic">
                       <img src=${data[i].imgUrl} alt="..."></img>
                   </div>
                   <div class="product-info">
                       <p class="product-des">${data[i].des}</p>
                       <p class="product-price">${data[i].price}</p>
                   </div>
                   <div id="btn" class="product-btn">
                       <button class="heart" onclick="toggle()"><i class="fas fa-heart icon-cog"></i></button>
                       <button class="add">ADD TO BAG</button>
                   </div>
               </div>`

      }

      document.querySelector(".product").innerHTML = output;

    }



    const whiteHeart = '\u2661';
    const blackHeart = '\u2665';
    const button = document.querySelector('.heart');
    button.addEventListener('click', toggle);

    function toggle() {
      const like = button.textContent;
      if (like == whiteHeart) {
        button.textContent = blackHeart;
      } else {
        button.textContent = whiteHeart;
      }
    }




    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }





