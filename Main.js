let search_anim

document.getElementById("search_input").addEventListener("transitionend", anim);


function anim() {
    search_anim = document.getElementById("search_input").style.display = "inline-flex"

}
