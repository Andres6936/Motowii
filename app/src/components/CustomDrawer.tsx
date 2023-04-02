import {DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {Avatar, Box, Text, VStack} from "native-base";

export function CustomDrawer(props: DrawerContentComponentProps) {
    return (
        <>
            <VStack justifyContent={"center"} safeArea={true}>
                <Avatar bg="pink.600" alignSelf="center" size="xl" source={{
                    uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"
                }}/>
                <Text mt={2} textAlign={"center"}>Joan Andrés</Text>
                <Text textAlign={"center"}>Edit profile</Text>
            </VStack>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>

            <Box justifyContent={"center"} p={5}>
                <Text opacity={0.5} textAlign={"center"}>Close</Text>
            </Box>
        </>

    )
}