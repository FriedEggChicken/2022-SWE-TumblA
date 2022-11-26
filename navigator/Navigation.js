import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";

const stack = createNativeStackNavigator();

export default function Navigation() {
    return (
    <NavigationContainer>
        <RootNavigator/>
    </NavigationContainer>
    );
  }