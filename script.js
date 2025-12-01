//calling elements

const video = document.querySelector('video');
const gridModalidades = document.querySelector('.grid-modalidades');
const cardModalidades = document.querySelectorAll('.card-modalidade')
const heroTitle = document.querySelector('h1 span');
const cardSkills = document.querySelectorAll('.container-skill');
const cardCompetitors = document.querySelectorAll('.card-competitors');

// creating observers
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        video.play();
    } else {
        video.pause();
    }
}, {
    threshold: .5
});

const observerGrid = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        cardModalidades.forEach((card, index) => {
            card.style.transitionDelay = (index * .15) + 's';
            card.style.transitionDuration = .8 + 's';
            card.classList.add('show');
        })
    }
}, {
    threshold: .4
});

// observing elements
observer.observe(video);
observerGrid.observe(gridModalidades);

const words = [
    'excelência',
    'Orgulho',
    'Integridade',
    'Honestidade',
]
let wordsIndex = 0;

setInterval(() => {
    heroTitle.classList.remove('transparent');
    wordsIndex = (wordsIndex + 1) % words.length;
    heroTitle.innerHTML = words[wordsIndex];
    setTimeout(() => {
        heroTitle.classList.add('transparent');
    }, 1000)
}, 2000);

cardSkills.forEach((card, index) => {
    card.addEventListener('click', () => {
        cardSkills.forEach((cardInside, index) => {
            cardInside.classList.remove('active');
        })
        cardCompetitors.forEach((cardInside, index) => {
            cardInside.classList.add('d-none');
        })
        card.classList.add('active');
        cardCompetitors[index].classList.remove('d-none');
    })
})
