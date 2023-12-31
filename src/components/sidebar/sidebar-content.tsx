import {ItemSidebar} from "../../model/components-props/sidebar/ItemSidebar";
import {Box, CloseButton, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import NavItemComponents from "../nav-item/navitem-components";

interface SidebarContentProps {
    onClose: () => void
    listItems: null | ItemSidebar[]
    display: object
}

const SidebarContent: React.FC<SidebarContentProps> = ({ onClose, listItems, display}) => {
    return (
        <Box
            transition='3s ease'
            bg={useColorModeValue('white', 'gray.900')}
            borderRight='1px'
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60}}
            pos='fixed'
            h='full'
            {...display}
        >
            <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
                <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {
                listItems != null ?
                (
                    listItems.map((item) => (
                        <Box mt='0.5em' key={item.name}>
                            <NavItemComponents icon={item.icon} path={item.path}>
                                {item.name}
                            </NavItemComponents>
                        </Box>
                    ))
                ) :
                (<div></div>)
            }
        </Box>
    )
}

export default SidebarContent