import {
    Box,
    Button,
    Card,
    CardBody, CardHeader,
    Container,
    FormControl,
    Input, InputGroup, InputLeftAddon, Text
} from "@chakra-ui/react";

const LoginPage : React.FC = () => {

    return (
        <Box mt='15em'>
            <Container>
                <Card boxShadow='lg' rounded='md'>
                    <CardHeader>
                        <p style={{ fontFamily: 'Rubik-300-Italic'}}>lorem ipsu dolor si amet</p>
                    </CardHeader>
                    <CardBody>
                        <form>
                            <Box mt='2em' mb='2em'>
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon children='Email' />
                                        <Input type='email' placeholder='example@gmail.com' />
                                    </InputGroup>
                                </FormControl>
                            </Box>
                            <Box mt='2em' mb='1em'>
                                <FormControl isRequired>
                                    <InputGroup>
                                        <InputLeftAddon children='Code' />
                                        <Input type='password' placeholder='*****'/>
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
                    </CardBody>
                </Card>
            </Container>
        </Box>
    )
}

export default LoginPage;