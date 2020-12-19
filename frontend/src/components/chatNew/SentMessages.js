import React, {useState, useEffect} from "react";
import MessageApi from '../../api/MessageApi';

// Components
import Message from './Message'


function SentMessages({user}) {

    const [ messages, setMessages ] = useState([]);

    function getAllMessages() {
        MessageApi.getAllMessagesBySenderId(user.id)
            .then((res) => {
                setMessages(res.data);
            })
    }

    useEffect(() => {
        getAllMessages();
    }, [])


    const deleteMessage = (messageId) => {
        MessageApi.deleteMessage(messageId)
        .then(() => {
            getAllMessages(user.id);
        })
    }

    return (
        <div className="container col-sm-12 col-md-10 col-lg-8">
                { messages.length === 0 ? "No messages" :
                    messages.map((msg) => 
                        <Message key={msg.id} message={msg} 
                            deleteMessage={deleteMessage} 
                            getAllAgain={getAllMessages}
                        />
                    )
                }
        </div>
    );
}

export default SentMessages;