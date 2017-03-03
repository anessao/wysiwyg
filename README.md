# WYSIWYG ASSIGNMENT
##### Working with DOM Handlers and Event Listeners | Advanced
##### Focus on functionality -> styling minimal to assignment requirements

#### ASSIGNMENT PARAMETERS:
1. Create an array of objects that represents famous people [example structure below].

```
{
  	title: "Physicist",
  	name: "Galileo",
  	quote: "You cannot teach a man anything; you can only help him find it within himself.",
  	image: "https://lh6.googleusercontent.com/proxy/KslJRLWPfutqk1hYNKU8tp0X0nV1sXqDXxJOB2hJOvu_YldS0otUDFI_FOCM7b92ypH9GEugPGrtOJHjR2NTgct24PxtXjRHu86UrNpGRKtRH4-cm5_zvnG4ilI=s0-d",
  	lifespan: {
    	birth: 1564,
    	death: 1642
  	}
},
```
1. included a `<textarea>` input in DOM
 - Beneath that, a container block for the bio cards [structure below]
 ```
 <div id="container">
 	
 </div>
 ```
2. Using JavaScript to input the array with DOM elements and set up for styling [example code below]
```
var newContainer = '';
	
	newContainer += `<div id="card-${x}" class="personCard"><img src="${famousPeople[x].image}">`;
	newContainer += `<h2>${famousPeople[x].name}</h2>`;
	newContainer += `<h3>${famousPeople[x].title}</h3>`;
	newContainer += `<section id="quote">Famous Quote:${famousPeople[x].quote}</section>`;
	newContainer += `<footer>Birth: ${famousPeople[x].lifespan.birth}<br> Death: ${famousPeople[x].lifespan.death}</footer>`;
	newContainer += `</div>`;
	
	container.innerHTML += newContainer;
```
3. For every even numbered element, have a light yellow background.
4. For every odd numbered element, have a light blue background.
5. When you click on one of the person elements, a dotted border should appear around it.
6. When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
7. When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
8. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

#### SAMPLE CODE:
```
//EXAMPLE OF ABOVE REQUIREMENT:
//*********************************************
//ON ENTER/RETURN KEYPRESS -> INPUT FIELD BLANK
//*********************************************

if (e.keyCode === 13){
	selectedElement[0].childNodes[3].innerText = '';
	userInput.placeholder = '';
	userInput.value = '';
}
```
#### HOW TO RUN CODE
```
1. git clone https://github.com/nss-evening-cohort-05/iife-translator-codemonkeys
2. cd iife-translator-codemonkeys
3. npm install http-server -g
4. http-server -p 8080
```

#### SCREENSHOT AND COMPARISONS OF BEFORE/AFTER BUTTON CLICKS
![before and after button clicks](https://raw.githubusercontent.com/anessao/wysiwyg/wysiwyg/screenshots.png)

#### TECHNOLOGIES USED
- JavaScript
- HTML
- CSS





