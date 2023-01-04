import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainHomeScreen from "../screens/home/main-home-screen";
import CommentDetailScreen from "../screens/home/comment-detail-screen";

const Stack = createNativeStackNavigator();

export default function HomeTab() {
  return (
    <Stack.Navigator initialRouteName="HomeMain">
      <Stack.Screen
        name="HomeMain"
        options={{ headerShown: false }}
        component={MainHomeScreen}
      />
      <Stack.Screen
        name="Comment-Detail"
        component={CommentDetailScreen}
      />
    </Stack.Navigator>
  );
}
