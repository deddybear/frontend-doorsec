import NavItemProps from "../../model/components/nav-item/NavItemProps";
import {Box, Flex, Icon} from "@chakra-ui/react";

const NavItemComponents = ({icon, children, ...rest}: NavItemProps) => {
    return (
        <Box
        as='a'
        href='#'
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        >
            <Flex
             align='center'
             p='4'
             mx='4'
             borderRadius='lg'
             role='group'
             cursor='pointer'
             _hover={{
                 bg: 'cyan.400',
                 color: 'white'
             }}
             {...rest}
            >
                {icon && (<Icon as={icon} mr='4' fontSize='16' _groupHover={{ color: 'white'}} />)}
            {children}
            </Flex>
        </Box>
    );
}

export default NavItemComponents;