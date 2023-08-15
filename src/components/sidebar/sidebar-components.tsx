import {Box, BoxProps, Drawer, DrawerContent, useColorModeValue, UseDisclosureProps} from "@chakra-ui/react";
import SidebarContent from "./sidebar-content";
import {ReactNode} from "react";
import {SideBarContentProps} from "../../model/components/sidebar/SideBarContentProps";


interface SideBarProps extends BoxProps {
    isOpen: UseDisclosureProps['isOpen'],
    onClose: UseDisclosureProps['onClose']
    listItems: null | SideBarContentProps[]
    children: null | string | ReactNode | ReactNode[]
}

const SidebarComponents: React.FC<SideBarProps> = ({isOpen, onClose, listItems, children}) => {

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
                        listItems={listItems}
                        display={{}}
                    />
                </DrawerContent>
            </Drawer>
            {children}
            <Box ml={{ base: 0, md: 60 }} p='4'></Box>
        </Box>
    )
}

export default SidebarComponents