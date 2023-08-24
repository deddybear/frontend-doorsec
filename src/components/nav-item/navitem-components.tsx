import NavItemProps from "../../model/components-props/nav-item/NavItemProps";
import {Box, Flex, Icon} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
// import {useState} from "react";



const NavItemComponents = ({icon, children, path, ...rest}: NavItemProps) => {
    const navigate = useNavigate()
    // const [isActive, setActive] = useState();
    const handleMenu = (link: string) : void => {
        navigate(link)
    }

    return (
        <Box
        as='a'
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        onClick={() => handleMenu(path)}
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
             bg={ window.location.pathname == path ? 'cyan.400' : 'none' }
             {...rest}
            >
                {icon && (<Icon as={icon} mr='4' fontSize='16' _groupHover={{ color: 'white'}} />)}
            {children}
            </Flex>
        </Box>
    );
}

export default NavItemComponents;