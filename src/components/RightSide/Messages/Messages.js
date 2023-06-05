import React from "react";
import Message from "./Message/Message";


function Messages(props) {
    let MessagesDataRestore = props.Messages.map(el => <Message key={el.id} text={el.text} name={el.name} />)

    return (

        <div className="MP_messages" >
            {MessagesDataRestore}
        </div>
    );
}

export default Messages;