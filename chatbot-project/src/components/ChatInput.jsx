import { useState } from 'react'

export function ChatInput({chatMessages,setChatMessages}) {

  const [inputText,setInputText] = useState('');              //'' empty quotes are used because in starting the search bar is empty so that the corrent state


    function saveInputText(event){
    setInputText(event.target.value);
  }

  function sendMessage(){

    const newChatMessages = [
    ...chatMessages,
    {
      message:inputText,
      sender:'user',
      id:crypto.randomUUID() 
    }
    ];
      
      setChatMessages(newChatMessages);

     const response = Chatbot.getResponse(inputText);


     setChatMessages([
    ...newChatMessages,
    {
      message:response,
      sender:'robot',
      id:crypto.randomUUID() 
    }
    ]);

    setInputText('');
  }

  return (
    <>
      <input placeholder="send a message to chatbot"  onChange={saveInputText} value={inputText}/>
      <button
      onClick={sendMessage}
      >send</button>
    </>
  );
}

