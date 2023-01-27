function randomColor() {
    const red = document.querySelector('#red');
    const randomHex = '#' + Math.random().toString(16).substr(-6);
    red.setAttribute('material', 'color', randomHex);
}

// After </a-scene>, you need to wait for the scene to finish initialising and attaching the 
const scene = document.querySelector('a-scene');
if (scene.hasLoaded) {
    randomColor();
} else {
    scene.addEventListener('loaded', randomColor);
}


// The above is though not a correct way to do it