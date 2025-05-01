

const resultElement = document.getElementById("result");
let recognition;

function startConverting(){

    if('webkitSpeechRecognition' in window){
       recognition = new webkitSpeechRecognition();
       
       setupRecognition(recognition);

       recognition.start();
    }
}


function setupRecognition(recognition){
    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.lang = "en-Us"; 

    recognition.onresult = function(event){

        //ProcessResult()

        processResult(event.results);

    }


}


function processResult(results){

    let finalTranscript = "";
    let interTranscript = "";

    for(let i = 0; i < results.length; i++){

        let transcript = results[1][0].transcript;
        transcript.replace("\n","<br>");

        

    }


}



function stopConverting(){
    
}