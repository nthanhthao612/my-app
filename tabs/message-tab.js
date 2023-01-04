import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainMessageScreen from "../screens/main-message-screen";
import MessageScreen from "../screens/message-screen";
const Stack = createNativeStackNavigator();

export default function MessageTab() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        options={{ headerShown: false }}
        component={MainMessageScreen}
      />
      <Stack.Screen
        name="Messages"
        component={MessageScreen}
      />
    </Stack.Navigator>
  );
}
