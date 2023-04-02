import {Divider, HStack, Text, VStack} from "native-base";

export function Trips() {
    return (
        <VStack bg={"gray.200"} p={3} safeArea={true} flex={1}>
            <VStack bg={"gray.50"} p={3} borderRadius={5} borderColor={"gray.300"} borderWidth={1}>
                <HStack justifyContent={"space-between"}>
                    <Text>Pickup point</Text>
                    <Text>7:15 AM</Text>
                </HStack>
                <HStack>
                    <Text fontSize={"lg"} bold>Bosupara, Basthola 4100</Text>
                </HStack>

                <HStack mt={4} justifyContent={"space-between"}>
                    <Text>Pickup point</Text>
                    <Text>8:30 AM</Text>
                </HStack>
                <HStack>
                    <Text fontSize={"lg"} bold>Beza, Building 4576</Text>
                </HStack>
                <Divider my={3}/>
                <HStack>
                    <VStack flex={2}>
                        <Text>Madhumd H</Text>
                        <Text>(4.9)</Text>
                    </VStack>
                    <VStack flex={1}>
                        <Text>Final cost</Text>
                        <Text fontSize={"md"} bold>$45.65</Text>
                    </VStack>
                    <VStack flex={1}>
                        <Text>Final cost</Text>
                        <Text fontSize={"md"} bold>$45.65</Text>
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    )
}