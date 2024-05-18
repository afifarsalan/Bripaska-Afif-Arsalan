

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["W","WE","WEL","WELC","WELCO","WELCOM","WELCOME","WELCOME TO BRIPASKA Gen-LII"];
const typingDelay = 160;
const erasingDelay = 50;
const newTextDelay = 180; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

let slideIndex = 0;
        showSlides();
    
        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].style.display = "block";  
            setTimeout(showSlides, 4000); // Ubah gambaar setiap 4 detik
        }
    
        document.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const offset = header.offsetHeight;
            const scrollTop = window.pageYOffset;
            if (scrollTop > offset) {
                document.body.classList.add('blurred');
            } else {
                document.body.classList.remove('blurred');
            }
        });

document.getElementById('part1').addEventListener('click', function() {
    var taskbar = document.getElementById('taskbar');
    if (taskbar.style.display === "none") {
        taskbar.style.display = "block";
    } else {
        taskbar.style.display = "none";
    }
});

window.onscroll = function() {
  var el = document.querySelector('.aaaad');
  var rect = el.getBoundingClientRect();
  var isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
  if (isInViewport) {
      el.style.animation = 'fadeIn 6s forwards';
  } else {
      el.style.animation = 'fadeOut 6s forwards';
  }
};

