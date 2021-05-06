particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('#typewriter', {
    loop: true
});

instance.typeString("")
    .pauseFor(5000)
    .deleteAll()
    .typeString('Text 1')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('ext 2')
    .pauseFor(1000)
    .deleteChars(4)
    .typeString('xt 3')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Text 4')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Text 5')
    .pauseFor(1000)
    .deleteAll()
   
    .start();