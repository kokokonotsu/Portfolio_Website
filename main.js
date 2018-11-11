/*Collapsible Start*/
function collapsible(){
    //Grab all elements with class name "collapsible"//
    const collapsible = document.getElementsByClassName("collapsible");
    var i;
    //Run each index of the 'collapsible' collection of elements through a for loop//
    for(i = 0; i < collapsible.length; i++){
        //Add Event Listeners to all 'collapsible' elements//
        var collapsiblePrompt = collapsible[i].children[0];
        collapsiblePrompt.addEventListener("click", function(){
            var content = this.nextElementSibling;
            if(content.style.maxHeight){
                content.style.maxHeight = null;
                this.innerHTML = 'Show More<i class="fas fa-angle-double-down">'
            } else {
                content.style.maxHeight = content.scrollHeight +"px";
                this.innerHTML = 'Show Less<i class="fas fa-angle-double-up"></i>';
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
            var nav = document.querySelector("nav");
            var navList = document.getElementById("navList");
            var navLinks = nav.querySelectorAll("a");
            var navLinkArray = ["Home", "About", "Archive", "Contact"];
            nav.style.position = "initial";
            nav.style.width = "100%";
            nav.style.height= "5%";
            navList.style.display = "flex";
            navList.style.flexDirection = "row";
            navList.style.justifyItems = "flex-start";
            for(i = 0; i < navLinks.length; i++){
                navLinks[i].style.padding = "5px";
                navLinks[i].style.fontSize = "1rem";
                navLinks[i].children[0].style.display = "inline";
                navLinks[i].children[0].innerHTML = navLinkArray[i];
            }
        }
    }
var screen = window.matchMedia("(max-width: 425px)");
matchScreen(screen);
screen.addListener(matchScreen);
}

function makeCircles() {
    const mainCard = document.querySelectorAll(".main-card");
    const sideCard = document.querySelectorAll(".side-card");
    
    
    for(i = 0; i < mainCard.length; i++){
        var mainCardChildren = mainCard[i].children;
        var newChild = '<i class="fas fa-lock"></i>';
        for(k = 0; k < mainCardChildren.length; k++){
            mainCardChildren[k].classList.add("no-display");
        }
        mainCard[i].classList.add("main-circle");
        mainCard[i].insertAdjacentHTML("afterbegin", newChild);
        console.log("I am running");
    }
    for(n = 0; n < mainCard.length; n++){
        let mainFirstChild = mainCard[n].firstElementChild;
        mainFirstChild.addEventListener("click", transformCircles);
    }
    for(j = 0; j < sideCard.length; j++){
        var sideCardChildren = sideCard[j].children;
        var newChild = '<i class="fas fa-lock"></i>';
        for(l = 0; l < sideCardChildren.length; l++){
            sideCardChildren[l].classList.add("no-display");
        }
        sideCard[j].classList.add("side-circle");
        sideCard[j].insertAdjacentHTML("afterbegin", newChild);
        console.log("I am running");
    }
    for(m = 0; m < sideCard.length; m++){
        let sideFirstChild = sideCard[m].firstElementChild;
        sideFirstChild.addEventListener("click", transformCircles);
    }
}
function transformCircles(e){
    var target = e.currentTarget.parentElement;
    var targetUnlock = '<i class="fas fa-lock-open"></i>';
    var targetLock = '<i class="fas fa-lock"></i>';
    
    if(target.classList.contains("main-card")){
        var mainCardChildren = target.children;
        if (mainCardChildren[0].classList.contains("fas fa-lock")){
            target.removeChild(target.firstElementChild);
            target.insertAdjacentHTML("afterbegin", targetUnlock);
            console.log("Lock deleted");
        } else
        if(mainCardChildren[0].classList.contains("fas fa-lock-open")){
            target.removeChild(target.firstElementChild);
            target.insertAdjacentHTML("afterbegin", targetLock);
            console.log("Open-Lock Deleted");      
        }
        for(i = 0; i < mainCardChildren.length; i++){
            if(mainCardChildren[i].classList.contains("no-display"))
            {
                mainCardChildren[i].classList.remove("no-display");
            } else {
                mainCardChildren[i].classList.add("no-display");
            }
        }
        if(target.firstElementChild.classList.contains("no-display")){
            target.firstElementChild.classList.toggle("no-display");
        }
        if(target.classList.contains("main-circle")){
            target.classList.toggle("main-circle");
        } else {
            target.classList.toggle("main-circle");
        }
    }
        console.log("I am running");
    if(target.classList.contains("side-card")){
        var sideCardChildren = target.children;
        for(i = 0; i < sideCardChildren.length; i++){
            if(sideCardChildren[i].classList.contains("no-display"))
            {
                sideCardChildren[i].classList.remove("no-display");
            } else {
                sideCardChildren[i].classList.add("no-display");
            }
        }
        if(target.firstElementChild.classList.contains("no-display")){
            target.firstElementChild.classList.remove("no-display");
        }
        if(target.classList.contains("side-circle")){
            target.classList.toggle("side-circle");
        } else {
            target.classList.toggle("side-circle");
        }
        if (target.firstElementChild.classList.contains("fas fa-lock")){
            target.removeChild(target.firstElementChild);
            target.insertAdjacentHTML("afterbegin", targetUnlock);
        } else
        if(target.firstElementChild.classList.contains("fas fa-lock-open")){
            target.removeChild(target.firstElementChild);
            target.insertAdjacentHTML("afterbegin", targetLock);            
        }
    }
}
window.addEventListener("load", collapsible());
window.addEventListener("load", media());
window.addEventListener("load", makeCircles());
