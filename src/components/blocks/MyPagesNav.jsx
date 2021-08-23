import React, { useState } from 'react'
import { FaPlusCircle, FaSearch } from 'react-icons/fa'
import { MyPagesNavCont } from '../styles/Style'
import { UserPages } from './Data' 
import { TiPin } from 'react-icons/ti'

const MyPagesNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

    return (
      <MyPagesNavCont>
        <div className="top">
          <h3 className="heading">My Pages</h3>
          <div className="create_new">
            <FaPlusCircle className="icon" />
            Create new
          </div>
        </div>
        <form action="" className="search_box">
          <FaSearch className="icon" />
          <input type="text" placeholder="Search Pages" />
            </form>
            
            <ul className="page_list">
                {UserPages.map((el) => (
                    <li className="each_page">
                        <div className="user_img">
                            <img src={el.image} alt="" />
                        </div>
                        <div className="user_details">
                            <h5 className="name">{el.name}</h5>
                            <span className="page"><small>{el.page}</small></span>
                        </div>
                        <div className="btn" onClick={handleClick}>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <TiPin className="pin"/>
                </li>
                )) }
            </ul>
      </MyPagesNavCont>
    );
}

export default MyPagesNav
