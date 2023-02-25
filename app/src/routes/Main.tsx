import {Box, Button, HStack, IconButton, Input, Stack, Text, VStack} from "native-base";
import {MaterialIcons} from '@expo/vector-icons';
import MapView from "react-native-maps";
import React from "react";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootParamList} from "../interfaces/RootParamList";

export function Main() {
    const navigator = useNavigation<NativeStackNavigationProp<RootParamList>>();

    return (
        <Stack safeArea={true} flex={1}>
            <Box position={"relative"} flex={2}>
                <MapView style={{width: "100%", height: "100%"}}/>

                <IconButton bg={"white"} position={"absolute"} right={15} bottom={15}
                            icon={<MaterialIcons name="location-searching" size={24} color="black"/>}/>
                <IconButton bg={"white"} position={"absolute"} right={15} top={15}
                            icon={<MaterialIcons name="share" size={24} color="black"/>}/>
                <IconButton bg={"white"} position={"absolute"} left={15} top={15}
                            onPress={() => navigator.dispatch(DrawerActions.openDrawer())}
                            icon={<MaterialIcons name="dehaze" size={24} color="black"/>}/>
            </Box>

            <VStack space={3} mx={3} py={3} flex={1}>
                <HStack space={3}>
                    <Box flex={1} px={3} py={5} borderRadius={5} borderColor={"gray.500"} borderWidth={1}>
                        <Text>Ride</Text>
                    </Box>

                    <Box flex={1} px={3} py={5} borderRadius={5} borderColor={"gray.500"} borderWidth={1}>
                        <Text>Intercity</Text>
                    </Box>

                    <Box flex={1} px={3} py={5} borderRadius={5} borderColor={"gray.500"} borderWidth={1}>
                        <Text>Courier</Text>
                    </Box>

                    <Box flex={1} px={3} py={5} borderRadius={5} borderColor={"gray.500"} borderWidth={1}>
                        <Text>Fleet</Text>
                    </Box>
                </HStack>
                <Input placeholder={"From"} variant={"rounded"}/>
                <Input placeholder={"To"} variant={"rounded"}/>
                <Button>Find a Motowii</Button>
            </VStack>
        </Stack>
    )
}