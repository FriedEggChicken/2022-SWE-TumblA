import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";
import EditScreen from "../screens/EditScreen";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const bottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
      <bottomTab.Navigator initialRouteName="HomeScreen">
        <bottomTab.Screen name="홈" component={HomeScreen} 
          options={{tabBarIcon: ({color,size}) => (<FontAwesome name="home" size={size} color={color} /> )}}
        />
        <bottomTab.Screen name="요청하기" component={RequestScreen} 
           options={{tabBarIcon: ({color,size}) => (<Entypo name="bell" size={size} color={color} /> )}}
        />
        <bottomTab.Screen name="설정" component={EditScreen} 
           options={{tabBarIcon: ({color,size}) => (<Entypo name="list" size={size} color={color} /> )}}
        />
      </bottomTab.Navigator>
    );
  }