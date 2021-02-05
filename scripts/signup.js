window.addEventListener('load', ()=> {
    var btn = document.getElementById('signupbtn')
    btn.addEventListener('click', signUp)
})

var array = []

function signUp() {

    event.preventDefault()
    var form = document.getElementById('form');
    var formData = new FormData(form)

    var name = formData.get("name")
    var email = formData.get("email")
    var password = formData.get("password")

    var payload = {
        name: name,
        email: email,
        password: password
    }

    var array = JSON.parse(localStorage.getItem('users')) || [];

    var match = true;

    if (array != null) {

        for (var i = 0; i < array.length; i++) {
            if (email == array[i].email) {
                registerNotAllowed()
                match = false
            }
        }
    }

    if (match) {
        var status = document.getElementById("status")
        status.innerText = "Registration Successful.!!"

        array.push(payload);
        localStorage.setItem("users", JSON.stringify(array))
    }
}
function registerNotAllowed() {
    var status = document.getElementById("status")
    status.innerText = "User Already Exists.!!"
}