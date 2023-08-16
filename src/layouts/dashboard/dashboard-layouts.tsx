import {Outlet} from "react-router-dom";
import SidebarComponents from "../../components/sidebar/sidebar-components";
import {Box, Flex, useColorMode, useColorModeValue, useDisclosure} from "@chakra-ui/react";
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

        </div>
    )
}

export default DashboardLayouts;