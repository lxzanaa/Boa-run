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

const OrderModal = document.querySelector('#order-modal');
const OrderModalOverlay = document.querySelector('#order-overlay');
const OrderOpenModalButtons = document.querySelectorAll('[id^="order-button"]');

function OrderOpenModal() {
    OrderModalOverlay.classList.remove('hidden');
    OrderModalOverlay.classList.add('opacity-100');
    OrderModal.classList.remove('hidden', 'opacity-0', 'scale-90');
    OrderModal.classList.add('opacity-100', 'scale-100');
    document.body.style.overflow = 'hidden';
}

function OrderCloseModal() {
    OrderModal.classList.remove('opacity-100', 'scale-100');
    OrderModal.classList.add('opacity-0', 'scale-90' , 'hidden');
    OrderModalOverlay.classList.remove('opacity-100');
    OrderModalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

OrderOpenModalButtons.forEach(function (button) {
    button.addEventListener('click', OrderOpenModal);
});

OrderModalOverlay.addEventListener('click', OrderCloseModal);

OrderModal.addEventListener('click', (event) => {
    event.stopPropagation();
});