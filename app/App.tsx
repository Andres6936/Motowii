import {
    Button,
    Center,
    FormControl,
    Input,
    Link,
    NativeBaseProvider,
    Stack,
    Text,
    WarningOutlineIcon
} from "native-base";
import {useState} from "react";

export default function App() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const onHandleRegister = () => {
        if (username === "") {

        }

        if (email === "") {

        }

        if (password === "") {

        }

        if (password !== confirmPassword) {

        }
    }

    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <FormControl isInvalid={true}>
                    <Stack space={3} w={"75%"} maxW={"300px"} mx={"auto"}>
                        <Text mb={"10"} fontSize={"2xl"}>Create an account</Text>

                        <Input value={username} onChangeText={text => setUsername(text)}
                               variant={"rounded"} placeholder={"Username"}></Input>
                        <FormControl.ErrorMessage
                            ml={"5"}
                            leftIcon={<WarningOutlineIcon size="xs"/>}>
                            The username is empty
                        </FormControl.ErrorMessage>

                        <Input value={email} onChangeText={text => setEmail(text)}
                               variant={"rounded"}
                               placeholder={"Email address"}></Input>
                        <FormControl.ErrorMessage
                            ml={"5"}
                            leftIcon={<WarningOutlineIcon size="xs"/>}>
                            The email is empty
                        </FormControl.ErrorMessage>

                        <Input value={password} type={"password"}
                               onChangeText={text => setPassword(text)}
                               variant={"rounded"}
                               placeholder={"Password"}></Input>
                        <FormControl.ErrorMessage
                            ml={"5"}
                            leftIcon={<WarningOutlineIcon size="xs"/>}>
                            The passwords is empty
                        </FormControl.ErrorMessage>

                        <Input value={confirmPassword} type={"password"}
                               onChangeText={text => setConfirmPassword(text)}
                               variant={"rounded"}
                               placeholder={"Confirm Password"}></Input>
                        <FormControl.ErrorMessage
                            ml={"5"}
                            leftIcon={<WarningOutlineIcon size="xs"/>}>
                            The passwords do not match
                        </FormControl.ErrorMessage>

                        <Button mt={"10"}>Register</Button>
                        <Link mx={"auto"}>Already account</Link>
                    </Stack>
                </FormControl>
            </Center>
        </NativeBaseProvider>
    );
}
