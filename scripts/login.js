window.addEventListener('load', ()=> {
    var btn = document.getElementById('loginbtn')
    btn.addEventListener('click', handleLogin)
})

function handleLogin(){
    event.preventDefault()
    var form = document.getElementById('form');
    var formData = new FormData(form)
    var email = formData.get("email")
    var password = formData.get("password")

    let message = validate(email,password)

    if(message == "success"){
        location.assign("user.html")
    }else {
        const warning = document.getElementById("warning")
        warning.innerHTML = message
        if(message == "Account doesn’t exists"){
            const anchor = document.querySelector('a');
            anchor.classList.remove("hide")
        }
    }
}

function validate(email,password){
    const users = JSON.parse(localStorage.getItem("users"))

    for(let user of users){
        if(user.email === email && user.password === password){
            localStorage.setItem("currentUser",JSON.stringify(user))
            return "success"
        }
        if(user.email === email){
            return "Wrong Credentials"
        }
       
    }
    return "Account doesn’t exists"
}