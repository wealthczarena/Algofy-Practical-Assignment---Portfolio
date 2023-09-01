"use strict";
// Nav 3d Hover Effect
const menuItems = [...document.querySelectorAll(".main-nav-link")];

menuItems.forEach((item) => {
  let word = item.children[0].children[0].innerText.split("");
  item.children[0].innerHTML = "";
  word.forEach((letter, idx) => {
    item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
  });
  let cloneDiv = item.children[0].cloneNode(true);
  cloneDiv.style.position = "absolute";
  cloneDiv.style.left = "0";
  cloneDiv.style.top = "0";
  item.appendChild(cloneDiv);
});

// function fetchAndDisplayProjects() {
//   fetch("project-data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       // Now 'data' contains your JSON data

//       // Iterate through the projects and create HTML elements
//       const projectList = document.querySelector(".project-list");

//       data.forEach((project, index) => {
//         // Create HTML elements for each project
//         const projectItem = document.createElement("li");
//         const projectImage = document.createElement("img");
//         const projectName = document.createElement("h3");
//         const projectTechStack = document.createElement("h4");
//         const projectDescription = document.createElement("p");
//         const projectLink = document.createElement("a");

//         // Set content and attributes based on JSON data
//         projectImage.src = project.projectImage; // Set image source
//         projectImage.alt = project.projectName; // Set image alt text
//         projectName.textContent = project.projectName;
//         projectDescription.textContent = project.projectDescription;
//         projectLink.textContent = "GitHub Repository";
//         projectTechStack.textContent = project.projectTechStack;
//         projectLink.href = project.projectLink;

//         // Append elements to the project item
//         if (index % 2 === 0) {
//           // For even-indexed projects, display text first
//           projectItem.appendChild(projectName);
//           projectItem.appendChild(projectDescription);
//           projectItem.appendChild(projectLink);
//           projectItem.appendChild(projectImage);
//           projectItem.appendChild(projectTechStack);
//         } else {
//           // For odd-indexed projects, display image first
//           projectItem.appendChild(projectImage);
//           projectItem.appendChild(projectName);
//           projectItem.appendChild(projectDescription);
//           projectItem.appendChild(projectLink);
//           projectItem.appendChild(projectTechStack);
//         }

//         // Append the project item to the project list
//         projectList.appendChild(projectItem);
//       });
//     })
//     .catch((error) => console.error("Error loading JSON:", error));
// }

// // Call the fetchAndDisplayProjects function to load and display the projects
// fetchAndDisplayProjects();
