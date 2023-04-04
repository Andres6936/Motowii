import {Box, Button, HStack, IconButton, Input, ScrollView, Stack, Text, VStack} from "native-base";
import {MaterialIcons} from '@expo/vector-icons';
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
                <Button disabled>Searching ....</Button>
            )
        } else {
            return (
                <Button onPress={searchOffers}>Find a Motowii</Button>
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

                <VStack position={"absolute"} borderRadius={8} h={"35%"} p={3}
                        left={2} right={2} bottom={2} space={3} bg={"gray.200"}>
                    {renderOfferIfExist()}
                </VStack>
            </Box>
        </Stack>
    )
}