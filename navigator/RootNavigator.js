import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import QrcodeScanner from "../components/QrcodeScanner";
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Root" 
          component={BottomTabNavigator}
          options={{ headerShown: false }} />
          <Stack.Screen 
          name="QR" 
          component={QrcodeScanner}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }