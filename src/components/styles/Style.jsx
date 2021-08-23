import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30vh;
  padding: 5% 7% 2%;
  background: linear-gradient(-267deg, var(--c-1), var(--c-3));
  border-radius: 0 0 20px 20px;
  width: 100%;
  z-index: 999;
  position: relative;
 

  @media (max-width: 900px) {
    padding: 5% 5% 2%;
  }

  .eclipse {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: var(--c-d);

    @media (max-width: 900px) {
      width: 250px;
      height: 250px;
    }
  }

  .eclipse_1 {
    left: -230px;
    top: -150px;
    @media (max-width: 900px) {
      left: -210px;
      top: -70px;
    }
  }

  .eclipse_2 {
    top: -250px;
    left: 20px;
    @media (max-width: 900px) {
      left: -30px;
      top: -160px;
    }
  }

  .navlinks {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    @media (max-width: 900px) {
      flex-direction: row;
    }
  }

  .btn-outline {
    margin-left: 20px;
    @media (max-width: 900px) {
      margin-right: 20px;
    }
  }

  .user {
  }

  a {
    text-decoration: none;
    color: var(--);
  }

  /* &.isActive {
    background: var(--c-5);
    height: 12vh;
  } */

  @media (max-width: 900px) {
    .active {
      right: 0;
      opacity: 1;
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  position: relative;
  color: var(--c);

  .user_img {
    width: 60px;
    height: 60px;
    border: 2px solid var(--c-3);
    border-radius: 50px;
    overflow: hidden;
    margin-right: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dropdown_icon {
    color: var(--c-2);
    margin-right: 10px;
  }

  .dropdown {
    position: absolute;
    top: 10vh;
    right: 0;
    background: var(--c);
    padding: 20px 25px;
    border-radius: 10px;
    color: var(--d);
    display: none;
  }
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    position: absolute;
    top: 25vh;
    right: 0;
    width: auto;
    opacity: 0;
    flex-direction: column-reverse;
    align-items: flex-start;
    transition: all 0.5s linear;
    background: var(--d);
    border-radius: 10px;
    box-shadow: var(--bx-s-2);
    padding: 8px 30px;
    z-index: 999;
  }

`;

export const NavItem = styled.li`
  margin-left: 30px;

  a {
    color: var(--c);
  }

  .nav_link {
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .notification, .message {
    position: relative;
  }

  .counter {
    position: absolute;
    top: -10px;
    right: -10px;
    background: var(--c-2);
    width: 20px;
    height: 20px;
    border-radius: 50px;
    font-size: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .country {
    width: 40px;
    height: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  

  @media (max-width: 900px) {
    display: block;
    margin: 20px 0;
  }
`;

export const Search = styled.form`
  position: relative;
  width: 250px;

  .icon {
    position: absolute;
    left: 10px;
    top: 15px;
    color: var(--c-2);
  }

  input {
    width: 100%;
    padding: 15px 15px 15px 30px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: var(--c-1);
    &::placeholder {
      color: var(--c);
      font-family: "Poppins";
    }
  }
`;

export const Toggle = styled.div`
  color: var(--c);
  font-size: 25pt;
  display: none;

  @media (max-width: 900px) {
    display: block;
    transition: all 0.5s linear;
  }
`;

export const Links = styled.ul``;

export const LinkItems = styled.li`
  display: inline-block;
  margin-left: 20px;
  list-style: none;

  a {
    letter-spacing: 1px;
    font-weight: 300;
    font-family: var(--Poppins);
  }

  .btn {
    border: 1px solid #fff;
    padding: 8px 20px;
    border-radius: 5px;
  }
`;

export const MenuCont = styled.ul`
  margin-top: -100px; 
  width: 260px;
  height: 340px;
  background: var(--c-1);
  padding: 10px 15px;
  background: #490057 0% 0% no-repeat padding-box;
  box-shadow: 2px 6px 20px #0000001c;
  border-radius: 16px;
  li {
    display: block;
    margin: 35px 0;

    .icon {
      margin-right: 10px;
     justify-content: around; 
    }
  }

  a {
    color: var(--c);
    font-size: 18px;
  }

  .active {
    color: var(--c-2);
  }

  @media (max-width: 900px) {
    li {
      display: inline-block;
      margin:5px 0 ;
      margin-right: 15px;

      .icon {
        margin-right: 5px;
      }
    }
     a {
    color: var(--c);
    font-size: 12px;
  }
  }
`;

export const Dash = styled.div`
  display: grid;
  grid-template-columns: auto 50% auto;
  grid-gap: 30px;
  padding: 2% 5%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SideNavCont = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10vh;

  .switch {
    width: 100%;
    padding: 10px;
    background: var(--c);
    text-align: center;
    height: 80px;
    border-radius: 8px;

    h5 {
      margin-bottom: 10px;
    }
  }

  .switch .tab {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--c-5);
    color: var(--c);
    overflow: hidden;
    border-radius: 4px;
  }

  span {
    padding: 5px;
    width: 100%;
  }

  span.active {
    background: var(--c-1);
  }

  @media (max-width: 900px) {
    .switch {
      display: none;
    }
  }
`;

export const MyPagesNavCont = styled.div`
  width: 100%;
  background: var(--c);
  padding: 10px 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 13px;
  height: auto;
  @media (max-width: 900px) {
    
      display: none;
    
  }

  .top {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    .create_new {
      background: var(--c-1);
      padding: 5px;
      border-radius: 20px;
      color: var(--c);
      fontsize: 8px;
    }

    .icon {
      margin-right: 3px;
      color: var(--c-2);
    }
  }

  .search_box {
    width: 100%;
    position: relative;

    .icon {
      position: absolute;
      top: 7px;
      left: 7px;
      font-size: 10px;
    }

    input {
      width: 100%;
      border: none;
      outline: none;
      background: var(--c-6);
      padding: 5px 5px 5px 25px;
      border-radius: 50px;

      &::placeholder {
        font-size: 10px;
      }
    }
  }

  .page_list {
    display: block;
    margin-top: 20px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      background: #F3F3F3 0% 0% no-repeat padding-box;
      opacity: 1;

      .name{
        margin-right: 40px;
        text-align: left;
        font: normal normal bold 15px/19px Work Sans;
        letter-spacing: 0px;
        color: #490057;
        opacity: 1;
      }
      .page{
        text-align: left;
        font: normal normal normal 10px/17px Work Sans;
        letter-spacing: 0px;
        color: #9B9B9B;
        opacity: 1;
      }
      .pin{
        margin-right: 10px; 
      }

      .btn {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        width: 5px;
        height: 5px;
        border-radius: 50px;
        background: var(--c-5);
      }
    }
      .user_img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export const CreatePostConst = styled.div`
  width: 100%;
  background: var(--c);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #49005730;
  form {
    width: 100%;
    display: grid;
    grid-template-columns: auto 15%;
    grid-gap: 30px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }

    input {
      width: 100%;
      padding: 15px;
      border-radius: 50px;
      outline: none;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #70707078;
      border-radius: 29px;
    }

    button {
      border: none;
      padding: 15px 30px;
      outline: none;
      background: var(--c-1);
      border-radius: 50px;
      color: var(--c);
    }
  }

  .attatchments {
    width: 400px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 flex-wrap: wrap;

    @media (max-width: 900px) {
  width: 200px;
  
    }

    li {
      display: flex;
      align-items: center;
      margin-top: 30px;
      margin-right: 20px;

      .icon {
        margin-right: 8px;
        color: var(--c-1);
      }
    }
  }
`;

export const PostBoardCont = styled.div`
  .tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 3vh;

    padding: 5px 10px;
    text-align: center;
    position: relative;

    .commmunity{
      text-align: left;
      font: normal normal normal 20px/16px Work Sans;
      letter-spacing: 0px;
      color: #9B9B9B;
      opacity: 1;
    }

    .trending {
      text-align: left;
      font: normal normal normal 20px/16px Work Sans;
      letter-spacing: 0px;
      color: #9B9B9B;
      opacity: 1;
    }
    @media (max-width: 900px) {
     font-size: 12px;
    }

    &::after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0;
      margin: auto;
      background: var(--c-1);
      height: 1px;
      display: block;
    }

    .active {
      font-weight: 500px;
      position: relative;
      text-align: left;
      font: normal normal bold 18px/16px Work Sans;
      letter-spacing: 0px;
      color: #490057;
      opacity: 1;

      &::after {
        content: "";
        width: 130%;
        position: absolute;
        bottom: -6px;
        left: 0;

        margin: auto;
        background: var(--c-1);
        height: 3px;
        display: block;
      }
    }
  }

  .user_profile {
    display: grid;
    grid-template-columns: 15% auto 35%;
    grid-gap: 20px;
    padding: 30px;
    background: var(--c-4);
    border-radius: 10px;
    margin-bottom: 20px;
    position: relative;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }

    .btn {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        width: 5px;
        height: 5px;
        border-radius: 50px;
        background: var(--c-5);
      }
    }

    .dropdown {
      position: absolute;
      top: 20px;
      right: -10px;
      padding: 10px;
      background: var(--c);
      border-radius: 8px;
      font-size: 12px;
      display: none;
      opacity: 0;
      transition: 0.5s;

      &.active {
        display: block;
        opacity: 1;
      }

      div {
        margin: 3px 0;
      }
    }

    .user_image {
      width: 80px;
      height: 80px;
      border-radius: 50px;
      overflow: hidden;
      border: 2px solid var(--c-1);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .user_summary {
      color: var(--c-5);
    }
    .user_summary .user_name {
      margin-bottom: 10px;
    }
    .user_summary .user_name h2 {
      font-size: 24px;
      color: var(--c-1);
      margin-bottom: 5px;
    }

    .user_summary .user_name span {
      font-size: 14px;
    }
    .user_summary p {
      font-size: 12px;
      line-height: 150%;
    }
    .user_stats .stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      text-align: center;
    }
    .user_stats .stats li {
      color: var(--c-1);
      font-size: 14px;
      text-align: center;
    }

    .user_stats .stats li p {
      color: var(--c-5);
      display: inline-block;
      font-size: 8px;
    }

    .user_stats button {
      text-align: center;
      font-size: 10px;
      letter-spacing: 1px;
      color: #ffffff;
      background: var(--c-1);
      border-radius: 15px;
      padding: 5px 15px;
      border: none;
      outline: none;
      margin: 10px 0;
    }

    .user_stats .page_listing {
      margin-top: 20px;
    }
    .user_stats .page_listing li {
      font-size: 10px;
      margin: 3px 0;
    }
  }
`;

export const RightMenuCont = styled.ul`
  top: 411px;
  left: 1450px;
  width: 329px;
  height: 439px;
  background: #e8d8ec 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;

  a {
    color: var(--c-2);
    font-size: 18px;
  }
`;

export const ListingTitle = styled.div`
  margin-top: 15px;
  top: 363px;
  left: 1454px;
  width: 165px;
  height: 27px;
  text-align: left;
  font: normal normal bold 20px/16px Work Sans;
  letter-spacing: 0px;
  color: #490057;
  opacity: 1;
`

export const MyRightNavCont = styled.div`
  top: 411px;
  left: 1450px;
  width: 300px;
  height: 469px;
  margin-top: 5px; 
  background: #E8D8EC 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;

  @media (max-width: 900px) {
        display: none;
    }
  .page_list {
    display: block;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .user_details {
        .name {
          font-size: 15px;
          margin-right: 30px;
          margin-top: 30px;
        }

        button {
          border: none;
          top: 439px;
          left: 1683px;
          width: 78px;
          height: 27px;
          outline: none;
          background: var(--c-1);
          border-radius: 50px;
          color: var(--c);
          margin-left: 35px;
        }
        .order {
          margin-top: 8px;
        }
      }

      .user_img {
        width: 47px;
        height: 47px;
        border-radius: 50px;
        overflow: hidden;
        margin-left: 15px; 
        background: transparent url('img/Ellipse 32.png') 0% 0% no-repeat padding-box;
        border: 3px solid #490057;
        opacity: 1;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .my_color{
        color: #FBB03B
      }

      p {
        font-size: 10px; 
      }
    }
  }
`;

export const SuggestedTap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 50px; 
  margin-bottom: 3vh;
  padding: 5px 10px;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    margin: auto;
    background: var(--c-1);
    height: 1px;
    display: block;
  }
    .inactive {
      text-align: left;
    font: normal normal 300 15px/20px Work Sans;
    letter-spacing: 0px;
    color: #9B9B9B;
    opacity: 1;
    }
  .active {
    font-weight: 500px;
    position: relative;
    text-align: left;
    font: normal normal 600 15px/40px Work Sans;
    letter-spacing: 0px;
    color: #490057;
    opacity: 1;

    &::after {
      content: "";
      width: 120%;
      position: absolute;
      bottom: -6px;
      left: 0;

      margin: auto;
      background: var(--c-1);
      height: 3px;
      display: block;
    }
  }

`
export const MyRightSuggested = styled.div`
    top: 979px;
    left: 1450px;
    width: 300px;
    height: 439px;
   
    background: #E8D8EC 0% 0% no-repeat padding-box;
    border-radius: 16px;
    opacity: 1;
  }
  }

  .page_list {
    display: block;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
    
      .user_details{
        .name{
          font-size: 12px; 
          margin-right: 22px; 
          margin-top: 15px; 
          top: 1010px;
          height: 20px;
          text-align: left;
          font: normal normal bold 15px/16px Roboto;
          letter-spacing: 0px;
          color: #490057;
          opacity: 1;
        }

        button {
          border: none;
          top: 439px;
          left: 1683px;
          width: 78px;
          height: 27px;
          margin-left: 20px; 
          outline: none;
          background: var(--c-1);
          border-radius: 50px;
          color: var(--c);          
        }
        .icon{
          margin-left: 7px;
          font-size: 1.2em;   
        }
        .place {
          text-align: left;
          font: normal normal 300 12px/16px Roboto;
          letter-spacing: 0px;
          color: #787878;
          opacity: 1
        }
      }

      .user_img {
        margin-top: 23px; 
        border-radius: 50px;
        overflow: hidden;
        margin-left: 15px; 
        width: 47px;
        height: 47px;
        background: transparent url('img/Ellipse 32.png') 0% 0% no-repeat padding-box;
        border: 3px solid #490057;
        opacity: 1;
        margin-left: 15px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        }
      }
      .my_color {
        color: #fbb03b;
      }

      p {
        font-size: 10px;
      }
    }
  }
`;

export const PostCont = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 28px;
  width: 100%;
  display: grid;
  grid-template-columns: 50% auto;
  grid-gap: 20px;
  padding: 20px;
  height: auto;
  margin: 20px 0;
  color: var(--c-5);

  @media (max-width: 900px) {
grid-template-columns: 1fr;
  }

  .post_img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 13px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .post_details .user_details {
    display: flex;
    align-items: center;
  }

  .post_details .user_details .user_img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
    border: 1px solid var(--c-1);
    margin-right: 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .post_details .user_details .user_cred h1 {
    font-size: 12px;
    color: var(--c-1);
  }

  .post_details .user_details .user_cred .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .post_details .user_details .user_cred span {
    font-size: 8px;
    margin-top: 5px;
    margin-right: 10px;
  }

  .post_details p {
    font-size: 9px;
    margin: 10px 0;
    line-height: 130%;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--c-1);
  }

  .icons .heart {
    color: red;
  }

  .icons .marking li {
    display: inline-block;
    margin-right: 10px;
  }
`;

export const CommentCont = styled.div`
  width: 100%;
  height: auto;

  .view_more {
    font-size: 7px;
    color: var(--c-1);
  }

  .commentbox {
    display: grid;
    grid-template-columns: 15% auto;
    grid-gap: 5px;
    padding: 5px;
  }

  .commentbox .user_img {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details .name {
    font-size: 12px;
    color: var(--c-1);
  }

  .details .time {
    font-size: 8px;
  }

  .details p {
    font-size: 9px;
    line-height: 130%;
  }
`;