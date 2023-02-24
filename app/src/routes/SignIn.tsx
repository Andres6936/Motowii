import {Center, FormControl, Stack, Text} from "native-base";

export function SignIn() {
    return (
        <Center>
            <FormControl isInvalid={true}>
                <Stack space={2} w={"75%"} maxW={"300px"} mx={"auto"}>
                    <Text mb={"10"} fontSize={"2xl"}>Welcome!</Text>
                </Stack>
            </FormControl>
        </Center>
    )
}