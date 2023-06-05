import { connect } from "react-redux";
import {Message_Input_OnChange, Left_menu_input_OnAdding,Message_Input_OnAdding, MessageRecive} from "../../Redux/Left_side_State_Reducer";
import MessagesPage from "./MessagesPage";

let mapStateToProps = (state) => {
    return {
        Left_Side_State: state.Left_side_State,
    }
}

const MessegesContainer = connect(mapStateToProps,{Message_Input_OnChange,Left_menu_input_OnAdding,Message_Input_OnAdding,MessageRecive})(MessagesPage);

export default MessegesContainer;