import React from "react";
import { MyRightSuggested, SuggestedTap } from "../styles/Style";
import { SuggestedUsers } from "./Data";


const SuggestedUser = () => {
  return (
    <>
     <SuggestedTap className="tab">
        <div className="inactive">Suggested Users</div>
        <div className="active">Suggested Pages</div>
      </SuggestedTap>
      <MyRightSuggested >
      <ul className="page_list">
                {SuggestedUsers.map((el) => (
                    <li>
                        <div className="user_img">
                            <img src={el.image} alt="" />
                        </div>
                        <div className="user_details">
                            <h5 className="name">{el.name} <span className="button">
                                <button>{el.button}</button></span> <span className="icon">{el.icon}</span></h5>
                            <p className="place">{el.place}</p>
                        </div>
                </li>
                )) }
            </ul>          
      </MyRightSuggested >
    </>
  );
};

export default SuggestedUser;
