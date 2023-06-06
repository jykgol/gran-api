import React from "react";
import Messages from "./Messages/Messages";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import refreshImage from "../../assets/refresh.png"

function MessagesPage(props) {
    let inputOnChangeFun = (e) => {
        let newText = e.target.value;
        props.Message_Input_OnChange(newText);
    }
    let addMessage = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            
            axios.post("https://api.green-api.com/waInstance" + props.Left_Side_State.idInstance + "/sendMessage/" + props.Left_Side_State.apiTokenInstance, {
                "chatId": props.Left_Side_State.LM_chats[props.Left_Side_State.LM_Active_Chat].number + "@c.us",
                "message": props.Left_Side_State.Message_Input,
            }).then(
                Response => {
                    
                    props.Message_Input_OnAdding();

                })
                .catch((error) => {
                    
                    console.log(error);
                });
        }
    }
    let refreshMessages = () => {
        axios.get("https://api.green-api.com/waInstance" + props.Left_Side_State.idInstance + "/receiveNotification/" + props.Left_Side_State.apiTokenInstance).then(
            Response => {

                if (Response.data.body.typeWebhook === "incomingMessageReceived") {
                    props.MessageRecive(Response.data);

                } else {
                    console.log(Response.data)

                }
                axios.delete("https://api.green-api.com/waInstance" + props.Left_Side_State.idInstance + "/deleteNotification/" + props.Left_Side_State.apiTokenInstance + "/" + Response.data.receiptId).then(
                    Response => {
                        if (Response.data.result == true)
                            console.log("Notification Deleted")
                        else
                            console.log("Error")
                        console.log(Response.data)
                    }
                )

            })
            .catch((error) => {
                console.log(error);
            });

    }
    let MessagesRouteRestore = props.Left_Side_State.MessagesData.map(el => <Route key={el.id} path={el.path} element={<Messages key={el.id} Messages={el.Messages} />} />)

    return (
        <div className="MessagesPage">
            <div className="App_left_side_input messages_input">
                <textarea wrap="off" value={props.Left_Side_State.Message_Input} onChange={inputOnChangeFun} placeholder="Ввод сообщения" onKeyDown={addMessage} />
            </div>
            <Routes>
                {MessagesRouteRestore}
            </Routes>

            <button onClick={refreshMessages} className="recive_button"><img alt="" src={refreshImage} /></button>

        </div>
    );
}

export default MessagesPage;