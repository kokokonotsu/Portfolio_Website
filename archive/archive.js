function makeCircles() {
    const mainCard = document.querySelectorAll(".main-card");
    const sideCard = document.querySelectorAll(".side-card");
    
    
    for(i = 0; i < mainCard.length; i++){
        var mainCardChildren = mainCard[i].children;
        var newChild = '<i class="fas fa-lock"></i>';
        for(k = 0; k < mainCardChildren.length; k++){
            mainCardChildren[k].classList.add("no-display");
        }
        mainCard[i].style.borderRadius = "50%";
        mainCard[i].style.height = "70px";
        mainCard[i].style.width = "70px";
        mainCard[i].style.display = "flex";
        mainCard[i].style.flexDirection = "column";
        mainCard[i].style.justifyContent = "center";
        mainCard[i].style.textAlign = "center";
        mainCard[i].style.fontSize = "2rem";
        mainCard[i].style.transition = "all 0.3s ease";
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
        sideCard[j].style.borderRadius = "50%";
        sideCard[j].style.height = "70px";
        sideCard[j].style.width = "70px";
        sideCard[j].style.display = "flex";
        sideCard[j].style.flexDirection = "column";
        sideCard[j].style.justifyContent = "center";
        sideCard[j].style.textAlign = "center";
        sideCard[j].style.fontSize = "2rem";
        sideCard[j].style.transition = "all 0.3s ease";
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
            target.style.borderRadius = "3px";
            target.style.height = "initial";
            target.style.width = "100%";
            target.style.display = "block";
            target.style.flexDirection = "column";
            target.style.justifyContent = "center";
            target.style.textAlign = "initial";
            target.style.fontSize = "initial";
            target.style.transition = "all 0.3s ease";
            target.classList.remove("main-circle");
        } else {
            target.style.borderRadius = "50%";
            target.style.height = "70px";
            target.style.width = "70px";
            target.style.display = "flex";
            target.style.flexDirection = "column";
            target.style.justifyContent = "center";
            target.style.textAlign = "center";
            target.style.fontSize = "2rem";
            target.style.transition = "all 0.3s ease";
            target.classList.add("main-circle");
        }
    }
        console.log("I am running");
    if(target.classList.contains("side-card")){
        var sideCardChildren = target.children;
        if (target.firstElementChild.classList.contains("fas fa-lock")){
            target.removeChild(target.firstElementChild);
            target.insertAdjacentHTML("afterbegin", targetUnlock);
        } else
        if(target.firstElementChild.classList.contains("fas fa-lock-open")){
            target.removeChild(target.firstElementChild);
            target.insertAdjacentHTML("afterbegin", targetLock);            
        }
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
            target.style.borderRadius = "3px";
            target.style.height = "initial";
            target.style.width = "100%";
            target.style.display = "block";
            target.style.flexDirection = "column";
            target.style.justifyContent = "center";
            target.style.textAlign = "initial";
            target.style.fontSize = "initial";
            target.style.transition = "all 0.3s ease";
            target.classList.remove("side-circle");
        } else {
            target.style.borderRadius = "50%";
            target.style.height = "70px";
            target.style.width = "70px";
            target.style.display = "flex";
            target.style.flexDirection = "column";
            target.style.justifyContent = "center";
            target.style.textAlign = "center";
            target.style.fontSize = "2rem";
            target.style.transition = "all 0.3s ease";
            target.classList.add("side-circle");
        }
        
    }
}
window.addEventListener("load", makeCircles());