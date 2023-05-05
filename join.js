 function doSubmit(){
    var customer = document.membership.customer.value;
    var lastName = document.membership.lastName.value;
    if (isNaN(customer) ==false){
        alert("Use correct format")
    }
    else if(isNaN(lastName)== false){
        alert("Use correct format")
    } 
    else if (validateText() == false ){
        alert("FILL IN ALL FIELDS");

    }
     else{
        alert("YOUR FORM HAS BEEN SUBMITTED");
     }   
}

function validateText(){
    var phone = document.membership.telephone.value;
    if (phone.length == 0){
        return false;
    }
    var customer = document.membership.customer.value;
    if (customer.length == 0){
        return false;
    }
  
    var city = document.membership.city.value;
    if (city.length == 0){
        return false;
    }
    var address = document.membership.address.value;
    if (address.length == 0){
        return false;
    } 
    return true;
    
 
}

function doClear(){

    const formToReset = document.getElementsByClassName('formInput');
    formToReset.addEventListener('Clear', (e) => {
       e.preventDefault();
       formToReset.reset();

    });
  
    
}

 