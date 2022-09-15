# Random Password Generator

This is random password generator project using javascript.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The project

Users should be able to:

- Generate 2 secure random passwords
- Set password length between 10 and 15 characters including uppercase, lowercase and symbols
- Set Dark or Light Mode using toggle button
- Copy password directly to clipboard

### Screenshots

![Darkmode](/dark.jpg)
![Lightmode](/light.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript


### What I learned

The main purpose of this project was to practice JavaScript and improve CSS intermediate/advanced concepts. The Dark Mode theme was an extra challenge for me since this was my first time implementing it without previous experience at the same time allow me to put in practice problem solving and research skills.

To see how you can add code snippets, see below:

```html
<!-- Input checkbox for add or remove class from body with an id -->
<label for="checkbox" class="switch">
  <input type="checkbox" class="nightmode" id="checkbox">
  <span class="slider"></span>
```
```css
/* if dark-mode class is added set this background */
.dark-mode .main {
  background: #1C1C1C;
}
```
```js
//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  if (checkbox.checked){
    darkmode();
  } else {
    nodark();
  }
})
```

### Continued development

As self taught developer student I'm looking forward to continue my learning path by doing this projects and hope to get ready for a job soon.

### Useful resources

- [Figma](https://www.figma.com/) - This helped me with global design.
- [w3schools](https://www.w3schools.com/html/default.asp) - This is a complete documentation resource. I'd recommend it to anyone who still learning this concepts.
- [MDN](https://developer.mozilla.org/en-US/) - Another great documentation resource.

## Author

- Github - [Francisco Gonzalez](https://github.com/fdsantos300)
