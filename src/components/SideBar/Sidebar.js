import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon
} from './Sidebar.elements';

const Sidebar = () => {
    return ( 
        <>
            <SidebarContainer>
                <Icon>
                    <CloseIcon />
                </Icon>
            </SidebarContainer>
        </>
     );
}
 
export default Sidebar;