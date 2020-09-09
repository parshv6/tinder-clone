import React,{useState} from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./chatScreen.css";




function ChatScreen() {
  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([
      {
          name: 'Bill',
          image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3MzIyODc5MjE1Mjk1/billgates2012.jpg",
          message: 'whats up'
      },
      {
        name: 'Bill',
        image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3MzIyODc5MjE1Mjk1/billgates2012.jpg",
        message: 'Hows it going'   
      },
      {
        
        message: 'whats up'
      },
  ]);

   const handleSend = e =>{
     e.preventDefault();

     setMessages([...messages, {message:input}]);

     setInput('');
   }


    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">
             You matched with ELEN on 10/08/20
            </p>

            {messages.map(message => (
              message.name ?(
                <div className="chatScreen__message">
                <Avatar
                 className="chatScreen__image"
                 alt={message.name}
                 src={message.image}
                />
                 <p className="chatScreen__text">{message.message}</p>
                </div>
              ): (
                <div className="chatScreen__message">
                 <p className="chatScreen__textUser">{message.message}</p>
                </div>
              )
              
            ))}

         
          <form className="chatScreen__input">
           <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message.."
            type="text"/>
           <button  onClick={handleSend}  type="submit" className="chatScreen__inputButton">SEND</button>
          </form>
            
        </div>
    )
}

export default ChatScreen
