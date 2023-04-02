import {ScrollView, VStack} from "native-base";
import {History} from "../components/History";

export function Trips() {
    return (
        <VStack bg={"gray.200"} p={3} safeArea={true} flex={1}>
            <ScrollView>
                <History/>
                <History/>
                <History/>
                <History/>
            </ScrollView>
        </VStack>
    )
}