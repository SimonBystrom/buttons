const ripplebtn = document.querySelector('.btn-yours');

ripplebtn.addEventListener('click', (e) => {
    let ripples = document.createElement('span');

    const xPos = e.clientX - e.target.offsetLeft;
    const yPos = e.clientY - e.target.offsetTop;

    ripples.style.left = xPos + 'px';
    ripples.style.top = yPos + 'px';

    ripplebtn.appendChild(ripples);

    setTimout(() => {
      ripples.remove()
    },1500)
})
