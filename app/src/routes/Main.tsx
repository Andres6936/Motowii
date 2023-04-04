import {Box, Button, HStack, IconButton, ScrollView, Stack, Text, VStack} from "native-base";
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import MapView from "react-native-maps";
import React, {useState} from "react";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootParamList} from "../interfaces/RootParamList";
import {FindService, IOffer} from "../FindService";
import {Offer} from "../components/Offer";

export function Main() {
    const navigator = useNavigation<NativeStackNavigationProp<RootParamList>>();
    const [offers, setOffers] = useState<IOffer[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showOffers, setShowOffers] = useState<boolean>(false);

    const searchOffers = async () => {
        setIsLoading(true)
        try {
            const offers = await FindService.find();
            if (offers.length > 0) {
                setOffers(offers);
                setShowOffers(true);
            }
        } catch (ignored) {

        } finally {
            setIsLoading(false)
        }
    }

    const renderButtonCancelTrip = () => {
        if (showOffers) {
            return (
                <Button onPress={() => setShowOffers(false)} colorScheme={"secondary"}
                        position={"absolute"} left={100} right={100} top={435}>
                    Cancel Trip
                </Button>
            )
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
                <ScrollView>
                    {offers.map(offer => <Offer key={offer.serial} offer={offer}/>)}
                </ScrollView>
            )
        } else {
            return (
                <>
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
                </>
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
                <IconButton bg={"white"} position={"absolute"} right={15} top={435}
                            icon={<MaterialIcons name="location-searching" size={24} color="black"/>}/>

                {renderButtonCancelTrip()}

                <VStack position={"absolute"} h={"28%"} left={3} right={3} bottom={3} space={3}>
                    {renderOfferIfExist()}
                </VStack>
            </Box>
        </Stack>
    )
}