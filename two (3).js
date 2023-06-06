//-------------------------1--------------------------------------------
var input = prompt("Enter text");
var ch = input.split("");
var vow = "AEIOUaeiou";
var vowCount=0;
for(let i=0;i<ch.length;i++)
{
    if(vow.includes(ch[i]))
        vowCount++;
}

alert(vowCount);

//--------------------------------------2----------------------------------------------
var inp = prompt("Enter text");
var chh = input.split("");
alert(chh.length);

//--------------------------------------3----------------------

var str = prompt("Enter text to be encrypted");
var c = parseInt(prompt("Enter ofset value"));
let s="";
for(let i=0;i<str.length;i++)
{
    s+=String.fromCharCode(str.charCodeAt(i)+c);
}
alert(s);

//----------------------------------------4---------------------------------------------

var str1 = prompt("Enter name");
var sp = str1.split(" ");
var ss="";
for(let i=0;i<sp.length-1;i++)
{
    ss+=sp[i].charAt(0).toUpperCase() +". ";
}
ss+=sp[sp.length-1];
document.write(`<span style='font-size:14px;color:red;background-color:cyan;'>${ss}</span>`);
alert(ss);

//----------------------------------------------5----------------------------------------------

// var a1 = document.getElementById("abc");
// var res=document.getElementById("abcd");
// a1.addEventListener("input",() => {
//     const str2 = a1.value.split("").sort().join();
//     res.innerText = str2;
// })
