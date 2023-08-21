const posts = [];

const images = [
  "imgs-compressed/omnifood-mockup.png",
  "imgs-compressed/portfolio-screenshot.png",
  "imgs-compressed/cr-coding-prjt-1.png",
  "imgs-compressed/cr-coding-prjt-2.png",
  "imgs-compressed/cr-coding-prjt-3.png",
  "imgs-compressed/cr-coding-prjt-4.png",
  "imgs-compressed/cr-coding-prjt-5.png",
];

const names = [
  "Omnifood Project",
  "Personal Portfolio",
  "Creative Coding with Javascript",
  "Creative Coding with Javascript",
  "Creative Coding with Javascript",
  "Creative Coding with Javascript",
  "Creative Coding with Javascript",
];

const description = [
  "A website for a startup which specializes in making people eat healthy",
  "Personal Porfolio website that was created as a technical task for a Web Intern Position",
  "Generative art with Javascript",
  "Generative art with Javascript",
  "Generative art with Javascript",
  "Generative art with Javascript",
  "Generative art with Javascript",
];

const link = ["https://omnifoodprjt.netlify.app/", "#", "#", "#", "#", "#"];

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
