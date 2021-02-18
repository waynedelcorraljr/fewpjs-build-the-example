// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector('#modal');
errorModal.classList.add('hidden');
let hearts = document.querySelectorAll('.like-glyph');
for (const heart of hearts) {
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      if (heart.innerHTML != FULL_HEART) {
        heart.innerHTML = FULL_HEART;
        heart.classList.add('activated-heart');
      } else {
        heart.innerHTML = EMPTY_HEART;
        heart.classList.remove;
      }
    })
    .catch(error => {
      errorModal.classList.remove('hidden');
      window.setTimeout(() => {errorModal.classList.add('hidden')}, 2500);
      errorModal.innerHTML = error;
      console.log(error);
    });
  }
  )}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
