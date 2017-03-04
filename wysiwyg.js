var container = document.getElementById('container');
var userInput = document.getElementById('userInput');

var famousPeople = [
	{
  		title: "Physicist",
  		name: "Galileo",
  		quote: "You cannot teach a man anything; you can only help him find it within himself.",
  		image: "https://lh6.googleusercontent.com/proxy/KslJRLWPfutqk1hYNKU8tp0X0nV1sXqDXxJOB2hJOvu_YldS0otUDFI_FOCM7b92ypH9GEugPGrtOJHjR2NTgct24PxtXjRHu86UrNpGRKtRH4-cm5_zvnG4ilI=s0-d",
  		lifespan: {
    		birth: 1564,
    		death: 1642
  		}
	}, {
		title: "Philosopher",
  		name: "Aristotle",
  		quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
  		image: "http://www.thefamouspeople.com/profiles/images/aristotle-17.jpg",
  		lifespan: {
    		birth: "384 BC",
    		death: "322 BC"
  		}
	}, {
		title: "Theologian",
  		name: "Erasmus",
  		quote: "When I get a little money I buy books; and if any is left I buy food and clothes.",
  		image: "http://kingofwallpapers.com/erasmus/erasmus-001.jpg",
  		lifespan: {
    		birth: 1466,
    		death: 1536
  		}
	}
];

//*******************************************************
//BUILD OUT CARDS BASED ON ARRAY
//*******************************************************

container.innerHTML = '';

for (var x = 0; x < famousPeople.length; x++) {
	var newContainer = '';
	
	newContainer += `<div id="card-${x}" class="personCard"><img src="${famousPeople[x].image}">`;
	newContainer += `<h2>${famousPeople[x].name}</h2>`;
	newContainer += `<h3>${famousPeople[x].title}</h3>`;
	newContainer += `<section id="quote">Famous Quote:${famousPeople[x].quote}</section>`;
	newContainer += `<footer>Birth: ${famousPeople[x].lifespan.birth}<br> Death: ${famousPeople[x].lifespan.death}</footer>`;
	newContainer += `</div>`;
	
	container.innerHTML += newContainer;
};

var personCard = document.getElementsByClassName("personCard");

//*******************************************************
//ADD EVENT LISTENER TO BUILT CARDS
//*******************************************************

for (var y = 0; y < personCard.length; y++) {
	personCard[y].addEventListener("click", function(e){
		for (var z = 0; z < personCard.length; z++){
		container.childNodes[z].classList.remove("selected");
		}
		if (e.target.classList.value === "personCard") {
			e.target.classList.add("selected");
			userInput.focus();
		} else if (e.target.parentElement.classList.value === "personCard"){
			e.target.parentElement.classList.add("selected");
			userInput.focus();
		}
	});
};

//*******************************************************
//ADD EVENT LISTENER TO BUILD FUNCTIONALITY BETWEEN INPUT/QUOTE BOX
//*******************************************************

window.addEventListener("click", function(e){
	var selectedElement = document.getElementsByClassName("selected");
	var quoteText = selectedElement[0].childNodes[3].innerText;
	userInput.placeholder = quoteText;
	userInput.addEventListener("keyup", function(e){
		selectedElement[0].childNodes[3].innerText = userInput.value;
		if (e.keyCode === 13){
			selectedElement[0].childNodes[3].innerText = '';
			userInput.placeholder = '';
			userInput.value = '';
		}
	});
});
































