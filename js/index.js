const newSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle nav

    console.log(burger);
    burger.addEventListener('click',()=>{
        nav.classList.toggle("nav-active");

            //animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation)
                {
                    link.style.animation = '';
                }
                else{
                    link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
                }
            
             });
             //Burger Animation
            //  burger.classList.toggle(`toggle`); 
    });
}

newSlide();

const element = document.getElementById('nav');
document.onscroll = ()=> {
    console.log(window.scrollY);
    if(window.scrollY > 0) {
        console.log("scrolling!!!")
        $(element).css("background-color", "#494B56")
        $(element).css("transition", "background-color .5s ease")
    }
    else{
        $(element).css("background-color", "transparent")
    }


}

