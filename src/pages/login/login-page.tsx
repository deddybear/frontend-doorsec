import {
    Box,
    Button,
    Container,
    FormControl,
    Input, InputGroup, InputLeftAddon, Text
} from "@chakra-ui/react";
import CardComponents from "../../components/card/card-components";

const LoginPage : React.FC = () => {

    return (
        <Box mt='7em'>
            <Container>
                <CardComponents
                    display={{ boxShadow: 'dark-lg', rounded:'md'}}
                    headerCard={
                        <p className='test'>Login</p>
                    }
                    bodyCard={
                        <form>
                            <Box mt='2em' mb='2em'>
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon children='Email' />
                                        <Input name='email' type='email' placeholder='example@gmail.com' />
                                    </InputGroup>
                                </FormControl>
                            </Box>
                            <Box mt='2em' mb='1em'>
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon children='Code' />
                                        <Input name='password' type='password' placeholder='*****'/>
                                    </InputGroup>
                                </FormControl>
                            </Box>
                            <Box>
                                <Text fontSize='sm'>Dont have account yet ? <b><a href='#'>Sign up</a></b></Text>
                            </Box>
                            <Box mt='3em'>
                                <Button w='100%' colorScheme='telegram' variant='solid' type='submit'>
                                    Login
                                </Button>
                            </Box>
                        </form>
                    }
                    footerCard={null}
                />
            </Container>
        </Box>
    )
}

export default LoginPage;