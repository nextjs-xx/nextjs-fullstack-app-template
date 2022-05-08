import React from 'react'
import {
    BellIcon,
    HashtagIcon, 
    BookmarkIcon, 
    CollectionIcon,
    DotsCircleHorizontalIcon,
     MailIcon, 
     UserIcon, 
     HomeIcon,
} from '@heroicons/react/outline'
import SideBarRow from './SideBarRow'

function Sidebar() {
    return (
        <div className='col-span-2 items-center px-4 md:items-start  flex flex-col '>
            <img className='m-3 h-10 w-10' src="https://links.papareact.com/drq" alt="" srcset="" />
            <SideBarRow Icon={HomeIcon} title="Home"/>
            <SideBarRow Icon={HashtagIcon} title="Explore"/>
            <SideBarRow Icon={BellIcon} title="NOtifications"/>
            <SideBarRow Icon={MailIcon} title="Messages"/>
            <SideBarRow Icon={BookmarkIcon} title="Bookmarks"/>
            <SideBarRow Icon={CollectionIcon} title="Lists"/>
            <SideBarRow Icon={UserIcon} title="Sign In"/>

            <SideBarRow Icon={DotsCircleHorizontalIcon} title="More"/>

        </div>

    )
}

export default Sidebar