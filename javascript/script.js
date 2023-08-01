//menu

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}





// Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });




// Interactive Testimonials
  const testimonials = document.querySelectorAll('.review .box');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      if (i === index) {
        testimonial.style.display = 'block';
      } else {
        testimonial.style.display = 'none';
      }
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

// Display the first testimonial initially
  showTestimonial(currentIndex);

// Auto-rotate testimonials every 4 seconds
  setInterval(nextTestimonial, 4000);






// Contact Form Validation
const contactForm = document.querySelector('.contact form');
const submitButton = document.querySelector('.contact form button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const inputBoxes = contactForm.querySelectorAll('.inputBox input, .inputBox textarea');

  let valid = true;

  inputBoxes.forEach((input) => {
    if (!input.value.trim()) {
      valid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  
  
    if (valid) {
      contactForm.submit();
    }
  });


  
