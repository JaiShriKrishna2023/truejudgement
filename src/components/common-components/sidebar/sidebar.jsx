import React from 'react';
import{SidebarWrapper} from './sidebar.style';
import SidebarItems from './sidebarItem';

const Sidebar=(props)=>{
    console.log('sidebar', props);

return(<SidebarWrapper id={'sidebar'}>
    <SidebarItems {...props}></SidebarItems>
</SidebarWrapper>)
}
export default Sidebar;
