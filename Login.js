function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

function validate (){
    let result = true

    let Email = document.getElementById('txtemail').value
    let Password = document.getElementById('txtpass').value

    let errEmail = document.getElementById('errEmail')
    let errPass = document.getElementById('errPass')

    if(Email == 0){
        errEmail.innerHTML = "Email tidak boleh kosong"
        result = false
    }
    else {errEmail.innerHTML = ""}

    if(validateEmail(Email)){
        errEmail.innerHTML = ""
    }
    else{
        errEmail.innerHTML = "Email Salah Format"
        result = false
    }

    if(Password == 0){
        errPass.innerHTML = "Password tidak boleh kosong"
        result = false
    }
    else{
        errPass.innerHTML = ""
    }

    if(result){
        alert('Succesfully Login')}
        return result
}