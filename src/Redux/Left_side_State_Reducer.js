const Left_menu_input_OnChangeCase = "Left_menu_input_OnChangeCase";
const Message_Input_OnChangeCase = "Message_Input_OnChangeCase";
const Left_menu_input_OnAddingCase = "Left_menu_input_OnAddingCase";
const Message_Input_OnAddingCase = "Message_Input_OnAddingCase";
const Left_menu_SetActiveChatCase = "Left_menu_SetActiveChatCase";
const MessageReciveCase = "MessageReciveCase";
const SetAuthDataCase = "SetAuthDataCase";
const auth_idInstanceInputOnChangeCase = "auth_idInstanceInputOnChangeCase";
const auth_auth_apiTokenInstanceInputOnChangeCase = "auth_auth_apiTokenInstanceInputOnChangeCase";
const CloseAuthCase = "CloseAuthCase";
const LM_input_ErrorCase = "LM_input_ErrorCase";


let initialstate = {
    auth: {
        auth_idInstanceInput: "",
        auth_apiTokenInstanceInput: "",
        active: true,
    },
    idInstance: "1101827051",
    apiTokenInstance: "a6d51508e52f4248a4849254d3582a5a68db3d1685e241329a",
    LM_Active_Chat: "",
    LM_input_Data: "",
    LM_input_Error: false,
    LM_chats: [
        { id: 0, number: "79111520022", linkTo: "/0", name: "" },
        { id: 1, number: "79218619817", linkTo: "/1", name: "" },
        { id: 2, number: "79143339287", linkTo: "/2", name: "" },
    ],
    Message_Input: "",
    MessagesData: [{
        id: 0, path: "/0", Messages: []
    }, {
        id: 1, path: "/1", Messages: []
    }, {
        id: 2, path: "/2", Messages: []
    },
    ]
};

const Left_side_State_Reducer = (state = initialstate, action) => {
    switch (action.type) {

        case Left_menu_input_OnChangeCase: {
            let stateCopy = { ...state };
            stateCopy.LM_input_Data = action.newText;
            return stateCopy;
        }
        case Message_Input_OnChangeCase: {
            let stateCopy = { ...state };
            stateCopy.Message_Input = action.newText;
            return stateCopy;
        }
        case Left_menu_input_OnAddingCase: {
            let newChat = {
                id: state.LM_chats.length,
                number: state.LM_input_Data,
                linkTo: "/" + state.LM_chats.length,
                name: "",
            }
            let newMessagesData = {
                id: state.LM_chats.length,
                path: "/" + state.LM_chats.length,
                Messages: []
            }
            let stateCopy = { ...state, LM_input_Error: false, LM_input_Data: '', LM_chats: [...state.LM_chats, newChat], MessagesData: [...state.MessagesData, newMessagesData] };
            return stateCopy;
        }
        case Left_menu_SetActiveChatCase: {
            let stateCopy = { ...state };
            stateCopy.LM_Active_Chat = action.id;
            return stateCopy;
        }
        case Message_Input_OnAddingCase: {
            let active = state.LM_Active_Chat;
            if (active != null) {
                let newMessagesData = state.MessagesData.map(el => {
                    if (el.id == active) {
                        let newMessage = {
                            id: el.Messages.length,
                            text: state.Message_Input,
                            name: "",
                        }
                        let new_el = { ...el, Messages: [...el.Messages, newMessage] }
                        return new_el;
                    } else {
                        return el;
                    }

                })
                let stateCopy = { ...state, Message_Input: "", MessagesData: newMessagesData };
                return stateCopy;
            }
            else {
                return state;
            }

        }

        case MessageReciveCase: {
            let number = action.data.body.senderData.sender.replace("@c.us", "");
            let stateCopy;
            let search = state.LM_chats.find(el => el.number == number)

            if (search === undefined) {
                let newChat = {
                    id: state.LM_chats.length,
                    number: number,
                    linkTo: "/" + state.LM_chats.length,
                    name: action.data.body.senderData.chatName,
                }
                let newMessageData = {
                    id: state.LM_chats.length,
                    path: "/" + state.LM_chats.length,
                    Messages: [{
                        id: 0,
                        text: action.data.body.messageData.typeMessage === "textMessage" ? action.data.body.messageData.textMessageData.textMessage : action.data.body.messageData.extendedTextMessageData.text,
                        name: action.data.body.senderData.chatName,
                    }]
                }
                stateCopy = { ...state, MessagesData: [...state.MessagesData, newMessageData], LM_chats: [...state.LM_chats, newChat] };

            } else {
                let newMessagesData = state.MessagesData.map(el => {
                    if (el.id == search.id) {
                        let newMessage = {
                            id: el.Messages.length,
                            text: action.data.body.messageData.typeMessage === "textMessage" ? action.data.body.messageData.textMessageData.textMessage : action.data.body.messageData.extendedTextMessageData.text,
                            name: action.data.body.senderData.chatName,
                        }
                        let new_el = { ...el, Messages: [...el.Messages, newMessage] }
                        return new_el;
                    } else {
                        return el;
                    }
                })
                let newLM_chats = state.LM_chats.map(el => {
                    if (el.id == search.id) {

                        let new_el = { ...el, name: action.data.body.senderData.chatName }
                        return new_el;
                    } else {
                        return el;
                    }
                })
                stateCopy = { ...state, MessagesData: newMessagesData, LM_chats: newLM_chats };

            }

            return stateCopy;
        }

        case SetAuthDataCase: {

            return { ...state, ...action.data };
        }
        case auth_idInstanceInputOnChangeCase: {

            return { ...state, auth: { ...state.auth, auth_idInstanceInput: action.newText } };
        }
        case auth_auth_apiTokenInstanceInputOnChangeCase: {

            return { ...state, auth: { ...state.auth, auth_apiTokenInstanceInput: action.newText } };
        }
        case CloseAuthCase: {

            return {
                ...state, idInstance: state.auth.auth_idInstanceInput, apiTokenInstance: state.auth.auth_apiTokenInstanceInput,
                auth: { ...state.auth, auth_apiTokenInstanceInput: "", auth_idInstanceInput: "", active: false }
            };
        }
        case LM_input_ErrorCase: {
            return { ...state, LM_input_Error: true }
        }

        default: return state;
    }

};

export let Left_menu_input_OnChange = (newText) => ({ type: Left_menu_input_OnChangeCase, newText: newText });
export let Message_Input_OnChange = (newText) => ({ type: Message_Input_OnChangeCase, newText: newText });
export let Left_menu_input_OnAdding = () => ({ type: Left_menu_input_OnAddingCase });
export let Message_Input_OnAdding = () => ({ type: Message_Input_OnAddingCase });
export let Left_menu_SetActiveChat = (id) => ({ type: Left_menu_SetActiveChatCase, id });
export let MessageRecive = (data) => ({ type: MessageReciveCase, data });
export let SetAuthData = (idInstance, apiTokenInstance) => ({ type: SetAuthDataCase, data: { idInstance, apiTokenInstance } });
export let auth_idInstanceInputOnChange = (newText) => ({ type: auth_idInstanceInputOnChangeCase, newText });
export let auth_auth_apiTokenInstanceInputOnChange = (newText) => ({ type: auth_auth_apiTokenInstanceInputOnChangeCase, newText });
export let CloseAuth = () => ({ type: CloseAuthCase });
export let LM_input_Error = () => ({ type: LM_input_ErrorCase });



export default Left_side_State_Reducer;

