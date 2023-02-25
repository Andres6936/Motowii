import {Box, Button, HStack, Input, Stack, Text, VStack} from "native-base";
import MapView from "react-native-maps";
import React from "react";

export function Main() {
    return (
        <Stack safeArea={true} flex={1}>
            <MapView style={{flex: 2, width: "100%", height: "100%"}}/>
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