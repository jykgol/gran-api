import React from "react";
import axios from "axios";


function Auth(props) {
    let ta1_onchange = (e) => {
        let newText = e.target.value;
        props.auth_idInstanceInputOnChange(newText);
    }
    let ta2_onchange = (e) => {
        let newText = e.target.value;
        props.auth_auth_apiTokenInstanceInputOnChange(newText);
    }
    let check_auth = () => {
        axios.get("https://api.green-api.com/waInstance" + props.Left_Side_State.auth.auth_idInstanceInput + "/getStateInstance/" + props.Left_Side_State.auth.auth_apiTokenInstanceInput,)
        .then(
            Response => {
                if (Response.data.stateInstance === "authorized"){
                    props.CloseAuth();
                }
                else{
                    console.log(Response.data);
                }

            })
            .catch((error) => {

                console.log(error);
            });

    }
    return (
        <div className={props.Left_Side_State.auth.active ? "auth_window auth_window_active" : "auth_window"}>
            <div className={props.Left_Side_State.auth.active ? "auth auth_active" : "auth "} >
                <div> id Instance </div>
                <input type="text" onChange={ta1_onchange} value={props.Left_Side_State.auth.auth_idInstanceInput} />
                <div> api Token Instance </div>
                <input type="text" onChange={ta2_onchange} value={props.Left_Side_State.auth.auth_apiTokenInstanceInput} />
                <button onClick={check_auth}>check</button>
            </div>
        </div>
    );
}

export default Auth;