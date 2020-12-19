import React, {useState, useEffect}  from "react";
import MessageApi from '../../api/MessageApi';


// Components
import Message from './Message'

//To show incoming messages
function Inbox({user}) {

    const [ messages, setMessages ] = useState([]);

    function getAllMessages(userId) {
        MessageApi.getAllMessagesByRecipientId(userId)
            .then((res) => {
                setMessages(res.data);
            })
    }

    useEffect(() => {
        getAllMessages(user.id);
        const chatTimer = setInterval(() => {
            console.log("get all messages")
            getAllMessages(user.id);
        }, 2000);

        return () => {
            clearInterval(chatTimer)
        }
    
    }, [])

    const deleteMessage = (messageId) => {
        MessageApi.deleteMessage(messageId)
        .then(() => {
            getAllMessages(user.id);
        })
    }

    return (
        <>          
                { messages.length === 0 ? "No messages" :
                    messages.map((msg) => 
                        <Message key={msg.id} message={msg} 
                            deleteMessage={deleteMessage} inbox={true}
                            getAllAgain={getAllMessages} user={user}
                        />
                    )
                }
        </>
    );
}

export default Inbox;