/*Collapsible Start*/

function collapsible(){
    //Grab all elements with class name "collapsible"//
    const collapsible = document.getElementsByClassName("collapsible");
    var i;
    //Run each index of the 'collapsible' collection of elements through a for loop//
    for(i = 0; i < collapsible.length; i++){
        //Add Event Listeners to all 'collapsible' elements//
        collapsible[i].addEventListener("click", function(){
            var content = this.firstElementChild;
            if(content.style.display === "block"){
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        })
    }
    
}
window.addEventListener("load", collapsible());