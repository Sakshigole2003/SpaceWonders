// active header sticky 
const header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky",window.scrollY > 50)
})


//active scroll menu

const lilink = document.querySelectorAll("header ul li a");
const section = document.querySelectorAll("section");

function activeMenu(){
    let secLength = section.length;
    while(--secLength && window.screeY + 500 < section[secLength].offsetTop){}
    lilink.forEach(sec => sec.classlist.remove("active"));
    lilink[secLength].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);



//active menu icon

const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

//remove menu list

window.onscroll = () =>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

//scroll animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }

    });
});

