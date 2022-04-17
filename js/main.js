let first = document.getElementById("first");
let last = document.getElementById("last");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let fir = document.getElementById("first-err");
let las = document.getElementById("last-err");
let ema = document.getElementById("email-err");
let pass = document.getElementById("pass-err");

submit.onclick = function(){
    if (first.value == ""){
    fir.style.display="block";
    first.style.borderColor="red";
    }else {
    fir.style.display="none";
    first.style.borderColor="#0000006b";
        console.log(first.value);
    }
    if (last.value == ""){
        las.style.display="block";
        last.style.borderColor="red";
        }else {
            las.style.display="none";
            last.style.borderColor="#0000006b";
            console.log(last.value);
        }
    if (email.value == ""){
    ema.style.display="block";
    email.style.borderColor="red";
    }else {
        ema.style.display="none";
        email.style.borderColor="#0000006b";
        console.log(email.value);
    }
    if (password.value == ""){
        pass.style.display="block";
        password.style.borderColor="red";
        }else {
            pass.style.display="none";
            password.style.borderColor="#0000006b";
            console.log(password.value);
        }
}