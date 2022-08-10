
let btntop=document.querySelector(".btn-top");
let secs=Array.from(document.querySelectorAll("section"))
  let na=document.querySelector(".menu-nav")
  let navul=document.getElementById("nav-list")



function initialSetup() {
    const Bar = document.getElementById('nav-list');
    const fragment = document.createDocumentFragment();
    for (const sec of secs) {
        const newNavButton =Nav(sec);
        fragment.appendChild(newNavButton);
    }
    Bar.appendChild(fragment);

}

// Creates a new nav button with classes based on the section parameter, and
// returns a button
function Nav(sec) {
    const newNavButton = document.createElement('li');
    newNavButton.classList.add('menu-nav');
    newNavButton.textContent = sec.dataset.li;
    newNavButton.setAttribute('data-nav', sec.id);
    newNavButton.id = `#-${sec.id}`;


    return newNavButton;
}

initialSetup()




//section scrolling
navul.addEventListener("click",(even)=>{
    even.preventDefault();
    if(even.target.dataset.nav){
document.getElementById(even.target.dataset.nav).scrollIntoView({behavior:"smooth"});
setTimeout(()=>{
    location.hash=even.target.dataset.nav
},700)
    }
})


//focus on section
window.onscroll=function () {
    document.querySelectorAll("section").forEach(function(active){
        if(active.getBoundingClientRect().top >=-400 &&
        active.getBoundingClientRect().top<=150)
        {
            active.classList.add("your-activ-class")
        }else{
            active.classList.remove("your-activ-class")
        }
    })
   
}


//BTN TO SCROLL TOP

btntop.addEventListener('click', () => {
   
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});

// btn's top display
window.addEventListener('scroll', () => {
    if(scrollY >=5000){
        btntop.style.display="block"
    }else{
        btntop.style.display="none"
    }
    })
    