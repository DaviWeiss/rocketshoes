
function toggleMenu(){
    const sidebar = document.querySelector('.menu-links');
    if(sidebar.style.display == "none") {
        sidebar.style.display = "flex";
    }else{
        sidebar.style.display = "none";
    }
}