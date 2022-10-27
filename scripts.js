const tagline = document.querySelector('#tagline');
const animatedElements = document.querySelectorAll('.animate');

let i = 0;
let taglineTxt = 'Full-Stack-Developer';
const speed = 70;

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
                typeWriter();
            }
        } else {
            entry.target.classList.add('show');
            if (entry.target.id == 'tagline') { 
                resetTypeWriter();
            }
        }
    });
});

animatedElements.forEach((el) => observer.observe(el));
