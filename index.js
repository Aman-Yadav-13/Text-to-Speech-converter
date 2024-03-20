var textarea = document.getElementById('converter');

document.getElementById('btn').addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(textarea.value);
    utterance.voice = window.speechSynthesis.getVoices()[164];
    speechSynthesis.speak(utterance);
});