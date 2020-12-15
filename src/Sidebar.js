import { Chat, EmojiFlags, ExpandMore, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://1.bp.blogspot.com/-9FaNAsk5M6A/XtnAJWeepfI/AAAAAAABdIQ/br1b_0PV3mU_4RgDHlGC03bfrcbCHfrlQCK4BGAsYHg/s850/avatar-hola.jpg' title='Ale' />
            <SidebarRow Icon={EmojiFlags} title='Pages'/>
            <SidebarRow Icon={People} title='Friends'/>
            <SidebarRow Icon={Chat} title='Messenger' />
            <SidebarRow Icon={Storefront} title='Marketplace'/>
            <SidebarRow Icon={VideoLibrary} title='Videos'/>
            <SidebarRow Icon={ExpandMore} title='Marketplace'/>
        </div>
    )
}

export default Sidebar
