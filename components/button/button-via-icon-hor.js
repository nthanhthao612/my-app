import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";

import Heart from "../../img/buttons/heart.png";
import { ScreenHeight, ScreenWidth } from "../../configs/screen-config";

const defaultValue = {
  icon: Heart,
  name: "Like",
  size: "medium",
  isActived: false,
  value: 10,
  action: ()=>1
};

export default function ButtonViaIconHor({
  action= defaultValue.action,
  icon = defaultValue.icon,
  name = defaultValue.name,
  isActived = defaultValue.isActived,
  value = defaultValue.value,
}) {
  console.log(action)
  const style = StyleSheet.create({
    container: {
      maxWidth: 129,
      maxHeight: 30,
      flexDirection: "row",
      margin: ScreenWidth * 0.01,
      justifyContent: "center",
      alignItems: "center",
      padding: ScreenWidth * 0.01,
    },
    icon: {
      width: ScreenWidth * 0.051,
      height: ScreenWidth * 0.05,
      marginHorizontal: ScreenWidth * 0.01,
    },
    text: {
      fontWeight: isActived ? "bold" : "none",
      fontSize: isActived ? "90%" : "none",
      color: isActived ? "rgba(21, 68, 255, 0.8)" : "rgba(234, 240, 255)",
    },
  });
  return (
    <TouchableOpacity style={style.container} onPress={()=>action()}>
      {value > 0 && <Text style={style.text}>{value}</Text>}
      <Text style={style.text}>{` ${name}`}</Text>
      <Image source={icon} style={style.icon} />
    </TouchableOpacity>
  );
}
