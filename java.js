//alert("hello");

var rand=Math.random();
rand=rand*6;
rand=Math.floor(rand)+1;

var imgname="dice"+rand+".png";
var imgsrc="images/"+imgname;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",imgsrc);

var ran=Math.random();
ran=ran*6;
ran=Math.floor(ran)+1;

var imgname2="dice"+ran+".png";
var imgsrc2="images/"+imgname2;

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",imgsrc2);

if(ran>rand){
    document.querySelector("h1").innerHTML="🤩Player 2 wins!";
}
else if(ran<rand){
    document.querySelector("h1").innerHTML="🤩Player 1 wins!";
}
else if(rand==rand){
    document.querySelector("h1").innerHTML="Draw!🤭";
}