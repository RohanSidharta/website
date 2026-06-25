import { useState,useRef,useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import './App.css'
import { ChatMessage } from './components/ChatMessage';





function ChatMessages({chatMessages}) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  },[chatMessages]);


  return (
    <>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage                         //the above component is beign called here for printig and also the attributes are gettign values from the above chatMessages array
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </>
  );
}


function App() {

  const [chatMessages,setChatMessages] = useState([
    {
      //now this create a array of objects containis message and sender data
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "helli! how can i help u",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can u get me todays date",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is sept 27",
      sender: "robot",
      id: "id4",
    }
  ]);
  //const [chatMessages,setChatMessages] = array;       //destructured for of assigning 1st and second values of usestate to methods 
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <>
     
      <ChatMessages 
      chatMessages = {chatMessages}/> 

       <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />               
    </>
    
  );
}

export default App
