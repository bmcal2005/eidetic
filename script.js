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
