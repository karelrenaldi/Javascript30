const keys = document.querySelectorAll(".key");
const run = currentKey => {
    const keyAudio = document.querySelector(`audio[data-key = "${currentKey}"]`);
    const keyAnimation = document.querySelector(`div[data-key= "${currentKey}"]`)
    keyAnimation.classList.add("animation");
    keyAnimation.addEventListener('transitionend', () => {
        keyAnimation.classList.remove("animation");
    },{once : true});
    keyAudio.currentTime = 0; // Rewind audio
    keyAudio.play();
};
// When user use keyboard
window.addEventListener("keyup",(e)=>{
    const currentKey = e.keyCode;
    if(!document.querySelector(`audio[data-key = "${e.keyCode}"]`)) return
    run(currentKey);
});