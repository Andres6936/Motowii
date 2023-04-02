import {Avatar, Button, HStack, Text, VStack} from "native-base";
import React from "react";
import {IOffer} from "../FindService";

interface Props {
    offer: IOffer
}

export function Offer(props: Props) {
    return (
        <HStack bg={"light.100"} borderRadius={5} borderColor={"gray.300"} py={3} px={4} borderWidth={1}
                alignItems={"center"} space={1}>
            <VStack flex={1}>
                <Avatar bg="cyan.500" source={{
                    uri: props.offer.photo
                }}/>
                <Text mt={2}>{props.offer.name}</Text>
            </VStack>
            <VStack pl={3} flex={2}>
                <HStack alignItems={"center"} space={3}>
                    <Text>Price:</Text>
                    <Text fontSize={"2xl"} bold>${props.offer.price}</Text>
                </HStack>
                <HStack alignItems={"center"} space={3}>
                    <Text>Time:</Text>
                    <Text fontSize={"2xl"} bold>{props.offer.time} min.</Text>
                </HStack>
            </VStack>
            <Button flex={1}>Accept</Button>
        </HStack>
    )
}