// Get the modal elements
const modalContent = document.getElementById('modal-content');
const modalOverlay = document.getElementById('modal-overlay');
const openModalButton = document.getElementById('open-modal-tel');

// Function to open the modal
function openModal() {
  modalOverlay.classList.remove('hidden');
  modalOverlay.classList.add('opacity-100');
  modalContent.classList.remove('hidden', 'opacity-0', 'scale-90');
  modalContent.classList.add('opacity-100', 'scale-100');
  document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeModal() {
  modalContent.classList.remove('opacity-100', 'scale-100');
  modalContent.classList.add('opacity-0', 'scale-90');
  modalOverlay.classList.remove('opacity-100');
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

// Event listener for opening the modal
openModalButton.addEventListener('click', openModal);

modalOverlay.addEventListener('click', closeModal);

modalContent.addEventListener('click', (event) => {
  event.stopPropagation();
});


function doFormat(value, pattern, mask) {
  const strippedValue = value.replace(/[^0-9]/g, "");

  const chars = strippedValue.split('');


  let count = 0;
  let formatted = '';

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (chars[count]) {
      if (/\*/.test(char)) {
        formatted += chars[count];
        count++;
      } else {
        formatted += char;
      }
    }
    else if (mask) {
      const splittedMask = mask.split('');

      if (splittedMask[i]) {
        formatted += splittedMask[i];
      }
    }
  }


  return formatted;
}


document.querySelectorAll('[data-mask]').forEach(function (e) {


  function format(elem) {
    const val = doFormat(elem.value, elem.getAttribute('data-format'));
    elem.value = doFormat(elem.value, elem.getAttribute('data-format'), elem.getAttribute('data-mask'));

    if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.move('character', val.length);
      range.select();
    } else if (elem.selectionStart) {
      elem.focus();
      elem.setSelectionRange(val.length, val.length);
    }
  }

  e.addEventListener('keyup', function () {
    format(e);
  });

  e.addEventListener('keydown', function () {
    format(e);
  });

  format(e)
});