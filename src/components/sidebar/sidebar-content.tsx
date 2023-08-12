import {SidebarProps, LinkItemProps} from "../../model/components/sidebar/SidebarProps";
import {Box, CloseButton, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import NavItemComponents from "../nav-item/navitem-components";


const SidebarContent = ({ onClose }: SidebarProps, Items: LinkItemProps[]) => {
    return (
        <Box
            transition='3s ease'
            bg={useColorModeValue('white', 'gray.900')}
            borderRight='1px'
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60}}
            pos='fixed'
            h='full'
        >
            <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
                <Text fontSize='2x1' fontFamily='monospace' fontWeight='bold'>
                    Logo
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {
                Items.map((item) => (
                    <NavItemComponents key={item.name} icon={item.icon}>
                        {item.name}
                    </NavItemComponents>
                ))
            }
        </Box>
    )
}

export default SidebarContent