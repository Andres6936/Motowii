import {HStack, Pressable, ScrollView, Text, VStack} from "native-base";
import {History} from "../components/History";
import {AntDesign} from '@expo/vector-icons';
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {RootParamList} from "../interfaces/RootParamList";

export function Trips() {
    const navigator = useNavigation<DrawerNavigationProp<RootParamList>>()

    return (
        <VStack bg={"gray.200"} p={3} safeArea={true} flex={1}>
            <HStack mb={2}>
                <Pressable onPress={() => navigator.dispatch(DrawerActions.openDrawer)}>
                    <AntDesign name="left" size={24} color="black"/>
                </Pressable>
                <Text textAlign={"center"} flex={1}>History Trips</Text>
            </HStack>
            <ScrollView>
                <History/>
                <History/>
                <History/>
                <History/>
            </ScrollView>
        </VStack>
    )
}