

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
function validateEmail(){
    let email = document.getElementById('email')
    let emailError = document.getElementById('email-error')

    let regEx =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (email.value.trim()== ''){
        emailError.innerHTML ='This field is mandatory !'
        return false
    }
    else if(!email.value.match(regEx)){
        emailError.innerHTML = 'Invalid format !'
        return false
    }
    else{
        emailError.innerHTML = ''
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
function validateRepeat(){
    let password = document.getElementById('password')
    let repeatPassword = document.getElementById('repeat')
    let repeatError = document.getElementById('repeat-error')

    if(password.value !=repeatPassword.value){
        repeatError.innerHTML = 'Password does not match !'
        return false
    }
    else{
        repeatError.innerHTML = ''
        return true
    }
}
function validatePhone(){
    let phone = document.getElementById('phone')
    let phoneError = document.getElementById('phone-error')
    
    let regExpPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

    if (phone.value.trim()== ''){
        phoneError.innerHTML ='This field is mandatory !'
        return false
    }
    else if(!phone.value.match(regExpPhone)){
        phoneError.innerHTML = 'Invalid format !'
        return false
    }
    else if(phone.value.length != 10){
        phoneError.innerHTML = 'Must be a 10 digit number'
        return false 
    }
    
    else {
        phoneError.innerHTML =''
        return true
    }
}
function validateForm(){
    let submitError = document.getElementById('submit-error')

    if( !validateName() || !validateEmail() || !validatePassword() || !validateRepeat() || !validatePhone()){
        submitError.innerHTML = 'Please resolve the errors'
        return false
    }
    else{
        submitError.innerHTML =''
        return true
    }
}
