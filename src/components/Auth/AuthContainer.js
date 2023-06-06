import { connect } from "react-redux";
import {auth_idInstanceInputOnChange,auth_auth_apiTokenInstanceInputOnChange,CloseAuth} from "../../Redux/Left_side_State_Reducer";
import Auth from "./Auth";

let mapStateToProps = (state) => {
    return {
        Left_Side_State: state.Left_side_State,
    }
}

const AuthContainer = connect(mapStateToProps,{auth_idInstanceInputOnChange,auth_auth_apiTokenInstanceInputOnChange,CloseAuth})(Auth);

export default AuthContainer;