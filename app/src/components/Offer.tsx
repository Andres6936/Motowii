import {Avatar, Button, HStack, Text, VStack} from "native-base";
import React from "react";
import {IOffer} from "../FindService";

interface Props {
    offer: IOffer
}

export function Offer(props: Props) {
    return (
        <HStack bg={"light.100"} borderRadius={10} borderColor={"gray.300"} py={2} px={4} borderWidth={1}
                alignItems={"center"} space={1}>
            <VStack flex={1} alignItems={"center"}>
                <Avatar bg="cyan.500" source={{
                    uri: props.offer.photo
                }}/>
                <Text mt={2} bold>{props.offer.name}</Text>
            </VStack>
            <VStack space={1} pl={4} flex={2}>
                <VStack space={0}>
                    <Text p={0} m={0}>Price:</Text>
                    <Text p={0} m={0} lineHeight={26} fontSize={"2xl"} bold>${props.offer.price}</Text>
                </VStack>
                <VStack>
                    <Text p={0} m={0}>Time:</Text>
                    <Text p={0} m={0} lineHeight={26} fontSize={"2xl"} bold>{props.offer.time} min.</Text>
                </VStack>
            </VStack>
            <Button flex={1}>Accept</Button>
        </HStack>
    )
}