var images = ["image/fokhrul.jpg", "image/fire.jpg","image/logo1.png"];
var msg = ["This is me","Devastating Bush Fire","Logo of a company"]
var imgTag = document.querySelector("#image");
var msgTag = document.querySelector("#msg");
var count =0;

msgTag.innerHTML = "This is me";

function prev(){
    
    if(count === (images.length-1)){
        count = 0;
        imgTag.src = images[count];
        msgTag.innerHTML = msg[count];
    }else{
        count++;
        imgTag.src = images[images.length - count];
        msgTag.innerHTML = msg[msg.length - count]
    } 
}

function next(){
    if(count === images.length-1){
        count = 0;
        imgTag.src = images[count];
        msgTag.innerHTML = msg[count];
    }else{
        count++;
        imgTag.src = images[count];
        msgTag.innerHTML = msg[count];
    }
}