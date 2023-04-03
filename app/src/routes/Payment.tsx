import {Box, Divider, HStack, Pressable, Text, VStack} from "native-base";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {RootParamList} from "../interfaces/RootParamList";
import {AntDesign} from "@expo/vector-icons";

function HistoryTransaction() {
    return (
        <VStack my={2}>
            <HStack justifyContent={"space-between"}>
                <Text fontSize={"md"}>Bosupara, Bashala 4100</Text>
                <Text fontSize={"md"}>-$30</Text>
            </HStack>
            <Text opacity={.5}>12 May, 2020 | 7:15 AM - 8:30 AM</Text>
        </VStack>
    )
}

function Card() {
    return (
        <Box flex={1} mt={2} mb={5} borderRadius={17} bg={"tertiary.500"} p={5}>
            <VStack>
                <Text px={5} mb={5} color={"white"} fontSize={"2xl"} bold>Visa</Text>
                <HStack justifyContent={"space-between"}>
                    <Text flex={1} fontSize={"md"} color={"white"} textAlign={"center"} bold>3744</Text>
                    <Text flex={1} fontSize={"md"} color={"white"} textAlign={"center"} bold>****</Text>
                    <Text flex={1} fontSize={"md"} color={"white"} textAlign={"center"} bold>****</Text>
                    <Text flex={1} fontSize={"md"} color={"white"} textAlign={"center"} bold>9735</Text>
                </HStack>
                <HStack px={5} mt={5} pt={5} justifyContent={"space-between"}>
                    <Text fontSize={"md"} color={"white"} textAlign={"center"}>Mahmud Nik</Text>
                    <Text fontSize={"md"} color={"white"} textAlign={"center"}>05/31</Text>
                </HStack>
            </VStack>
        </Box>
    )
}

export function Payment() {
    const navigator = useNavigation<DrawerNavigationProp<RootParamList>>()

    return (
        <VStack bg={"gray.200"} p={3} safeArea={true} flex={1}>
            <HStack mb={2}>
                <Pressable onPress={() => navigator.dispatch(DrawerActions.openDrawer)}>
                    <AntDesign name="left" size={24} color="black"/>
                </Pressable>
                <Text fontSize={"lg"} textAlign={"center"} flex={1}>Payment</Text>
            </HStack>
            <VStack>
                <VStack mb={5} pb={5}>
                    <Text mt={5} pt={5} fontSize={48} textAlign={"center"}>$455.65</Text>
                    <Text textAlign={"center"} opacity={.5}>Available Cash</Text>
                </VStack>
                <Text fontSize={"lg"} bold>Cards</Text>
                <HStack space={2}>
                    <Box mt={2}>
                        <AntDesign name="plussquare" size={36} color="ligthgray"/>
                    </Box>
                    <Card/>
                </HStack>
                <Text mt={5} fontSize={"lg"} bold>History</Text>
                <HistoryTransaction/>
                <Divider/>
                <HistoryTransaction/>
                <Divider/>
                <HistoryTransaction/>
            </VStack>
        </VStack>
    )
}