

function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// PURE FUNCTION 

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
    return Math.floor(randomNumber * (max - min) + min);
}

async function draw(el) {
    const text = el.textContent;
    let soFar = '';
    for (const letter of text) {
        soFar += letter;
        el.textContent = soFar;
        const { typeMin, typeMax } = el.dataset; 
        const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
        await wait(amountOfTimeToWait);
    }

// recursion

// function draw(el) {
//     let index = 1;
//     const text = el.textContent;
//     const { typeMin, typeMax } = el.dataset;
//     async function drawLetter() {
//         el.textContent = text.slice(0, index)
//     }
//     }
}

document.querySelectorAll('[data-type]').forEach(draw);