// Your code goes here
const linksArray = document.querySelectorAll(".nav-link");
const containerColor = document.querySelector("body");
const buttonsArray = document.querySelectorAll(".btn");
const contentSelector = document.querySelector(".content-pick");

//PreventDefault
linksArray.forEach((link) =>
  link.addEventListener("click", (event) => {
    console.log("I was clicked");
    event.preventDefault();
  })
);

//MOUSEOVER EVENT
linksArray.forEach((link) =>
  link.addEventListener("mouseover", (event) => {
    event.target.style.color = "#D3AF95";
    event.target.style.transform = "rotate(180deg)";
    event.target.style["font-size"] = "2rem";
  })
);

//MOUSELEAVE EVENT
linksArray.forEach((link) =>
  link.addEventListener("mouseleave", (event) => {
    event.target.style.color = "";
    event.target.style.transform = "";
    event.target.style["font-size"] = "";
  })
);

//MOUSEDOWN EVENT
containerColor.addEventListener("mousedown", function (event) {
  event.target.style["background-color"] = "#7f7f7f";
});

//MOUSEUP EVENT
containerColor.addEventListener("mouseup", function (event) {
  event.target.style["background-color"] = "#6baed6";
});

//CLICK EVENTS
buttonsArray.forEach((button) =>
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    event.target.style.color = "green";
    event.target.style["font-size"] = "2rem";
  })
);

buttonsArray.forEach((link) =>
  link.addEventListener("mouseleave", (event) => {
    event.target.style.color = "";
    event.target.style["font-size"] = "";
  })
);

contentSelector.addEventListener("click", (event) => {
  event.target.style.border = "double 5px black";
  // event.target.style.transform = 'skew(30deg, 20deg);';
});
