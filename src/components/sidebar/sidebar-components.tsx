import {Box, BoxProps, Drawer, DrawerContent, UseDisclosureProps} from "@chakra-ui/react";
import SidebarContent from "./sidebar-content";
import {ReactNode} from "react";
import {ItemSidebar} from "../../model/components-props/sidebar/ItemSidebar";


interface SideBarProps extends BoxProps {
    isOpen: UseDisclosureProps['isOpen'],
    onClose: UseDisclosureProps['onClose']
    listItems: null | ItemSidebar[]
    children: null | string | ReactNode | ReactNode[]
}

const SidebarComponents: React.FC<SideBarProps> = (
    {isOpen, onClose, listItems, children}
) => {

    return (
        <Box>
            <SidebarContent
                onClose={() => onClose}
                listItems={listItems}
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
                    {/*ini buat mobile dan isi*/}
                    <SidebarContent
                        onClose={onClose!}
                        listItems={listItems}
                        display={{ base: 'none', md: 'block'}}
                    />
                </DrawerContent>
            </Drawer>
            {children}
            <Box ml={{ base: 0, md: 60 }} p='4'></Box>
        </Box>
    )
}

export default SidebarComponents