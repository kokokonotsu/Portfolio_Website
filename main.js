/*Collapsible Start*/
function collapsible(){
    //Grab all elements with class name "collapsible"//
    const collapsible = document.getElementsByClassName("collapsible");
    var i;
    //Run each index of the 'collapsible' collection of elements through a for loop//
    for(i = 0; i < collapsible.length; i++){
        //Add Event Listeners to all 'collapsible' elements//
        collapsible[i].children[0].addEventListener("click", function(){
            var content = this.nextElementSibling;
            if(content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight +"px";
            }
        })
    }
}
function media(){
    function matchScreen(screen){
        if(screen.matches){
            var nav = document.querySelector("nav");
            var navList = document.getElementById("navList");
            var navLinks = nav.querySelectorAll("a");
            var navIconArray = ['<i class="fas fa-home"></i>', '<i class="fas fa-question"></i>', '<i class="fas fa-folder"></i>', '<i class="fas fa-at"></i>'];
            nav.style.position = "fixed";
            nav.style.left = 0;
            nav.style.width = "50px";
            nav.style.height= "100%";
            navList.style.display = "flex";
            navList.style.flexDirection = "column";
            navList.style.justifyContent = "flex-start";
            for(i = 0; i < navLinks.length; i++){
                navLinks[i].style.padding = "10px 0 10px 0";
                navLinks[i].style.fontSize = "1.8em";
                navLinks[i].children[0].style.display = "inline-block";
                navLinks[i].children[0].innerHTML = navIconArray[i];
            }
        } else{
            document.body.style.backgroundColor = "white";
        }
    }
console.log("I am running");
var screen = window.matchMedia("(max-width: 700px)");
matchScreen(screen);
screen.addListener(matchScreen);
}
window.addEventListener("load", collapsible());
window.addEventListener("load", media());