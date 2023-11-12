let speech = new SpeechSynthesisUtterance();



let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) =>
    (voiceSelect.options[i]=new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () =>{
    speech.voice=voices[voiceSelect.value];
})

let playBtn=document.querySelector("#play-btn");
let remixIcon=document.querySelector(".remix-icon")
let bool=1;

document.querySelector("button").addEventListener("click", () => {
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


