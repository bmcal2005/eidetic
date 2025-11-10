const form = document.getElementById('signup');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

function validEmail(e){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

form.addEventListener('submit', (ev)=>{
  ev.preventDefault();
  const val = email.value.trim();
  if(!validEmail(val)){
    msg.style.color = 'crimson';
    msg.textContent = 'Please enter a valid email.';
    email.focus();
    return;
  }

  // Fake submission: disable UI, show success message
  msg.style.color = 'green';
  msg.textContent = 'Thanks — you\'re on the waitlist!';
  form.querySelector('button').disabled = true;
  form.querySelector('button').textContent = 'joined';

  // In a real site you'd send `val` to your backend or to a service here.
  setTimeout(()=>{
    // keep form disabled but clear input for a nicer UX
    email.value = '';
  }, 800);
});

// Modal logic for 'thoughts' popup
const thoughtsBtn = document.getElementById('thoughtsBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTextarea = document.getElementById('modalTextarea');

function openModal() {
  modalOverlay.style.display = 'flex';
  modalTextarea.focus();
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalOverlay.style.display = 'none';
  document.body.style.overflow = '';
}
thoughtsBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', function(e) {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', function(e) {
  if (modalOverlay.style.display === 'flex' && e.key === 'Escape') closeModal();
});
