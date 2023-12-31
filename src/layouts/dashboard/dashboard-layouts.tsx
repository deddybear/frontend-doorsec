import {Outlet} from "react-router-dom";
import SidebarComponents from "../../components/sidebar/sidebar-components";
import {Box, Flex, useColorMode, useColorModeValue, useDisclosure} from "@chakra-ui/react";
import NavbarComponents from "../../components/navbar/navbar-components";
import {ItemSidebar} from "../../model/components-props/sidebar/ItemSidebar";
import {FiHome, FiTrello, FiLogOut, FiShoppingBag, FiShoppingCart} from "react-icons/fi"

const DashboardLayouts = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const listItems: ItemSidebar[] = [
        { name: 'Dashboard', icon: FiTrello, path: '/dashboard' },
        { name: 'Buy Stock', icon: FiHome, path: '/dashboard/stock' },
        { name: 'Report Selling', icon: FiShoppingCart, path: '/dashboard/report-selling' },
        { name: 'Report Buying', icon: FiShoppingBag, path: '/dashboard/report-buying' },
        { name: 'Logout', icon: FiLogOut, path: '/logout'}
    ];

    return (
        <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarComponents isOpen={isOpen} onClose={onClose} listItems={listItems}>
                <NavbarComponents
                    onOpen={onOpen}
                    display={{}}
                    toggleColorMode={toggleColorMode}
                    colorMode={colorMode}
                />
            </SidebarComponents>
            <Flex
                as='main'
                ml={{ base: 0, md: 60 }}
                px={{ base: 4, md: 4 }}
                alignItems='center'
            >
                <Outlet />
            </Flex>

        </Box>
    )
}

export default DashboardLayouts;