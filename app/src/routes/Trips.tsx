import {VStack} from "native-base";
import {History} from "../components/History";

export function Trips() {
    return (
        <VStack space={3} bg={"gray.200"} p={3} safeArea={true} flex={1}>
            <History/>
            <History/>
            <History/>
        </VStack>
    )
}