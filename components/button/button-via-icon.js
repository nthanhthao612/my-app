import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

import NewPost from "../../img/buttons/new-post.png";
import { ScreenHeight, ScreenWidth } from "../../configs/screen-config";

const defaultValue = {
  icon: NewPost,
  size: "medium",
};

export default function ButtonViaIcon({
  icon = defaultValue.icon,
}) {
  const style = StyleSheet.create({
    container: {
      margin: ScreenWidth * 0.03,
      justifyContent: "center",
      alignItems: "center",
      padding: ScreenWidth * 0.01,
    },
    icon: {
      width: ScreenWidth * 0.07,
      height: ScreenWidth * 0.07,
      marginHorizontal: ScreenWidth * 0.01,
    },
  });
  return (
    <TouchableOpacity style={style.container}>
      <Image source={icon} style={style.icon} />
    </TouchableOpacity>
  );
}
