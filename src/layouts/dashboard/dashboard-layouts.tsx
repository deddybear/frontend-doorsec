import {Outlet} from "react-router-dom";
import SidebarComponents from "../../components/sidebar/sidebar-components";
import {useColorMode, useDisclosure} from "@chakra-ui/react";
import NavbarComponents from "../../components/navbar/navbar-components";
import {SideBarContentProps} from "../../model/components/sidebar/SideBarContentProps";
import {FiHome} from "react-icons/fi"

const DashboardLayouts = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const listItems: SideBarContentProps[] = [
        { name:  'Item1', icon: FiHome },
        { name:  'Item2', icon: FiHome },
        { name:  'Item3', icon: FiHome },
        { name:  'Item4', icon: FiHome }
    ];

    return (
        <div>
            <SidebarComponents isOpen={isOpen} onClose={onClose} listItems={listItems}>
                <NavbarComponents
                    onOpen={onOpen}
                    display={{}}
                    toggleColorMode={toggleColorMode}
                    colorMode={colorMode}
                />
            </SidebarComponents>
            <Outlet />
        </div>
    )
}

export default DashboardLayouts;