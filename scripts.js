const tagline = document.querySelector('#tagline');
const hiddenElements = document.querySelectorAll('.hidden');

let i = 0;
let taglineTxt = 'Full-Stack-Developer';
const speed = 60;

const typeWriter = () => {
    taglineTxt = 'Full-Stack-Developer';
    if (i < taglineTxt.length) {
        tagline.innerText += taglineTxt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

const resetTypeWriter = () => {
    tagline.innerText = '';
    i = 0;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.id == 'tagline') {
                setTimeout(typeWriter, 2000);
            }
        } else {
            entry.target.classList.remove('show');
            if (entry.target.id == 'tagline') { 
                resetTypeWriter();
            }
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));
