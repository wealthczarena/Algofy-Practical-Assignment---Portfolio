"use strict";

// Hero Autotype Effect
// Credit: Mattboldt - https://github.com/mattboldt/typed.js/

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".auto-type", {
    strings: ["I am a", "Eu sou uma", "我是一个", "Yo soy una", "私は"],
    typeSpeed: 130,
    backSpeed: 100,
    loop: true,
  });
});

// Accordian
let accordians = [...document.querySelectorAll(".acc-list")];

accordians.forEach((acc, idx) => {
  acc.addEventListener("click", () => {
    let panel = acc.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.classList.remove("active");
      panel.style.maxHeight = null;
    } else {
      panel.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// Dynamically generating Projects Section
const container = document.querySelector(".container");

function generateMasonryGrid(columns, posts) {
  container.innerHTML = "";

  let columnWrappers = {};

  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }

  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let div = document.createElement("div");
    div.classList.add("column");

    columnPosts.forEach((post) => {
      let postDiv = document.createElement("div");
      postDiv.classList.add("post");

      // Creating an image element and setting its src attribute
      let image = document.createElement("img");
      image.src = post.image;
      image.alt = post.title;

      // Create a overlay element
      let overlayDiv = document.createElement("div");
      overlayDiv.classList.add("overlay");

      // Creating a title element and setting its content
      let title = document.createElement("h3");
      title.innerText = post.title;

      // Creating the description element
      let description = document.createElement("p");
      description.innerText = post.description;

      // Creating a link element
      let link = document.createElement("a");
      link.href = post.link;
      link.textContent = "Go to Repo";

      // Appending the image, title, and overlay to the postDiv
      overlayDiv.appendChild(title);
      overlayDiv.appendChild(description);
      overlayDiv.appendChild(link);
      postDiv.appendChild(image);
      postDiv.appendChild(overlayDiv);

      div.appendChild(postDiv);
    });
    container.appendChild(div);
  }
}

// Setting breakpoints for smaller screens
let previousScreenSize = window.innerWidth;

window.addEventListener("resize", () => {
  imageIndex = 0;
  if (window.innerWidth < 600 && previousScreenSize >= 600) {
    generateMasonryGrid(1, posts);
  } else if (
    window.innerWidth >= 600 &&
    window.innerWidth < 1000 &&
    (previousScreenSize < 600 || previousScreenSize >= 1000)
  ) {
    generateMasonryGrid(2, posts);
  } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
    generateMasonryGrid(4, posts);
  }
  previousScreenSize = window.innerWidth;
});

if (previousScreenSize < 600) {
  generateMasonryGrid(1, posts);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  generateMasonryGrid(2, posts);
} else {
  generateMasonryGrid(4, posts);
}

// Staggering Text
// const text = document.querySelector(".stagger");
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent = "";

// for (let i = 0; i < splitText.length; i++) {
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick() {
//   const span = text.querySelectorAll("span")[char];
//   span.classList.add("fade");
//   char++;
//   if (char === splitText.length) {
//     complete();
//     return;
//   }
// }

// function complete() {
//   clearInterval(timer);
//   timer = null;
// }

const headings = document.querySelectorAll(".stagger");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateText(entry.target);
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
});

headings.forEach((heading) => {
  observer.observe(heading);
});

function animateText(heading) {
  const strText = heading.textContent;
  const splitText = strText.split("");
  heading.textContent = "";

  for (let i = 0; i < splitText.length; i++) {
    heading.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;
  const timer = setInterval(onTick, 50);

  function onTick() {
    const span = heading.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
  }
}
