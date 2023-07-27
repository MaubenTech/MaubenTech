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

btn.addEventListener("click", (event) => {});

cardArray.forEach((card) => {
  const mouseover = () => {
    card.children[1].children[1].children[1].style.padding = "0 15%";
    // card.children[1].children[1].children[1].style.padding = "0 5%";
  };
  const mouseleave = () => {
    card.children[1].children[1].children[1].style.padding = "0 10%";
  };
  if (!card.classList.contains("clicked-card")) {
    card.addEventListener("mouseover", mouseover);
    card.addEventListener("mouseleave", mouseleave);
  }

  card.addEventListener("click", (event) => {
    card.removeEventListener("mouseover", mouseover);
    card.removeEventListener("mouseleave", mouseleave);

    const form = event.currentTarget.children[2];
    console.log(form);

    var clickedCard = event.currentTarget;
    clickedCard.classList.add("clicked-card");

    form.classList.add("active");

    cardArray.forEach((card) => {
      if (!card.classList.contains("clicked-card")) {
        card.style.display = "none";
      }
    });
  });
});
