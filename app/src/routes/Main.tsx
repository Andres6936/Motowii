import {Box, Button, Divider, HStack, IconButton, Select, Stack, Text, VStack} from "native-base";
import {FontAwesome, Ionicons, MaterialIcons} from '@expo/vector-icons';
import MapView from "react-native-maps";
import React, {useState} from "react";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootParamList} from "../interfaces/RootParamList";
import {FindService} from "../FindService";

export function Main() {
    const navigator = useNavigation<NativeStackNavigationProp<RootParamList>>();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showOffers, setShowOffers] = useState<boolean>(false);

    const searchOffers = async () => {
        setIsLoading(true)
        try {
            const offers = await FindService.find();
            if (offers.length > 0) {
                setShowOffers(true);
            }
        } catch (ignored) {

        } finally {
            setIsLoading(false)
        }
    }

    const renderButtonLoading = () => {
        if (isLoading) {
            return (
                <Button borderRadius={10} size={"lg"} colorScheme={"tertiary"} disabled>
                    Searching ....
                </Button>
            )
        } else {
            return (
                <Button borderRadius={10} size={"lg"} colorScheme={"tertiary"} onPress={searchOffers}>
                    Where you go?
                </Button>
            )
        }
    }

    const renderOfferIfExist = () => {
        if (showOffers) {
            return (
                <VStack position={"absolute"} h={"39%"} left={3} right={3} bottom={3} space={3}>
                    <Box p={3} borderRadius={8} bg={"gray.200"}>
                        <VStack space={3}>
                            <Text opacity={.5}>Select your car</Text>
                            <HStack space={4} px={4}>
                                <Ionicons name="ios-car" size={48} color="green"/>
                                <VStack flex={1}>
                                    <Text fontSize={"lg"}>Easy</Text>
                                    <Text opacity={.5}>5 Min</Text>
                                </VStack>
                                <VStack flex={1}>
                                    <Text textAlign={"right"} opacity={.5} strikeThrough>$70</Text>
                                    <Text textAlign={"right"} color={"tertiary.600"} fontSize={"lg"} bold>$59</Text>
                                </VStack>
                            </HStack>

                            <HStack space={4} px={4}>
                                <Ionicons name="ios-car-sport" size={48} color="green"/>
                                <VStack flex={1}>
                                    <Text fontSize={"lg"}>XL</Text>
                                    <Text opacity={.5}>3 Min</Text>
                                </VStack>
                                <VStack flex={1}>
                                    <Text textAlign={"right"} opacity={.5} strikeThrough>$90</Text>
                                    <Text textAlign={"right"} color={"tertiary.600"} fontSize={"lg"} bold>$80</Text>
                                </VStack>
                            </HStack>

                            <Divider/>

                            <HStack space={2}>
                                <Select flex={1} placeholder={"Cash"}/>
                                <Select flex={1} placeholder={"Promo"}/>
                            </HStack>
                        </VStack>
                    </Box>

                    <Button borderRadius={10} size={"lg"} colorScheme={"tertiary"} onPress={searchOffers}>
                        Lets Go
                    </Button>
                </VStack>
            )
        } else {
            return (
                <VStack position={"absolute"} h={"28%"} left={3} right={3} bottom={3} space={3}>
                    <Box p={3} borderRadius={8} bg={"gray.200"}>
                        <VStack space={3}>
                            <Text opacity={.5}>Recent Trips</Text>
                            <VStack>
                                <HStack space={2} alignItems={"center"}>
                                    <FontAwesome name="circle" size={18} color="green"/>
                                    <Text fontSize={"lg"} bold>Beza Building</Text>
                                </HStack>
                                <Text ml={6} fontSize={"xs"} opacity={.5}>Cameron st. addidas abada 4526</Text>
                            </VStack>
                            <VStack>
                                <HStack space={2} alignItems={"center"}>
                                    <FontAwesome name="circle" size={18} color="green"/>
                                    <Text fontSize={"lg"} bold>Akangkha Tower</Text>
                                </HStack>
                                <Text ml={6} fontSize={"xs"} opacity={.5}>Cameron st. addidas besides hostpital
                                    5896</Text>
                            </VStack>
                        </VStack>
                    </Box>

                    {renderButtonLoading()}
                </VStack>
            )
        }
    }

    return (
        <Stack safeArea={true} flex={1}>
            <Box position={"relative"} flex={2}>
                <MapView style={{width: "100%", height: "100%"}}/>

                <IconButton bg={"white"} position={"absolute"} left={15} top={15}
                            onPress={() => navigator.dispatch(DrawerActions.openDrawer())}
                            icon={<MaterialIcons name="dehaze" size={24} color="black"/>}/>
                <IconButton bg={"white"} position={"absolute"} right={15} top={15}
                            icon={<MaterialIcons name="share" size={24} color="black"/>}/>
                <IconButton bg={"white"} position={"absolute"} right={15} bottom={showOffers ? 330 : 240}
                            icon={<MaterialIcons name="location-searching" size={24} color="black"/>}/>

                {renderOfferIfExist()}
            </Box>
        </Stack>
    )
}