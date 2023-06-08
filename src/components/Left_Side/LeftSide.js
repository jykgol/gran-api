import React from "react";
import Chat from "./Chats/Chat";


function LeftSide(props) {
    let inputOnChangeFun = (e) => {
        let newText = e.target.value;
        props.Left_menu_input_OnChange(newText);
    }
    let addChat = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            if (e.target.value.length !== 11 || isNaN(e.target.value) || e.target.value[0]==="+" || e.target.value[0]==="-") {
                props.LM_input_Error();
            } else {
                props.Left_menu_input_OnAdding();
            }
        }

    }
    let chats_restore = props.Left_Side_State.LM_chats.map(el => <Chat Left_menu_SetActiveChat={props.Left_menu_SetActiveChat} key={el.id} id={el.id} number={el.number} name={el.name} linkTo={el.linkTo} />)
    return (
        <div>

            <div className="App_left_side_input">
                <textarea wrap="off" value={props.Left_Side_State.LM_input_Data} onChange={inputOnChangeFun} placeholder="Введите номер телефона" onKeyDown={addChat} />
                <div className={props.Left_Side_State.LM_input_Error ? "App_left_side_input_Error App_left_side_input_Error_active" : "App_left_side_input_Error"}>
                    Чтобы добавить чат, введите номер в формате "79123456789"
                </div>
            </div>
            <div className="App_left_side_chats">
                {chats_restore}
            </div>
        </div>
    );
}

export default LeftSide;