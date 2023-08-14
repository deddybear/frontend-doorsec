import {Box, Drawer, DrawerContent, useColorModeValue, UseDisclosureProps} from "@chakra-ui/react";
import SidebarContent from "./sidebar-content";
// import {LinkItemProps} from "../../model/components/sidebar/SidebarProps";
// import {FiHome} from "react-icons/fi";
import NavbarMobileComponents from "../navbar/navbar-mobile-components";

const SidebarComponents = ({isOpen, onOpen, onClose}: UseDisclosureProps) => {
    //
    // const LinkItems: LinkItemProps[] = [
    //     {name: 'Hahaha ANY', icon: FiHome},
    //     {name: 'Home2', icon: FiHome},
    //     {name: 'Home3', icon: FiHome}
    // ]

    return (
        <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                listItems={null}
                display={{ base: 'none', md: 'block'}}
            />
            <Drawer
                isOpen={isOpen!}
                placement='left'
                onClose={onClose!}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size='full'
            >
                <DrawerContent>
                    {/*ini buat mobile*/}
                    <SidebarContent
                        onClose={onClose!}
                        listItems={null}
                        display={{}}
                    />
                </DrawerContent>
            </Drawer>
            <NavbarMobileComponents onOpen={onOpen!} display={{}} />
            <Box ml={{ base: 0, md: 60 }} p='4'></Box>
        </Box>
    )
}

export default SidebarComponents