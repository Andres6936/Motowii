import {Avatar, Divider, HStack, Text, VStack} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";

export function History() {
    return (
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
                <HStack space={3} flex={2}>
                    <Avatar bg="green.500" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        AJ
                    </Avatar>
                    <VStack>
                        <Text>Madhumd H</Text>
                        <HStack space={2} alignItems={"center"}>
                            <MaterialIcons name="star-rate" size={12} color="gold"/>
                            <Text>(4.9)</Text>
                        </HStack>
                    </VStack>
                </HStack>
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
    )
}