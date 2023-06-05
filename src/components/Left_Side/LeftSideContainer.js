import { connect } from "react-redux";
import {Left_menu_input_OnChange, Left_menu_input_OnAdding, Left_menu_SetActiveChat} from "../../Redux/Left_side_State_Reducer";
import LeftSide from "./LeftSide";

let mapStateToProps = (state) => {
    return {
        Left_Side_State: state.Left_side_State,
    }
}

const LeftSideContainer = connect(mapStateToProps,{Left_menu_input_OnChange,Left_menu_input_OnAdding,Left_menu_SetActiveChat})(LeftSide);

export default LeftSideContainer;