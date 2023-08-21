# Algofy-Practical-Test---Portfolio
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/wealthczarena/Algofy-Practical-Assignment---Portfolio/blob/main/LICENSE) 

# About the project

https://czacawealth.netlify.app/

**Algofy** is a leading digital marketing agency working with dozens of brands across industries and **Algofy's Practical Assignment** is a task to evaluate problem-solving and understanding of web development concepts as part of their recruitment process. (https://www.algofy.com/).

The project consists of using advanced CSS techniques to Create a responsive webpage which includes the following:

## HTML, Advanced CSS, and JavaScript - Part 1
- A navigation bar with three links: Home, About, Contact, and a logo (logos can be premade)
    - Application of advanced CSS techniques to enhance the navigation bar and make it mobile-friendly
- A hero section with a heading, a subheading, and a background image (images can be premade)
- An About section with a brief paragraph about yourself and an image and by using JavaScript, allow users to expand and collapse the paragraph on the About section
    - Application of CSS grid or flexbox to achieve a visually pleasing layout for this section
- A Contact section with a form that includes fields for name, email, and message
    - Application of advanced CSS styling techniques to create an attractive form design.

## Dynamic Content Generation - Part 2
Implementation of dynamic content rendering using the Liquid templating engine:
- Create a JSON or YAML file that contains an array of objects, each representing a project you've worked on in the past
- Use Liquid to dynamically generate a "Projects" section on your webpage and iterate through the array of project objects and display each project's information, including its name, description, and an image
- Add a link or button to each project that leads to its corresponding GitHub repository
- Use Liquid filters to truncate long project descriptions and ensure they fit neatly within the layout

# Tech Stack Used
## Front end
- HTML 
- CSS
- JavaScript
- Vanilla JavaScript

## Version Control & Deployment
- Netlify
- Git

## Cool Features
- Responsive Nav Bar
- Text effect on hover: nav bar items (Home, About, Contact) 
- Infinite Marquee
- Vanilla Javascript Masonry
- Typewriter Text Effect
- Smooth Scrolling with mouse, keyboard, or trackpad
- Responsive Grid Layout
- Overlay effect with text on image hover
- Responsive buttons

## Typography
- Porlane
- NeueMontreal

## Color
Shades
- #152a21
- #21352c

Tints
- #e6f3ed

## Mobile Layout
![Mobile 1](https://github.com/wealthczarena/assets/blob/main/images/hero-mobile.jpg) 

![Mobile 2](https://github.com/wealthczarena/assets/blob/main/images/about-mobile.jpg)

![Mobile 3](https://github.com/wealthczarena/assets/blob/main/images/project-mobile.jpg)

## Tablet Layout
![Tab 1](https://github.com/wealthczarena/assets/blob/main/images/hero-tab.png)

![Tab 2](https://github.com/wealthczarena/assets/blob/main/images/about-tab.png)

![Tab 3](https://github.com/wealthczarena/assets/blob/main/images/projects-tab.png)

![Tab 4](https://github.com/wealthczarena/assets/blob/main/images/contact-tab.png)

## Desktop Layout
![Web 1](https://github.com/wealthczarena/assets/blob/main/images/hero-web.png)

![Web 2](https://github.com/wealthczarena/assets/blob/main/images/about-web.png)

![Web 3](https://github.com/wealthczarena/assets/blob/main/images/projects-web.png)

![Web 4](https://github.com/wealthczarena/assets/blob/main/images/contact-web.png)

## Developer's Log
- You would notice that although the assignment requested me to use JSON and Liquid templates, the Liquid template aspect isn't included. (However, if you check my not-so-html folder, you would find a review HTML file with every code I commented on because I intend to review them later on and understand why they didn't work as intended) The reason is that I found out not too long ago and I mean a few hours ago that Liquid templates don't work with HTML and JavaScript like I thought, so my JSON code obviously wasn't working. I then quickly found a way to do the same task but with Javascript, by creating a project-imgs.js folder that creates an array of posts taking images as objects and a function to iterate through the area and create the necessary HTML structure. I tested it with images first as a test run to see if my code and logic would work since my JSON file wasn't working. And when it did, I progressively added the other details such as link, description, title, etc. and styled them with CSS, and used Vanilla Js to create Masonry Responsive Grid

# How to access the website
(https://czacawealth.netlify.app/)

- Use the nav bar to navigate through the sections of the site
- Click the buttons in the hero to access contact me or view my projects
- Hover on images to reveal project details in the Project section
- Use mouse, trackpad, and keyboard to scroll through the website (smooth scroll implementation)

## To clone repository
Pré-requisitos: npm / yarn

```bash
# clone repository
git clone https://github.com/wealthczarena/Algofy-Practical-Assignment---Portfolio

# enter your folder name
cd your-folder-name

# install dependencies
yarn install

# execute the project
yarn start
```

# Autor

Czarena Wealth

(https://www.linkedin.com/in/czarenawealth/)
