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

// const btnEventListener = (event) => {
//   event.stopPropagation();
//   const btn = event.currentTarget;
//   console.log("Ev:", btn);
//   const card = btn.parentElement;
//   console.log("Card:", card);
//   const i = btn.children[0];
//   console.log("i: ", i);
//   console.log("btn clicked!");
//   if (i.classList.contains("fa-circle-chevron-left")) {
//     reverseClickedCard(card);
//     console.log(document.getElementsByClassName("clicked-card")[0]);
//     console.log("Icon has chevron-left!");
//   }
// };

const mouseover = (card) => {
  card.children[1].children[1].children[1].style.padding = "0 15%";
  // card.children[1].children[1].children[1].style.padding = "0 5%";
};
const mouseleave = (card) => {
  card.children[1].children[1].children[1].style.padding = "0 10%";
};

for (let i = 0; i < cardArray.length; i++) {
  const card = cardArray[i];
  if (!card.classList.contains("clicked-card")) {
    card.addEventListener("mouseover", mouseover(card));
    card.addEventListener("mouseleave", mouseleave(card));
  }

  // card.addEventListener("click", (event) => {
  //   console.log("card clicked!");
  //   const btn = card.children[0];

  //   const i = card.children[0].children[0];

  //   // console.log(btn);
  //   btn.addEventListener("click", btnEventListener);

  //   card.removeEventListener("mouseover", mouseover);
  //   card.removeEventListener("mouseleave", mouseleave);

  //   const form = event.currentTarget.children[2];

  //   card.classList.add("clicked-card");

  //   form.classList.add("active");

  //   oneClickRemainingCards();

  //   i.classList.remove("fa-circle-chevron-right");
  //   i.classList.add("fa-circle-chevron-left");
  // });

  let timeout = null;

  card.addEventListener("click", (event) => {
    if (timeout != null) {
      clearTimeout(timeout);
      timeout == null;
    }

    const expandingCard = document.getElementById("expanding-card");
    expandingCard.classList.add("clicked");
    expandingCard.style.zIndex = 1000;

    const expandingCardImage = document.getElementById("expanding-card-image");
    expandingCardImage.src = event.currentTarget.children[1].children[0].src;

    const expandingTextHeader = document.getElementById(
      "expanding-text-header"
    );
    expandingTextHeader.innerHTML =
      event.currentTarget.children[1].children[1].children[0].innerHTML;

    const expandingTextContent = document.getElementById(
      "expanding-text-content"
    );

    expandingTextContent.innerHTML =
      event.currentTarget.children[1].children[1].children[2].innerHTML;

    const expandingFormTextarea = document.getElementById(
      "expanding-form-textarea"
    );
    expandingFormTextarea.value = `Hi, I'm interested in your ${expandingTextHeader.innerHTML.toLowerCase()} services.`;
    expandingFormTextarea.placeholder = "How can we help you?";
    expandingFormTextarea.onfocus = (event) => event.currentTarget.select();

    const form = expandingCard.children[2];
    form.classList.add("active");

    const reverseExpandBtn = expandingCard.children[0];
    reverseExpandBtn.addEventListener("click", (event) => {
      expandingCard.classList.remove("clicked");

      timeout = setTimeout(() => {
        if (!expandingCard.classList.contains("clicked")) {
          expandingCard.style.zIndex = 0;
          console.log("Timeout done!");
        }
      }, 600);
    });
  });
}

// function reverseClickedCard(card) {
//   console.log("reverseClickedCard called!");
//   reverseOneClick();

//   card.addEventListener("mouseover", mouseover(card));
//   card.addEventListener("mouseleave", mouseleave(card));

//   console.log(card);
//   card.classList.remove("clicked-card");

//   const form = card.children[2];

//   form.classList.remove("active");

//   const i = card.children[0].children[0];

//   i.classList.remove("fa-circle-chevron-left");
//   i.classList.add("fa-circle-chevron-right");

//   const btn = card.children[0];
//   btn.removeEventListener("click", btnEventListener);
// }

// function oneClickRemainingCards() {
//   for (let i = 0; i < cardArray.length; i++) {
//     let card = cardArray[i];
//     if (!card.classList.contains("clicked-card")) {
//       card.classList.add("one-clicked");
//       card.style.position = "absolute";
//       card.style.left = `${i * (22 + 4)}%`;
//     } else {
//       if (i !== 0) {
//         cardArray[0].style.left = `${i * (22 + 4)}%`;
//         card.style.left = 0;
//       }
//     }
//   }
// }

// function reverseOneClick() {
//   cardArray.forEach((card) => {
//     card.classList.remove("one-clicked");
//     setTimeout(() => {
//       card.style.left = null;
//       card.style.position = "relative";
//     }, 500);
//   });
// }
