import { ImageBackground, StyleSheet } from "react-native";

import { ScreenHeight } from "../../configs/screen-config";

import Home from "../../img/icon/home.png";

const defaultValue = {
  name: Home,
};

export default function BottomTabBarIcon(props) {
  const { name = defaultValue.name } = props;
  return <ImageBackground source={name} style={style.container} />;
}

const style = StyleSheet.create({
  container: {
    padding: (ScreenHeight * 0.5) / 100,
    width: (ScreenHeight * 3.5) / 100,
    height: (ScreenHeight * 3.5) / 100,
  },
});
