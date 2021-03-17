let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let sub   = document.getElementById('sub');
let comment = document.getElementById('comment');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
let result4 = document.getElementById('result4');
let result5 = document.getElementById('result5');



fname.addEventListener('input',()=>{

     if(fname.value.length<5){

        result1.innerHTML = "Invalid";
        result1.style.color = "red";
        fname.style.background = "red";
        
}
else{
    
    result1.innerHTML = "Valid";
    fname.style.background = "#78e08f";
    result1.style.color = "#78e08f"
}
});




lname.addEventListener('input',()=>{

    if(lname.value.length<5){

       result2.innerHTML = "Invalid";
       result2.style.color = "red";
       lname.style.background = "red";
       
}
else{
   
   result2.innerHTML = "Valid";
   lname.style.background = "#78e08f";
   result2.style.color = "#78e08f";
}
});


email.addEventListener('input',()=>{

    if(email.value.length<5){

       result3.innerHTML = "Invalid";
       result3.style.color = "red";
       email.style.background = "red";
       
}
else{
   
   result3.innerHTML = "Valid";
   email.style.background = "#78e08f";
   result3.style.color = "#78e08f";
}
});





sub.addEventListener('input',()=>{

    if(sub.value.length<5){

       result4.innerHTML = "Invalid";
       result4.style.color = "red";
       sub.style.background = "red";
       
}
else{
   
   result4.innerHTML = "Valid";
   email.style.background = "#78e08f";
   result4.style.color = "#78e08f";
}
});




comment.addEventListener('input',()=>{

    if(comment.value.length<5){

       result5.innerHTML = "Type Something...";
       result5.style.color = "red";
       comment.style.background = "red";
       
}
else{
   
   result5.innerHTML = "Valid";
   comment.style.background = "#78e08f";
   result5.style.color = "#78e08f";
}
});

