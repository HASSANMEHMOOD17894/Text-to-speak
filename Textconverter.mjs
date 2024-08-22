

function convertToSpeech(){
    const textinput = document.querySelector("#text");
const btn = document.querySelector("#btn");

    const msg = new SpeechSynthesisUtterance;
     msg.text = textinput.value;
    msg.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(msg);
}
btn.addEventListener('click', convertToSpeech);