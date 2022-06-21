/*=================== typing animation =======================*/
// var typed = new Typed(".typing", {
//     String: ["", "Web Designer", "web Developer", "Graphic Designer", "Clipping Path", "Apps Interface", "Photography", "Full Stack Developer"],
//     typeSpeed: 100,
//     BackSpeed: 60,
//     loop: true
// })

/*=================== Aside =======================*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"), 
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    // console.log(navList[i]);
    const a = navList[i].querySelector("a");
    // console.log(a);
    a.addEventListener("click", function () {
        removeBackSection();
        // console.log(this);
        for (let j = 0; j<totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")){
                // console.log("back-section"+navList[j].querySelector("a"));
                addBackSection(j);
                // allSection[j].classList.add("black-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}



function removeBackSection(){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("black-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("black-section");
}

function showSection(element){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target =  element.getAttribute("href").split("#")[1];
    // console.log(target);
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element){
    // console.log(element.getAttribute("href").split("#")[1]);
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target =  element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    // console.log(this);
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navToggleBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navToggleBtn.addEventListener("click", ()=>{
        asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navToggleBtn.classList.toggle("open");
            for(let i=0; i<totalSection;i++){
                allSection[i].classList.toggle("open");
            }
        }