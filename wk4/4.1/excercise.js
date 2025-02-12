//select enpty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv")
;

//put an h1 inside of it
//create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'When one llama is angry at another llama, they will stick their tongues out to express their dislike';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

function handleHeadingClick() {
console.log('Heading has been clicked');
document.body.style.backgroundColor = 'yellow';
}