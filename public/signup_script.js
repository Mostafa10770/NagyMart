const form = document.getElementById('form');
const username = document.getElementById('username');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const select = document.getElementById('select');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const Address = document.getElementById('Address');

var a,b,c,d,e,f,g;
let count;
let sRate;

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    Validate();
    if(a&&b&&c&&e&&f&&g&&h&&d){

        swal("You are registered successfully");
        form.reset();
        a=0,b=0,c=0,d=0,e=0,f=0,g=0;

    }
})


const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 4;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}


const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){

  
    const usernameVal = username.value.trim();
    const lastnameVal = lastname.value.trim();
    const firstnameVal = firstname.value.trim();
    const selectVal = select.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const AddressVal = Address.value.trim();





    //firstname
    if(firstnameVal === ""){
        setErrorMsg(firstname, 'first name ');
    }
    else if(firstnameVal.length <=2){
        setErrorMsg(firstname, 'min 3 char');
    }
    else{
        setSuccessMsg(firstname);
        a=1;
        
    }

    




    //last name

    if(lastnameVal === ""){
        setErrorMsg(lastname, ' please fill last name ');
    }
    else if(lastnameVal.length <=2){
        setErrorMsg(lastname, 'min 3 char');
    }
    else{
        setSuccessMsg(lastname);
        b=1;
        
    }




    //username
    if(usernameVal === ""){
        setErrorMsg(username, ' please fill username ');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'min 3 char');
    }
    else{
        setSuccessMsg(username);
        c=1;
    }


    //email
    if(emailVal === ""){
        setErrorMsg(email, ' please fill email ');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'email is not valid');
    }
    else{
        setSuccessMsg(email);
        d=1;
    }

    //Select

    if(selectVal === ""){
        setErrorMsg(select, ' please fill last name ');
    }
    else if(select.length <=2){
        setErrorMsg(select, 'min 3 char');
    }
    else{
        setSuccessMsg(select);

        e=1;
    }



    // if(selectVal === ""  ){
    //     setErrorMsg(select, ' please fill select ');
    // }
    
    // else{
    //     setSuccessMsg(select);
        
    // }


    
    // if(selectVal== "Default")
    // {
    //     setErrorMsg(select, ' select your colleage from the list ');
    // }
    // else{
    //     setSuccessMsg(selectVal);
        
    // }
    




    //password
    if(passwordVal === ""){
        setErrorMsg(password, ' please fill password ');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'min 8 char');
    }
    else{
        setSuccessMsg(password);
        f=1;
    }

    //confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, ' please fill confirm password ');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Not Matched!');
    }
    else{
        setSuccessMsg(cpassword);
        g=1;
    }
    



    //Address
    if(AddressVal === ""){
        setErrorMsg(Address, 'Address ');
    }
    
    else{
        setSuccessMsg(Address);
        h=1;
    }







}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
