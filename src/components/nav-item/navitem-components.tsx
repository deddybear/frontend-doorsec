import NavItemProps from "../../model/components/nav-item/NavItemProps";
import {Box, Flex, Icon} from "@chakra-ui/react";

const NavItemComponents = ({icon, children, ...rest}: NavItemProps) => {
    return (
        <Box
        as='a'
        href='#'
        style={{ textDecoration: 'none' }}
        >
            <Flex
             align='center'
             p='4'
             mx='4'
             borderRadius='lg'
             role='group'
             cursor='pointer'
             {...rest}
            >
                {icon && (<Icon as={icon} mr='4' fontSize='16' _groupHover={{ color: 'white'}} />)}
            </Flex>
            {children}
        </Box>
    );
}

export default NavItemComponents;