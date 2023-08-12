import {Outlet} from "react-router-dom";
import SidebarComponents from "../../components/sidebar/sidebar-components";
import {useDisclosure} from "@chakra-ui/react";

const DashboardLayouts = () => {
    const {isOpen, onClose} = useDisclosure();


    return (
        <div>
            <SidebarComponents isOpen={isOpen} onClose={onClose}/>
            <Outlet />
        </div>
    )
}

export default DashboardLayouts;