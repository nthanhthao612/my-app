import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabBarIcon from "../components/icon/bottom-tabbar-icon";
import Home from "../img/icon/home.png";
import Shopping from "../img/icon/shopping.png";
import Settings from "../img/icon/settings.png";
import HomeTab from "./home-tab";
import Conversation from "../img/buttons/conversation.png";

const Tab = createBottomTabNavigator();

export default function MainNavigationTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarIcon: () => {
            if (route.name === "Home") {
              return <BottomTabBarIcon name={Home} />;
            } else if (route.name === "Shopping") {
              return <BottomTabBarIcon name={Shopping} />;
            } else if (route.name === "Notification") {
              return <BottomTabBarIcon name={Conversation} />;
            } else if (route.name === "Settings") {
              return <BottomTabBarIcon name={Settings} />;
            }
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Shopping"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notification"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={HomeTab}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
