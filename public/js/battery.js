const Validate=() => {
    // picking input fields
    let firstName = document.battery.firstName;
    let lastName = document.battery.lastName;
    let telephone = document.battery.telephone;
    let batteryTypeInput = document.battery.battery_ype;


    // Error fields
    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let telephoneError = document.getElementById("telephoneError");
    let batteryTypeError = document.getElementById("battery_typeError");


    // validating first name inputs
    if(firstName.value =="") {
        firstName.style.border = "2px solid red"
        firstNameError.textContent = "first name is required"
        firstNameError.style = "color red, font-size .5px, font-family Helvetica, arial, sans serif"
        firstName.focus();
        return false;
    }
    else if(firstName.value.length < 1){
        firstName.style.border = "2px solid red"
        firstNameError.textContent = "first name is must be atleast 2 characters"
        firstNameError.style = "color red, font-size .5px, font-family Helvetica, arial, sans serif"
        firstName.focus();
        return false;
    }
    let firstNameRegex = /^[A-Z][a-zA-Z]*$/
    if (!firstName.value.match(firstNameRegex)) {
      firstName.style.border = "2px solid red";
      firstNameError.textContent = "First name must start with a capital letter and should not have numbers";
      firstNameError.style =
        "color: red; fontsize:.5px; font-size:Helvetical, Arial,sans-serif";
      firstName.focus();
      return false;
    }
    else {
      firstName.style.border = "2px solid green";
      firstNameError.textContent = "";
      lastName.focus();
    }

    // validating last name
    if(lastName.value =="") {
        lastName.style.border = "2px solid red"
        lastNameError.textContent = "last name is required"
        lastNameError.style = "color red, font-size .5px, font-family Helvetica, arial, sans serif"
        lastName.focus();
        return false;
    }
    else if(lastName.value.length < 1){
        lastName.style.border = "2px solid red"
        lastNameError.textContent = "last name is must be atleast 2 characters"
        lastNameError.style = "color red, font-size .5px, font-family Helvetica, arial, sans serif"
        lastName.focus();
        return false;
    }
    let lastNameRegex = /^[A-Z][a-zA-Z]*$/
    if (!lastName.value.match(lastNameRegex)) {
      lastName.style.border = "2px solid red";
      lastNameError.textContent = "Last name must start with a capital letter and should not have numbers";
      lastNameError.style =
        "color: red; fontsize:.5px; font-size:Helvetical, Arial,sans-serif";
      lastName.focus();
      return false;
    }
    else {
      lastName.style.border = "2px solid green";
      lastNameError.textContent = "";
      telephone.focus();
    }

    // validating telephone
    if(telephone.value == ""){
        telephone.style.border = "2px solid red";
        telephoneError.textContent = "telephone is required"
        telephoneError.style = "color:red; fontsize:1px; font-family:sans-serif;"
        telephone.focus();
        return false;
     }
    
     let telephoneRegex = /^\+256\d{9}$/;
    if(!telephoneRegex.test(telephone.value)) {
        telephone.style.border = "2px solid red";
        telephoneError.textContent = "telephone must be a valid ugandan format";
        telephoneError.style =
          "color: red; fontsize:.5px; font-size:Helvetical, Arial,sans-serif";
        telephone.focus();
        return false;
      }
     else {
        telephone.style.border = "2px solid green";
        telephoneError.textContent = ""
        battery-type.focus();
        
     }

    //  validations for battery_type
     if (batteryTypeInput.value === "select") {
        batteryTypeInput.style.border = "2px solid red";
        batteryTypeError.textContent = "Please select a battery type";
        batteryTypeError.style.color = "red";
        return false;
      } else {
        batteryTypeInput.style.border = "2px solid green";
        batteryTypeError.textContent = "";
      }

  
}