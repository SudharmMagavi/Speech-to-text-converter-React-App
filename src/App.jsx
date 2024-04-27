import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';
const App = () => {
 const [message, setMessage] = useState('');

 const commands = [
   {
     command: 'reset',
     callback: () => resetTranscript()
   }
 ]
 const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition({ commands });

 const copyToClipboard = () => {
  navigator.clipboard.writeText(transcript)
}

 useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
 }, [interimTranscript, finalTranscript]);
 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   return null;
 }

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   console.log('Your browser does not support speech recognition software! Try supported browsers');
 }
 const listenContinuously = () => {
   SpeechRecognition.startListening({
     continuous: true,
     language: 'en-GB',
   });
 };
 return (
  <>

   <div className='main-container'>
  
  
     <div className='inner-div'>
    
  <h1 className='title'>Speech to text converter</h1>
       <span>
         listening:
         {' '}
         {listening ? 'on' : 'off'}
       </span>
       <div className='btn-div'>
       <button  className="button-57" role="button" onClick={listenContinuously} >Listen
       <span>Listen</span></button>
       
         <button className="button-57" role="button" onClick={resetTranscript}>Reset <span>Reset</span></button>
         
         <button  className="button-57" role="button" onClick={SpeechRecognition.stopListening}>Stop <span>Stop</span></button>
         <button className="button-57" role="button" onClick={copyToClipboard}>Copy to clipboard <span>Copy to clipboard</span></button>
       </div>
       <div className='transcript'>
<span>{transcript}</span>
</div>
     </div>
     <div>
       {message}
     </div>
     

   </div>


</>
 );
};

export default App;