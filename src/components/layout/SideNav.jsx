import React from 'react'
import Menu from '../blocks/Menu'
import MyPagesNav from '../blocks/MyPagesNav'
import { SideNavCont } from '../styles/Style'


const SideNav = () => {
    return (
        <SideNavCont>
            <Menu/>

            <MyPagesNav/>
        </SideNavCont>
    )
}

export default SideNav
