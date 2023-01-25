import {Button, Center, Input, Link, NativeBaseProvider, Stack, Text} from "native-base";
import {useState} from "react";

export default function App() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <Stack space={4} w={"75%"} maxW={"300px"} mx={"auto"}>
                    <Text fontSize={"2xl"}>Create an account</Text>
                    <Input value={username} onChangeText={text => setUsername(text)}
                           variant={"rounded"} placeholder={"Username"}></Input>
                    <Input value={email} onChangeText={text => setEmail(text)}
                           variant={"rounded"}
                           placeholder={"Email address"}></Input>
                    <Input value={password} type={"password"}
                           onChangeText={text => setPassword(text)}
                           variant={"rounded"}
                           placeholder={"Password"}></Input>
                    <Input value={confirmPassword} type={"password"}
                           onChangeText={text => setConfirmPassword(text)}
                           variant={"rounded"}
                           placeholder={"Confirm Password"}></Input>
                    <Button>Register</Button>
                    <Link mx={"auto"}>Already account</Link>
                </Stack>
            </Center>
        </NativeBaseProvider>
    );
}
