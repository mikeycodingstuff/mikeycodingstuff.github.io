const tagline = document.querySelector('#tagline');
let i = 0;
const taglineTxt = 'Full-Stack-Developer';
const speed = 70;

const typeWriter = () => {

    if (i < taglineTxt.length) {
        tagline.innerText += taglineTxt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();