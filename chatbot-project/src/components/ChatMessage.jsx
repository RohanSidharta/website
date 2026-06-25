import robotimage from '../assets/robot.png'
import userimage from '../assets/user.png'


export function ChatMessage({ message, sender }) {          //tgis is the component which is beeing shown in the browser
  // const message=props.message;
  // const sender = props.sender;

  /*if(sender === 'robot'){
return(
<div>
  <img src="robot.png" width="50px"/>
    {message}
</div>
);
}
*/
  return (
    <div>
      {sender === "robot" && <img src={robotimage} width="50px" />}
      <div>
       {message}
      </div>
      {sender === "user" && <img src={userimage} width="50px" />}
    </div>
  );
}
