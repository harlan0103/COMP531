var btn = document.getElementById("submit_button");
var display = document.getElementById("display");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var zipcode = document.getElementById("zipcode");
var pwd = document.getElementById("password");
var re_pwd = document.getElementById("re-password");

var display_alert = document.getElementById("display-alert");
var email_alert = document.getElementById("email-alert");
var phone_alert = document.getElementById("phone-alert");
var zipcode_alert = document.getElementById("zipcode-alert");
var pwd_alert = document.getElementById("repwd-alert");
    
var pre_display = document.getElementById("pre-display");
var pre_email = document.getElementById("pre-email");
var pre_phone = document.getElementById("pre-phone");
var pre_zipcode = document.getElementById("pre-zipcode");
var pre_pwd = document.getElementById("pre-password");
var pre_re_pwd = document.getElementById("pre-re-password");

/*
@submit()
When user click submit button
Call validation function for each input
*/
btn.onclick = function(){
    var val_email = checkEmailValidation();
    var val_zipcode = checkZipValidation();
    var val_phone = checkPhoneValidation();
    var val_pwd = checkPwdValidation();
    
    if(val_email && val_zipcode && val_zipcode && val_pwd == true){
        console.log("all valid");
        // Update user name
        if(display.value != ""){
            // Display alert message inform update
            display_alert.innerHTML = "Successfully changed your display name to " + display.value + "!";
            // Change pre-load value to new input
            pre_display.innerHTML = display.value;
            // Set alert message to invisible
            display_alert.style.visibility = "visible";
            // Alert message last 2 sec
            setTimeout("hiddenAlert(display_alert)", 2000);
            // Empty input field
            display.value = "";
        }
        // Update email address
        if(email.value != ""){
            email_alert.innerHTML = "Successfully changed your email address to " + email.value + "!";
            pre_email.innerHTML = email.value;
            email_alert.style.visibility = "visible";
            setTimeout("hiddenAlert(email_alert)", 2000);
            email.value = "";
        }
        // Update phone number
        if(phone.value != ""){
            phone_alert.innerHTML = "Successfully changed your email address to " + phone.value + "!";
            pre_phone.innerHTML = phone.value;
            phone_alert.style.visibility = "visible";
            setTimeout("hiddenAlert(phone_alert)", 2000);
            phone.value = "";
        }
        // Update zipcode
        if(zipcode.value != ""){
            zipcode_alert.innerHTML = "Successfully changed your email address to " + zipcode.value + "!";
            pre_zipcode.innerHTML = zipcode.value;
            zipcode_alert.style.visibility = "visible";
            setTimeout("hiddenAlert(zipcode_alert)", 2000);
            zipcode.value = "";
        }
        // Update password
        if(pwd.value != ""){
            pwd_alert.innerHTML = "Successfully changed your email address to " + pwd.value + "!";
            pre_pwd.innerHTML = pwd.value;
            //pwd_alert.style.visibility = "visible";
            //setTimeout("hiddenAlert(pwd_alert)", 2000);
            pwd.value = "";
        }
        // Update confirm password
        if(re_pwd.value != ""){
            pwd_alert.innerHTML = "Successfully changed your email address to " + re_pwd.value + "!";
            pre_re_pwd.innerHTML = re_pwd.value;
            pwd_alert.style.visibility = "visible";
            setTimeout("hiddenAlert(pwd_alert)", 2000);
            re_pwd.value = "";
        }
    }
}

/*
@hiddenAlert(param)
Display update information for 2 sec
Then Hidden the alert message
*/
function hiddenAlert(alert){
    console.log(alert.id);
    console.log("hidden");
    alert.style.visibility = "hidden";
}

/*
@checkEmailValidation()
Check validation for user input email
If not valid then show a alert message
*/
function checkEmailValidation(){
    // User has input a email
    if(email.value != ""){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
            email_alert.innerHTML = "";
            hiddenAlert(email_alert);
            return true;
        }
        else{ // Doesn't match the pattern, show invalide message
            email_alert.innerHTML = "Invalid email address! e.g: username@gmail.com";
            email_alert.style.visibility = "visible";
            return false;
        }
    }
    else{
        // No update
        hiddenAlert(email_alert);
        return true;
    }
}

/*
@checkZipValidation()
Check validation for user input zipcode
If not valid then show a alert message
*/
function checkZipValidation(){
    if(zipcode.value != ""){
        if(/^\d{5}$/.test(zipcode.value)){
            zipcode_alert.innerHTML = "";
            hiddenAlert(zipcode_alert);
            return true;
        }
        else{
            zipcode_alert.innerHTML = "Invalid zipcode! e.g: 77030";
            zipcode_alert.style.visibility = "visible";
            return false;
        }
    }
    else{
        hiddenAlert(zipcode_alert);
        return true;
    }
}

/*
@checkPhoneValidation()
Check validation for user input Phone number
If not valid then show a alert message
*/
function checkPhoneValidation(){
    if(phone.value != ""){
        if(/^\d{3}[\-]\d{3}[\-]\d{4}$/.test(phone.value)){
            phone_alert.innerHTML = "";
            hiddenAlert(phone_alert);
            return true;
        }
        else{
            phone_alert.innerHTML = "Invalid phone number! e.g: 123-123-1234";
            phone_alert.style.visibility = "visible";
            return false;
        }
    }
    else{
        hiddenAlert(phone_alert);
        return true;
    }
}

/*@checkPwdValidation()
Check validation for user input password and comfirm password
If not valid then show a alert message
*/
function checkPwdValidation(){
    if(pwd.value != re_pwd.value){
        pwd_alert.innerHTML = "Pleaase enter the same password";
        pwd_alert.style.visibility = "visible";
        return false;
    }
    else{
        hiddenAlert(pwd_alert);
        return true;
    }
}