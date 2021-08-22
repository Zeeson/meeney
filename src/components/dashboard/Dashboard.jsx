import React, { Component } from 'react'
import SideNav from '../layout/SideNav'
import { Dash } from '../styles/Style'
import RightNav from '../layout/RightNav'
import PostBoard from './PostBoard'


export default class Dashboard extends Component {
    render() {
        return (
            <Dash>
                <SideNav />
                <PostBoard/>
                 <RightNav />
            </Dash>
        )
    }
}
