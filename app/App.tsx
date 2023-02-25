import {NativeBaseProvider} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SignUp} from "./src/routes/SignUp";
import {SignIn} from "./src/routes/SignIn";
import {Main} from "./src/routes/Main";

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }} initialRouteName={"Main"}>
                    <Stack.Screen name={"SignUp"} component={SignUp}/>
                    <Stack.Screen name={"SignIn"} component={SignIn}/>
                    <Stack.Screen name={"Main"} component={Main}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
