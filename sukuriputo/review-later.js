// fetching data with JSON

// Variation 1
<script>
  // Function to fetch and display projects function fetchAndDisplayProjects(){" "}
  {fetch("project-data.json") // Adjust the path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      // Now 'data' contains your JSON data

      // Get the project list container
      const projectList = document.querySelector(".project-list");

      data.forEach((project) => {
        // Create a project item container
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        // Create HTML elements for each project
        const projectImage = document.createElement("img");
        projectImage.src = project.projectImage;
        projectImage.alt = project.projectName;

        const projectText = document.createElement("div");
        projectText.classList.add("project-text");

        const projectName = document.createElement("h3");
        projectName.textContent = project.projectName;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.projectDescription;

        const techStack = document.createElement("p");
        techStack.textContent =
          "Tech Stack: " + project.projectTechStack.join(", ");

        const projectLink = document.createElement("a");
        projectLink.textContent = "GitHub Repository";
        projectLink.href = project.projectLink;

        // Append elements to the project item
        projectText.appendChild(projectName);
        projectText.appendChild(projectDescription);
        projectText.appendChild(techStack); // Add tech stack information
        projectText.appendChild(projectLink);

        projectItem.appendChild(projectText);
        projectItem.appendChild(projectImage);

        // Append the project item to the project list
        projectList.appendChild(projectItem);
      });
    })
    .catch((error) => console.error("Error loading JSON:", error))}
  // Call the fetchAndDisplayProjects function to load and display the projects
  fetchAndDisplayProjects();
</script>;

// Variation 2
// Fecthing data from JSON
<script>
  function fetchAndDisplayProjects(){" "}
  {fetch("project-data.json")
    .then((response) => response.json())
    .then((data) => {
      // Now 'data' contains your JSON data

      // Get the project list container
      const projectList = document.querySelector(".project-list");

      // Iterate through the projects and create HTML elements
      data.forEach((project) => {
        // Create a project item container
        const projectItem = document.createElement("li");
        projectItem.classList.add("project-item");

        // Check if project name is available
        if (project.projectName) {
          const projectName = document.createElement("h3");
          projectName.textContent = project.projectName;
          projectItem.appendChild(projectName);
        }

        // Check if project description is available
        if (project.projectDescription) {
          const projectDescription = document.createElement("p");
          projectDescription.textContent = project.projectDescription;
          projectItem.appendChild(projectDescription);
        }

        // Check if project image is available
        if (project.projectImage) {
          const projectImage = document.createElement("img");
          projectImage.src = project.projectImage;
          projectImage.alt = project.projectName || ".product-image"; // Provide alt text or a default value
          projectItem.appendChild(projectImage);
        }

        // Check if project link is available
        if (project.projectLink) {
          const projectLink = document.createElement("a");
          projectLink.textContent = "GitHub Repository";
          projectLink.href = project.projectLink;
          projectItem.appendChild(projectLink);
        }

        // Check if project tech stack is available
        if (project.projectTechStack && project.projectTechStack.length > 0) {
          const techStack = document.createElement("p");
          techStack.textContent =
            "Tech Stack: " + project.projectTechStack.join(", ");
          projectItem.appendChild(techStack);
        }

        // Append the project item to the project list
        projectList.appendChild(projectItem);
      });
    })
    .catch((error) => console.error("Error loading JSON:", error))}
  // Call the fetchAndDisplayProjects function to load and display the projects
  fetchAndDisplayProjects();
</script>;

//Masonry Grid
// const container = document.querySelector(".container");

// function generateMasonryGrid(columns, posts) {
//   container.innerHTML = "";

//   let columnWrappers = {};

//   for (let i = 0; i < columns; i++) {
//     columnWrappers[`column${i}`] = [];
//   }

//   for (let i = 0; i < posts.length; i++) {
//     const column = i % columns;
//     columnWrappers[`column${column}`].push(posts[i]);
//   }

//   for (let i = 0; i < columns; i++) {
//     let columnPosts = columnWrappers[`column${i}`];
//     let div = document.createElement("div");
//     div.classList.add("column");

//     columnPosts.forEach((post) => {
//       let postDiv = document.createElement("div");
//       postDiv.classList.add("post");
//       let image = document.createElement("img");
//       image.src = post.image;
//       image.alt = post.title;
//       let hoverDiv = document.createElement("div");
//       hoverDiv.classList.add("overlay");
//       let title = document.createElement("h3");
//       title.innerText = post.title;
//       hoverDiv.appendChild(title);

//       postDiv.append(image, hoverDiv);
//       div.appendChild(postDiv);
//     });
//     container.appendChild(div);
//   }
// }

// let previousScreenSize = window.innerWidth;

// window.addEventListener("resize", () => {
//   imageIndex = 0;
//   if (window.innerWidth < 600 && previousScreenSize >= 600) {
//     generateMasonryGrid(1, posts);
//   } else if (
//     window.innerWidth >= 600 &&
//     window.innerWidth < 1000 &&
//     (previousScreenSize < 600 || previousScreenSize >= 1000)
//   ) {
//     generateMasonryGrid(2, posts);
//   } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
//     generateMasonryGrid(4, posts);
//   }
//   previousScreenSize = window.innerWidth;
// });

// if (previousScreenSize < 600) {
//   generateMasonryGrid(1, posts);
// } else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
//   generateMasonryGrid(2, posts);
// } else {
//   generateMasonryGrid(4, posts);
// }

// Staggering Text Effect - GSAP
// Split text
const splitText = new SplitText(".stagger");
let textDivision = "chars";

// Animate text
gsap.from(splitText[textDivision], {
  opacity: 0,
  y: "100%",
  stagger: 0.05,
  ease: "expo.out",
  repeat: -1,
  repeatDelay: 1,
});
