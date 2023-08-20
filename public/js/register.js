const Validate =() =>{
    // picking inputs fields with their names
    
    let firstName = document.register.firstname
    let lastName = document.register.lastname
    
    
    // picking error fields
    let   firstNameError = document.getElementById("firstNameError")
    let   lastNameError = document.getElementById("lastNameError")
    
    // validating firstname inputs
    if(firstName.value =="") {
        firstName.style.border = "2px solid red"
        firstNameError.textContent = "first name is required"
        firstNameError.style = "color red, font-size 2px, font-family Helvetica, arial, sans serif"
        firstName.focus();
        return false;
    }
    else if(firstName.value.length < 2){
        firstName.style.border = "2px solid red"
        firstNameError.textContent = "first name is must be atleast 2 characters"
        firstNameError.style = "color red, font-size 2px, font-family Helvetica, arial, sans serif"
        firstName.focus();
        return false;
    }
    else if(firstName.value.length > 15){
        firstName.style.border = "2px solid red"
        firstNameError.textContent = "first name is must not be greater than 15 characters"
        firstNameError.style = "color red, font-size 2px, font-family Helvetica, arial, sans serif"
        firstName.focus();
        return false;
    }
    
    else{
        firstName.style.border = "2px solid green"
        firstNameError.textContent = ""
        firstNameError.style = ""
        lastName.focus(); 
    }
    




// validating last name

    if(lastName.value =="") {
        lastName.style.border = "2px solid red"
        lastNameError.textContent = "first name is required"
        lastNameError.style = "color red, font-size 11px, font-family Helvetica, arial, sans serif"
        lastName.focus();
        return false;
    }
    else if(lastName.value.length < 2){
        lastName.style.border = "2px solid red"
        lastNameError.textContent = "first name is must be atleast 2 characters"
        lastNameError.style = "color red, font-size 11px, font-family Helvetica, arial, sans serif"
        lastName.focus();
        return false;
    }
    else if(lastName.value.length > 15){
        lastName.style.border = "2px solid red"
        lastNameError.textContent = "first name is must not be greater than 15 characters"
        lastNameErrorNameError.style = "color red, font-size 11px, font-family Helvetica, arial, sans serif"
        lastName.focus();
        return false;
    }
    
    else{
        lastName.style.border = "2px solid green"
        lastNameErrorNameError.textContent = ""
        lastNameErrorNameError.style = ""
        numberPlate.focus(); 
    }

    // validating number plate
    if(numberPlate.value =="") {
        numberPlate.style.border = "2px solid red"
        numberPlateError.textContent = "number plate is required"
        numberPlateError.style = "color red, font-size 11px, font-family Helvetica, arial, sans serif"
        numberPlate.focus();
        return false;
    }
    else if(numberPlate.value.length !== 6){
        numberPlate.style.border = "2px solid red"
        numberPlateError.textContent = "Number plate is must be 6 characters"
        numberPlateError.style = "color red, font-size 11px, font-family Helvetica, arial, sans serif"
        numberPlate.focus();
        contacts.focus();
    }
    }