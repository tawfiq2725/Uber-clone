window.onscroll = function(){
    scroll();
};
function scroll(){
    if(document.documentElement.scrollTop> 200){
        document.getElementById("up-btn").style.display="block";
    }
    else{
        document.getElementById("up-btn").style.display="none";
    }
}

var language_button = document.getElementById("lan-btn");

language_button.addEventListener("click", function toggleOpenWindow() {
    var langScreen = document.getElementsByClassName("hide-langscreen")[0];
    
    if (langScreen.style.visibility === "visible") {
        langScreen.style.visibility = "hidden";
    } else {
        langScreen.style.visibility = "visible";
    }
});

var closebtn = document.getElementById("closebtn"); 
closebtn.addEventListener("click",function close(){
    var langScreen = document.getElementsByClassName("hide-langscreen")[0];
    if (langScreen.style.visibility === "visible") {
        langScreen.style.visibility = "hidden";
    } else {
        langScreen.style.visibility = "visible";
    }
});

// Responsive Tabs

var res_btn = document.getElementById("res-btn");
res_btn.addEventListener("click",function(){
    var responsivescreen = document.getElementsByClassName("responsive-window")[0];
    if(responsivescreen.style.display==="block"){
        responsivescreen.style.display="none";
    }
    else{
        responsivescreen.style.display="block";
    }
});