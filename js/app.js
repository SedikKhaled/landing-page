
let btntop=document.querySelector(".btn-top");
let secs= document.querySelectorAll("section")
  let na= document.querySelector(".menu-nav")
  let navul=document.getElementById("nav-list")
let container=document.getElementsByClassName("container")



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





navul.addEventListener("click",(even)=>{
    even.preventDefault();
    if(even.target.dataset.nav){
document.getElementById(even.target.dataset.nav).scrollIntoView({behavior:"smooth"});
    }
})



//focus on section
// window.onscroll=function () {
//     document.querySelectorAll("section").forEach(function(active){
//         let activeLink = navul.querySelector(`[data-nav=${active.id}]`)
//         if(active.getBoundingClientRect().top >=-600 &&
//         active.getBoundingClientRect().top<=150)
//         {
//             active.classList.add("your-active-class")
//             activeLink.classList.add("active-link");
//         }else{
//             active.classList.remove("your-active-class")
//             activeLink.classList.remove("active-link");
//         }
//     })
   
// }
//focus on section
 function isInViewport(element) {
    const distance = element.getBoundingClientRect();
    return (
        distance.top <= 600 &&
        distance.left >= 0 &&
        distance.bottom >= 90 &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth));
        ;
}

document.addEventListener('scroll', function activeSection(){
    for (const section of secs) {
        const navItem = navul.querySelector(`[data-nav=${section.id}]`);
        if (isInViewport(section)) {
            section.classList.add("your-active-class");
             navItem.classList.add("active-link");
            console.log(`Section ${section.id} is active`);
        } else {
            section.classList.remove("your-active-classs");
             navItem.classList.remove("active-link");
        }
    }
}
)


//BTN TO SCROLL TOP

btntop.addEventListener('click', topFunction());
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// btn's top display

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btntop.style.display = "block";
          } else {
            btntop.style.display = "none";
          }
    }