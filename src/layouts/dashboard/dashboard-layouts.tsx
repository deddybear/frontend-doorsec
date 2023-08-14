import {Outlet} from "react-router-dom";
import SidebarComponents from "../../components/sidebar/sidebar-components";
import {useDisclosure} from "@chakra-ui/react";

const DashboardLayouts = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    console.log(isOpen)

    return (
        <div>
            <SidebarComponents isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Outlet />
        </div>
    )
}

export default DashboardLayouts;