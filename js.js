

document.getElementById("Home").addEventListener("mousedown",changeText);

function changeText(){
    document.getElementById("Home").innerHTML ="Hello"

}

document.getElementById("About").addEventListener("mouseout",changeText1);

function changeText1(){
    document.getElementById("About").innerHTML ="What"

}

document.getElementById("Books").addEventListener("mouseover",changeText2);

function changeText2(){
    document.getElementById("Books").innerHTML ="Are u reading?"

}

document.getElementById("Contacts").addEventListener("mouseup",changeText3);

function changeText3(){
    document.getElementById("Contacts").innerHTML ="Now"

}

// $(document).ready(function(){
// $(window).scroll(function(event){
// var s=$(this).scrollTop();
// var w=$(this).outerWidth();
// var h=$(".content").outerheight();
// var h_b=(".parallax").outerHeight();
// var p=s/h*100;
// var p_b=s/h_b*100;
// var o=1-1/100*p_b;

// var z_1=1+(w/10000*p_b)
// $(".mist").css("transform", "scale("+z_1+")");
// });

// });
document.addEventListener('wheel',function(event){

 });

