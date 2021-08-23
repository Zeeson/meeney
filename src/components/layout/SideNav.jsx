import React from 'react'
import Menu from '../blocks/Menu'
import MyPagesNav from '../blocks/MyPagesNav'
import { SideNavCont } from '../styles/Style'


const SideNav = () => {
    return (
        <SideNavCont>
            <div className="switch">
                <h5>Switch Account</h5>
                <div className="tab">
                    <span className="active">Social</span>
                    <span>Business</span>
                </div>
            </div>
            <Menu/>

            <MyPagesNav/>
        </SideNavCont>
    )
}

export default SideNav
