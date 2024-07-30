const questionAnswer = document.querySelector('#question-answer-modal');
const questionAnswerOverlay = document.querySelector('#question-answer-overlay');
const openModalButtons = document.querySelectorAll('[id^="question-answer-button"]');

function openModalQues() {
    questionAnswerOverlay.classList.remove('hidden');
    questionAnswerOverlay.classList.add('opacity-100');
    questionAnswer.classList.remove('hidden', 'opacity-0', 'scale-90');
    questionAnswer.classList.add('opacity-100', 'scale-100');
    document.body.style.overflow = 'hidden';
}

function closeModalQues() {
    questionAnswer.classList.remove('opacity-100', 'scale-100');
    questionAnswer.classList.add('opacity-0', 'scale-90' , 'hidden');
    questionAnswerOverlay.classList.remove('opacity-100');
    questionAnswerOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

openModalButtons.forEach(function (button) {
    button.addEventListener('click', openModalQues);
});

questionAnswerOverlay.addEventListener('click', closeModalQues);

questionAnswer.addEventListener('click', (event) => {
    event.stopPropagation();
});