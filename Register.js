function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

function validate(){
    let result = true

    let Name = document.getElementById('txtNama').value
    let Email = document.getElementById('txtEmail').value
    let Pass = document.getElementById('txtPass').value
    let GenM = document.getElementById('radioM')
    let GenF = document.getElementById('radioF')
    var City = document.getElementById('City')
    let Address = document.getElementById('txtAdd').value

    let errName = document.getElementById('errNama')
    let errEmail = document.getElementById('errEmail')
    let errPass = document.getElementById('errPass')
    let errGen = document.getElementById('errGen')
    let errCity = document.getElementById('errCity')
    let errAdd = document.getElementById('errAdd')

    if(Name == 0){
        errName.innerHTML = "Nama Harus Diisi"
        result = false
    }
    else{
        errName.innerHTML = ""
    }

    if(Email == 0){
        errEmail.innerHTML = "Email Harus Diisi"
        result = false
    }
    else {
        errEmail.innerHTML = ""
    }

    if(validateEmail(Email)){
        errEmail.innerHTML = ""
    }
    else{
        errEmail.innerHTML = "Format email salah"
        result = false
    }

    if(Pass == 0){
        errPass.innerHTML = "Password tidak boleh kosong"
        result = false
    }
    else{
        errPass.innerHTML = ""
    }

    if(!GenM.checked && !GenF.checked){
        errGen.innerHTML = "Harus Dipilih"
        result = false
    }
    else {
        errGen.innerHTML = ""
    }

    if(City.value == ""){
        errCity.innerHTML = "Harus Dipilih"
        result = false
    }
    else {
        errCity = ""
    }
    
    if(Address == 0){
        errAdd.innerHTML = "Harus Diisi"
        result = false
    }
     
    else if(Address.indexOf("Street") == -1){
        errAdd.innerHTML = "Harus Mengandung Kata 'Street'"
        result = false
    }
    else{
        errAdd.innerHTML = ""
    }

    if(result){
        alert('Succesfully Register')}
        return result
}