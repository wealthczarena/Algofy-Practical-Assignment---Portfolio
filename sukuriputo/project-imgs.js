const posts = [];

const images = [
  "imgs-compressed/omnifood-mockup.png",
  "imgs-compressed/portfolio-screenshot.png",
  "imgs-compressed/ssaway.png",
  "imgs-compressed/rotate.png",
  "imgs-compressed/tis-day.png",
  "imgs-compressed/tis-night.png",
  "imgs-compressed/trippydtext.png",
  "imgs-compressed/cr-coding-prjt-1.png",
  "imgs-compressed/cr-coding-prjt-2.png",
  "imgs-compressed/cr-coding-prjt-3.png",
  "imgs-compressed/cr-coding-prjt-4.png",
  "imgs-compressed/cr-coding-prjt-5.png",
];

const names = [
  "Omnifood Project",
  "Personal Portfolio",
  "Spin, Spin Away",
  "Row-Row-Tate",
  "Tis Day",
  "Tis Night",
  "Trippy-D Text",
  "Creative Coding with Javascript",
  "Creative Coding with Javascript",
  "Creative Coding with Javascript",
  "Creative Coding with Javascript",
  "Creative Coding with Javascript",
];

const description = [
  "A website for a startup which specializes in making people eat healthily",
  "Personal Portfolio website that was created as a technical task for a Web Intern Position",
  "My first Three.js Project: Side-by-Side 3D meshes",
  "Three.js project where 3D child mesh rotates around parent mesh in a loop",
  "3d Simulation of the earth",
  "3d Simulation of the earth at night",
  "3d text geometry exploration with Three.js",
  "Generative art with Javascript",
  "Generative art with Javascript",
  "Generative art with Javascript",
  "Generative art with Javascript",
  "Generative art with Javascript",
];

const link = [
  "https://omnifoodprjt.netlify.app/",
  "https://czacawealth.netlify.app/",
  "https://codepen.io/czaczar/full/qBLbBBG",
  "https://codepen.io/czaczar/full/jOXrxMx",
  "https://tis-day.vercel.app/",
  "https://tis-night.netlify.app/",
  "https://3d-much.netlify.app/",
  "#",
  "#",
  "#",
  "#",
  "#",
];

let imageIndex = 0;

for (let i = 0; i <= images.length; i++) {
  let item = {
    id: i + 1,
    // title: `Post ${i}`,
    title: names[i],
    date: `${i < 9 ? "0" : ""}${i + 1}/08/2023 `,
    description: description[i],
    link: link[i],
    image: images[imageIndex],
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts);
