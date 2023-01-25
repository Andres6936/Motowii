import {Button, Center, Input, Link, NativeBaseProvider, Stack, Text} from "native-base";

export default function App() {
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <Stack space={4} w={"75%"} maxW={"300px"} mx={"auto"}>
                    <Text fontSize={"2xl"}>Create an account</Text>
                    <Input variant={"rounded"} placeholder={"Username"}></Input>
                    <Input variant={"rounded"} placeholder={"Email address"}></Input>
                    <Input variant={"rounded"} placeholder={"Password"}></Input>
                    <Input variant={"rounded"} placeholder={"Confirm Password"}></Input>
                    <Button>Register</Button>
                    <Link mx={"auto"}>Already account</Link>
                </Stack>
            </Center>
        </NativeBaseProvider>
    );
}
