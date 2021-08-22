import React from "react";
import { MyRightNavCont, ListingTitle } from "../styles/Style";
import { SuggestedListing } from "./Data";
import ProgressBar from '../layout/ProgressBar'


const RightMenu = () => {
  return (
    <>
      <ListingTitle>Suggested Listing</ListingTitle>
      <MyRightNavCont>
      <ul className="page_list">
                {SuggestedListing.map((el) => (
                    <li>
                        <div className="user_img">
                            <img src={el.image} alt="" />
                        </div>
                        <div className="user_details">
                            <h5 className="name">{el.name} <span className="button"><button>{el.button}</button></span></h5>
                            <p>{el.store}</p>
                            <p className="order">{el.orderLeft}</p>
                            <ProgressBar bgcolor={el.progress.bgcolor} completed={el.progress.completed} />
                        </div>
                </li>
                )) }
            </ul>          
      </MyRightNavCont>
    </>
  );
};

export default RightMenu;
