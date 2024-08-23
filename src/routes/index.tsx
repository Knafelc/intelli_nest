import {NavigationContainer} from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function Routes() {
    return (
        <NavigationContainer>
            <GestureHandlerRootView>
                <TabRoutes />
            </GestureHandlerRootView>
        </NavigationContainer>
    )
}
