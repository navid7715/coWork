let tab1 = document.getElementById("tab1")
let tab2 = document.getElementById("tab2")
let tab3 = document.getElementById("tab3")
let Workspaces = document.getElementById("Workspaces")
let Productivity = document.getElementById("Productivity")
let Community = document.getElementById("Community")

function openTab(x) {
    if (x === 1) {
        tab1.style.display = "flex";
        tab2.style.display = "none";
        tab3.style.display = "none";
        Workspaces.style.backgroundColor = "#75a3ff"
        Productivity.style.backgroundColor = "transparent"
        Community.style.backgroundColor = "transparent"
        Workspaces.style.borderRadius = "12px"
        Workspaces.style.color = "#fff"
        Productivity.style.color = "#000"
        Community.style.color = "#000"


    } else if (x === 2) {
        tab1.style.display = "none";
        tab2.style.display = "flex";
        tab3.style.display = "none";
        Workspaces.style.backgroundColor = "transparent"
        Productivity.style.backgroundColor = "#75a3ff"
        Community.style.backgroundColor = "transparent"
        Productivity.style.borderRadius = "12px"
        Workspaces.style.color = "#000"
        Productivity.style.color = "#fff"
        Community.style.color = "#000"

    } else {
        tab1.style.display = "none";
        tab2.style.display = "none";
        tab3.style.display = "flex";
        Workspaces.style.backgroundColor = "transparent"
        Productivity.style.backgroundColor = "transparent"
        Community.style.backgroundColor = "#75a3ff"
        Community.style.borderRadius = "12px"
        Workspaces.style.color = "#000"
        Productivity.style.color = "#000"
        Community.style.color = "#fff"

    }

}



window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
    console.log("hello world");
})