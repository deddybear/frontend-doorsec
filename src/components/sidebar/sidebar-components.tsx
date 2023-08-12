import {Box, Drawer, DrawerContent, useColorModeValue, UseDisclosureProps} from "@chakra-ui/react";
import SidebarContent from "./sidebar-content";

const SidebarComponents = ({isOpen, onClose}: UseDisclosureProps) => {
    return (
        <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block'}} />
            <Drawer
                isOpen={isOpen!}
                placement='left'
                onClose={onClose!}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size='full'
            >
             <DrawerContent>
                 <SidebarContent onClose={onClose!} />
             </DrawerContent>

            </Drawer>
        </Box>
    )
}

export default SidebarComponents