import {NativeBaseProvider} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SignUp} from "./src/routes/SignUp";
import {SignIn} from "./src/routes/SignIn";
import {Main} from "./src/routes/Main";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {CustomDrawer} from "./src/components/CustomDrawer";
import {Trips} from "./src/routes/Trips";

const Drawer = createDrawerNavigator();

function DrawerTab() {
    return (
        <Drawer.Navigator initialRouteName={"Map"} screenOptions={{
            headerShown: false
        }} drawerContent={CustomDrawer}>
            <Drawer.Screen name={"Map"} component={Main}/>
            <Drawer.Screen name={"Trips"} component={Trips}/>
            <Drawer.Screen name={"Payment"} component={Main}/>
            <Drawer.Screen name={"Notifications"} component={Main}/>
            <Drawer.Screen name={"Promos"} component={Main}/>
            <Drawer.Screen name={"Help"} component={Main}/>
            <Drawer.Screen name={"Free trips"} component={Main}/>
            <Drawer.Screen name={"Settings"} component={Main}/>
        </Drawer.Navigator>
    )
}


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
                    <Stack.Screen name={"Main"} component={DrawerTab}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
