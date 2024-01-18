

function start(){
    let recognition=new webkitSpeechRecognition() || new SpeechRecognition();

    recognition.lang = 'en-GB';

    recognition.onresult=function(event){
        document.getElementById('text').value= 
        event.results[0][0].transcript;
    }


    recognition.start();
}