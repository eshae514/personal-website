const dynamicText = document.querySelector("h1 span")
const words = ["Student", "Problem Solver", "Software Developer"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 200);
    }
    else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 100);
    }
    else{
        if (!isDeleting && charIndex === currentWord.length && wordIndex === words.length - 1) {
            // Stop the loop after the last word has been fully typed
            return;
        }
        
        if (isDeleting) {
            wordIndex++;
            if (wordIndex >= words.length) {
                // Stop the loop after the last word has been fully typed and deleted
                dynamicText.textContent = "Software Developer";
                return;
            }
        }
        isDeleting = !isDeleting;
        charIndex = isDeleting ? currentWord.length : 1;
        setTimeout(typeEffect, 1200);
    }

}

typeEffect();