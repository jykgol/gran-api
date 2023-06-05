import React from "react";


function Message(props) {

    return (

        <div className={props.name === "" ? "MP_message message_sended" : "MP_message message_recieved"}>
            <div className="message_name">
                {props.name}
            </div>
            {props.text}
        </div>

    );
}

export default Message;