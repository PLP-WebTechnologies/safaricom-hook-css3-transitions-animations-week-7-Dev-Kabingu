// javascript functions

function calculateArea(width, height){
    return width * height;
}
const width = 5;
const height = 10;
const area = calculateArea(width, height);
console.log("Area", area);

// function 2
function sphereVolume(pi, radius){
    return (4/3)* pi *radius *radius *radius;
};
const pi = 3.142;
const radius = 14;
const volume = sphereVolume(pi, radius);
console.log("volume of Sphere" + volume);

// Function to toggle the visibility of an element
// Utilizes CSS classes to show/hide elements
const learnMoreLink = document.getElementById("link-learn-more");
const learnMoreText = document.getElementById("read-more-text");
const showLess =document.getElementById("read-more-text");

learnMoreLink.addEventListener("click", function(){
    learnMoreText.style.display = 'block';
    learnMoreLink.style.display= 'none';
});

showLess.addEventListener("click", function() {
    learnMoreText.style.display = 'none';
})

// Function to trigger animation
function triggerAnimation(element, animationClass) {
    element.classList.remove(animationClass);
    void element.offsetWidth; 
    element.classList.add(animationClass); 
}
const animateButton = document.getElementById('animateButton');
const animatableElement = document.getElementById('animatableElement');

animateButton.addEventListener('click', function() {
    triggerAnimation(animatableElement, 'animate');
     
});


// scope demonstration
let globalVar = 'I am global';

function showScope() {
    let localVar = 'I am local';
    console.log(globalVar); 
    console.log(localVar); 
}

showScope();
console.log(globalVar); 

