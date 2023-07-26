const newSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //Toggle nav

  console.log(burger);
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });
    //Burger Animation
    //  burger.classList.toggle(`toggle`);
  });
};

newSlide();

const element = document.getElementById("nav");
document.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    console.log("scrolling!!!");
    $(element).css("background-color", "#494B56");
    $(element).css("transition", "background-color .5s ease");
  } else {
    $(element).css("background-color", "transparent");
  }
};

var cards = document.getElementsByClassName("card");
var cardArray = Array.from(cards);

const btn = document.getElementsByClassName("btn")[0];
console.log(btn);

btn.addEventListener("click", (event) => {
  const form = document.getElementById("service-form");
  console.log(form);

  console.log(event.currentTarget.parentElement.parentElement);
  var clickedCard = event.currentTarget.parentElement.parentElement;
  clickedCard.classList.add("clicked-card");
  if (clickedCard.classList.contains("clicked-card")) {
    clickedCard.style.width = "100%";
    clickedCard.style.position = "absolute";
    clickedCard.style.top = "0";
    clickedCard.style.zIndex = "1000";
    clickedCard.style.transition = "all 0.5s ease-in-out";

    clickedCard.style.display = "flex";
    clickedCard.style.flexDirection = "row";
    clickedCard.style.justifyContent = "space-between";
    form.style.display = "flex";
    form.style.width = "60%";
    form.previousElementSibling.style.width = "40%";

    cardArray.forEach((card) => {
      if (!card.classList.contains("clicked-card")) {
        // card.style.position = "absolute";
        card.style.top = "0";
        card.style.zIndex = "1";
        card.style.opacity = "0";
      }
    });
  }
});

// card.classList.add('clicked-card');
// if (card.classList.contains("clicked-card")) {

//
// }

cardArray.forEach((card) => {
  card.onmouseover = () => {
    card.children[1].children[1].children[1].style.padding = "0 15%";
    // card.children[1].children[1].children[1].style.padding = "0 5%";
  };
  card.onmouseleave = () => {
    card.children[1].children[1].children[1].style.padding = "0 10%";
  };
});
