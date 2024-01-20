function validateName(){
    let nameError = document.getElementById('username-error')
    let name = document.getElementById('username')

    if (name.value.trim()== ''){
        nameError.innerHTML ='This field is mandatory !'
        return false
    }
    else if(name.value.length < 3){
        nameError.innerHTML = 'Must be more than 3 chara !'
        return false 
    }
    else {
        nameError.innerHTML =''
        return true
    }
}
function validatePassword(){
    let password = document.getElementById('password')
    let passwordError = document.getElementById('password-error')

    let regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    if(password.value.trim()== ''){
        passwordError.innerHTML = 'This field is mandatory !'
        return false
    }
    else if(!password.value.match(regExpPassword)){
        passwordError.innerHTML = 'Format error !'
        return false
    }
    else{
        passwordError.innerHTML = ''
        return true
    }
}
function validateForm(){
    let submitError = document.getElementById('submit-error')

    if( !validateName() || !validatePassword()){
        submitError.innerHTML = 'Please resolve the errors'
        return false
    }
    else{
        submitError.innerHTML =''
        return true
    }
}
