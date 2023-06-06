//---------------------1------------------------------

let usnRegex = /[1-4][Nn][Tt][0-9][0-9][A-Za-z][A-Za-z][0-9][0-9][0-9]/;
var myButton = document.getElementById("myButton");
function validateUSN() {
  let usnInput = document.getElementById("myTextBox").value;
  let a = usnInput.split("");
  console.log(a[a.length-1])
  if(a[a.length-1]=='0' && a[a.length-2]=='0' && a[a.length-3]=='0'){
    alert("Invalid USN");
  } else if (usnRegex.test(usnInput)) {
    alert("Valid USN!");
  } else {
    alert("Invalid USN!");
  }
}

//----------------------2--------------------------------

function validateDate(){
    var myString = document.getElementById("myTextBox1").value;
    const regex = /(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}/;
    const match = regex.exec(myString);
    if (match !== null) {
        alert("The date is: " + match[0]);
    } else {
        alert("No date was found.");
    }
}

//------------------------------3----------------------------------

function validateEmail(){
    var mystring = document.getElementById("myTextBox2").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mailformat.test(mystring)){
        alert("valid email")
    }else{
        alert("invalid email")
    }
}