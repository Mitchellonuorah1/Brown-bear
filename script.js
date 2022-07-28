let body = document.querySelector('body');
let about = document.getElementById('about');
let contact = document.getElementById('contact');
let contactme = document.getElementById('contactme');
let aboutme = document.getElementById('aboutme');
let img = document.querySelector('img');
let btn = document.querySelector('button');
about.addEventListener('click' , () => {
      contactme.style.display = 'none';
      aboutme.style.display = 'block';

      about.style.color = 'brown';
      contact.style.color = 'white';
});

contact.addEventListener('click' , () => {
      contactme.style.display = 'block';
      aboutme.style.display = 'none';

      contact.style.color = 'brown';
      about.style.color = 'white';
});

function message() {
      setTimeout( text , 2000 );
}
function text() {
      alert("yo!! it's Brown Bear");
}

img.addEventListener('click' , () => {
      img.removeAttribute('class' , 'vic1' );
      img.setAttribute('class' , 'updatevic' );
      btn.style.display = 'block';

      
});

btn.addEventListener('click' , () => {
      img.removeAttribute('class' , 'updatevic' );
      img.setAttribute('class' , 'vic1' );
      btn.style.display = '';
})