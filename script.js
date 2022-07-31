// ==================================== animacija texta

let btn = document.querySelector('.section1 button');
btn.addEventListener("click", () => {
        
    // izdvajamo text koji treba animirati
    let textTag = document.querySelector('.section1 h1');
    let text = textTag.innerText;

    // delimo taj text u slova
    let splittedText = text.split('');

    // ispraznimo stari textTag da bismo mogli da ga napunimo span slovima
    textTag.innerHTML = '';

    // postavljamo span na svako slovo texta
    // ako je slovo " " (razmak) onda ga oznacavamo tkd ga ga program prepozna
    // posto smo ispraznili textTag sada nadodajemo span slova na njega
    for(let i = 0; i < splittedText.length; i++) {
        if(splittedText[i] === " ") {
            splittedText[i] = "&nbsp";
        }
        textTag.innerHTML += `<span>${splittedText[i]}</span>`;
    }

    // uzimamo SVE spanove iz novonastalog textTag-a
    let spans = textTag.querySelectorAll('span');
    let k = 0;
    // postavljamo interval koji ce da se izvrsava na svakih 70 milisekundi
    // tu izdvajamo svaki span i dodeljujemo mu klasu cije su osobine odredjene u css
    // kada se ispisu sva slova interval se prekida
    let interval = setInterval(() => {
        let singleSpan = spans[k];
        singleSpan.className = 'fadeMove';
        k++;

        if(k === spans.length) {
            clearInterval(interval);
        }
    }, 70);
})



// ================================== linija
let border = document.querySelector('.section2 .border-line');
let animationWidth = 50;

let leftBtn = document.querySelector('.section2 .left1 button');
let rightBtn = document.querySelector('.section2 .right1 button');

leftBtn.addEventListener("click", () => {
    animationWidth -= 5;

    if(animationWidth <= 0) {
        animationWidth = 0;
    }

    border.style.width = animationWidth + '%';
})

rightBtn.addEventListener("click", () => {
    animationWidth += 5;

    if(animationWidth >= 100) {
        animationWidth = 100;
    }

    border.style.width = animationWidth + '%';
})


// ============================================= slike
let bmw = document.querySelector('.section2 .left2 button');
let audi = document.querySelector('.section2 .right2 button');
let oba = document.querySelector('.section3 .container .center button');

let bmwImg = document.querySelector('.slideFromLeft');
let audiImg = document.querySelector('.slideFromRight');

bmw.addEventListener("click", () => {
    bmwImg.classList.add('animated');
})

audi.addEventListener("click", () => {
    audiImg.classList.add('animated');
})

oba.addEventListener("click", () => {
    if((bmwImg.classList.contains('animated')) && (audiImg.classList.contains('animated'))) {
        bmwImg.classList.remove('animated');
        audiImg.classList.remove('animated');
    } else {
        bmwImg.classList.add('animated');
        audiImg.classList.add('animated');
    }
})