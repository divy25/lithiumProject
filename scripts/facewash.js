window.addEventListener('load', function () {
    loadData();
})
let data = []

async function loadData() {
    try {
        let response = await fetch('http://localhost:3000/facewash')
        let data = await response.json();
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
    } catch (err) {
        console.log(err)
    }
}
