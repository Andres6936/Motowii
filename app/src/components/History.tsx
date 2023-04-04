import {Avatar, Divider, HStack, Text, VStack} from "native-base";
import {FontAwesome, FontAwesome5, MaterialIcons} from "@expo/vector-icons";

export function History() {
    return (
        <VStack mt={1} mb={2} bg={"gray.50"} py={3} px={5} borderRadius={5} borderColor={"gray.300"} borderWidth={1}>
            <VStack>
                <HStack alignItems={"center"} space={3}>
                    <FontAwesome name="circle" size={24} color="green"/>
                    <VStack flex={1}>
                        <HStack justifyContent={"space-between"}>
                            <Text opacity={.5}>Pickup point</Text>
                            <Text opacity={.5}>7:15 AM</Text>
                        </HStack>
                        <HStack>
                            <Text fontSize={"lg"}>Bosupara, Basthola 4100</Text>
                        </HStack>
                    </VStack>
                </HStack>
            </VStack>

            <VStack>
                <HStack mt={4} alignItems={"center"} space={3}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="green"/>
                    <VStack flex={1}>
                        <HStack justifyContent={"space-between"}>
                            <Text opacity={.5}>Pickup point</Text>
                            <Text opacity={.5}>8:30 AM</Text>
                        </HStack>
                        <HStack>
                            <Text fontSize={"lg"}>Beza, Building 4576</Text>
                        </HStack>
                    </VStack>
                </HStack>
            </VStack>

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
                            <Text opacity={.5}>(4.9)</Text>
                        </HStack>
                    </VStack>
                </HStack>
                <VStack flex={1}>
                    <Text opacity={.5}>Final cost</Text>
                    <Text fontSize={"lg"} bold>$45.65</Text>
                </VStack>
                <VStack flex={1}>
                    <Text textAlign={"right"} opacity={.5}>Avg. Time</Text>
                    <Text textAlign={"right"} fontSize={"lg"} bold>45:15m</Text>
                </VStack>
            </HStack>
        </VStack>
    )
}