/*navigation section */

const aboutMe = document.getElementById("about-me-nav");
const contact = document.getElementById("contact-nav");
const skill = document.getElementById("skill-nav");
const project = document.getElementById("project-nav");

const navHover = function (event) {
  event.target.style.color = "#bdbdbd";
  event.target.style.backgroundColor = "#7d56ff";
};

const navReset = function (event) {
  event.target.style.color = "";
  event.target.style.backgroundColor = "";
};

aboutMe.onmouseover = navHover;
aboutMe.onmouseout = navReset;

contact.onmouseover = navHover;
contact.onmouseout = navReset;

skill.onmouseover = navHover;
skill.onmouseout = navReset;

project.onmouseover = navHover;
project.onmouseout = navReset;

/* project section */

// arrow section
const arrowCircleLeft = document.getElementById("arrow-left");
const arrowCircleRight = document.getElementById("arrow-right");

const iconHover = function (event) {
  event.target.style.color = "blue";
};

const iconUnhover = function (event) {
  event.target.style.color = "";
};

arrowCircleLeft.addEventListener("mouseover", iconHover);
arrowCircleLeft.addEventListener("mouseout", iconUnhover);

arrowCircleRight.addEventListener("mouseover", iconHover);
arrowCircleRight.addEventListener("mouseout", iconUnhover);

// project list section ketika ada mouse over

const projectList = document.getElementById("project-list");

const zoomIn = (event) => {
  event.target.style.fontSize = "3.2rem";
};

const zoomOut = (event) => {
  event.target.style.fontSize = "";
};

projectList.onmouseover = zoomIn;
projectList.onmouseout = zoomOut;

// project list section 2

const arr = [
    { id: "project-list", href: "https://github.com/domsulu/quote-generator", text: "Quote Generator", target: "_blank"},
    { id: "project-list", href: "https://github.com/domsulu/chillywing.github.io/tree/main/Credit%20Card%20Checker", text: "Credit Checker", target: "_blank"},
    { id: "project-list", href: "https://github.com/domsulu/chillywing.github.io/tree/main/Mystery%20Organism", text: "Mystery Organism" ,target: "_blank"},
  ]; // Data elemen yang akan diubah
  
  let currentElementIndex = 0; // Indeks elemen saat ini
  const myElement = document.getElementById("project-list"); // Elemen DOM yang akan diubah
  
  // Fungsi untuk mengubah atribut-atribut elemen DOM sesuai dengan posisi dalam array
  function changeElement(direction) {
    if (direction === "right") {
      currentElementIndex = (currentElementIndex + 1) % arr.length;
    } else if (direction === "left") {
      currentElementIndex = (currentElementIndex - 1 + arr.length) % arr.length;
    }
  
    const newElement = arr[currentElementIndex];
    myElement.id = newElement.id;
    myElement.href = newElement.href;
    myElement.innerText = newElement.text;
  };
  
  // Event listener untuk tombol panah kanan
  arrowCircleRight.addEventListener("click", function (event) {
    event.preventDefault();
    changeElement("right");
  });
  
  // Event listener untuk tombol panah kiri
  arrowCircleLeft.addEventListener("click", function (event) {
    event.preventDefault();
    changeElement("left");
  });





  
