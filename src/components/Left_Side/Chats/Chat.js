import React from "react";
import { NavLink } from "react-router-dom";

function Chat(props) {

        // let PostsDataRestore = props.PostsData.map(el => <Post key={el.id} Increment={onIncrement} Decrement={onDecrement} liked={el.liked} id={el.id} like_count={el.like_count} text={el.text} imgSrc={el.imgSrc} author={el.author} />)
        let SetActiveChat = (e) => {
                let id = e.target.id;
                props.Left_menu_SetActiveChat(id);
        }
        return (
                <NavLink key={props.id} id={props.id} to={props.linkTo}  onClick={ SetActiveChat} className={navData => navData.isActive ? "App_left_side_chats_el_active" : "App_left_side_chats_el"} >
                        {props.number}
                </NavLink>
        );
}

export default Chat;