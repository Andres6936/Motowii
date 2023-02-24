import {Button, Center, FormControl, Input, Link, Stack, Text} from "native-base";

export function SignIn() {
    return (
        <Center flex={1}>
            <FormControl isInvalid={true}>
                <Stack space={2} w={"75%"} maxW={"300px"} mx={"auto"}>
                    <Text mb={"10"} fontSize={"2xl"}>Welcome!</Text>
                    <Input placeholder={"Username"} variant={"rounded"}/>
                    <Input placeholder={"Password"} variant={"rounded"}/>

                    <Button mt={5}>Sign In</Button>
                    <Link pt={4} mx={"auto"}>Not have a account? Register</Link>
                </Stack>
            </FormControl>
        </Center>
    )
}