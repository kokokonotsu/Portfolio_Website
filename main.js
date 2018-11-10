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
window.addEventListener("load", collapsible());