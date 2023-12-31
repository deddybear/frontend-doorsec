import {
    Avatar,
    Box, Button,
    Flex, FlexProps,
    HStack,
    IconButton,
    Menu,
    MenuButton, MenuDivider, MenuItem, MenuList,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import {FiMenu, FiChevronDown, FiMoon, FiSun} from "react-icons/fi";
import {ColorModeContextType} from "@chakra-ui/color-mode";

interface NavbarProps extends FlexProps {
    onOpen: () => void
    display: object
    toggleColorMode: ColorModeContextType['toggleColorMode']
    colorMode: ColorModeContextType['colorMode']
}

const NavbarComponents: React.FC<NavbarProps> = (
    {onOpen, display, toggleColorMode, colorMode}
) => {

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height='20'
            alignItems='center'
            bg={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...display}
        >
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant='outline'
                aria-label='open menu'
                icon={<FiMenu />}
            />
            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize='2xl'
                fontFamily='monospace'
                fontWeight='bold'
            >
            </Text>
            <HStack spacing={{ base: '0', md: '6' }}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <FiMoon /> : <FiSun />}
                </Button>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex'}}
                                    alignItems='felx-start'
                                    spacing='1px'
                                    ml='2'
                                >
                                    <Text fontSize='sm'>Lorem Ipsum</Text>
                                    <Text fontSize='xs' color='gray.600'>Admin</Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex'}}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                        >
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Profile</MenuItem>
                            <MenuDivider/>
                            <MenuItem>Profile</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    )

}

export default NavbarComponents